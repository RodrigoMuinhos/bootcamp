import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { neon } from "@neondatabase/serverless";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const allowedOrigins = process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : "*";

// Validate DATABASE_URL
if (!process.env.DATABASE_URL) {
  console.error("ERROR: DATABASE_URL environment variable is not set!");
  console.error("Available env vars:", Object.keys(process.env).filter(k => !k.includes('SECRET')));
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CRM-Start Bootcamp API",
      version: "1.0.0",
      description: "API de leads, newsletter e analytics para o bootcamp CRM-Start",
    },
    servers: [
      { url: "http://localhost:4000", description: "Local" },
      { url: "https://bootcamp-backend-production.up.railway.app", description: "Production" },
    ],
  },
  apis: ["./index.mjs"],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.set("trust proxy", true);

// Configure CORS to accept all origins or specific ones
const corsOptions = {
  origin: allowedOrigins === "*" ? "*" : allowedOrigins,
  credentials: false,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));
app.use(express.json());

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

function getClientIp(req) {
  const xfwd = (req.headers["x-forwarded-for"] || "").split(",").map((ip) => ip.trim()).filter(Boolean);
  if (xfwd.length > 0) return xfwd[0];
  return req.ip || req.connection?.remoteAddress || req.socket?.remoteAddress || "";
}

async function ensureSchema() {
  await sql`CREATE EXTENSION IF NOT EXISTS "pgcrypto";`;
  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      cpf TEXT,
      experience TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `;
  // Garantir coluna cpf em bases antigas
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS cpf TEXT;`;
  await sql`
    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS visits (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      ip TEXT NOT NULL UNIQUE,
      user_agent TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS cta_clicks (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      ip TEXT NOT NULL,
      user_agent TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `;
}

app.get("/health", async (_req, res) => {
  try {
    const version = await sql`select version()`;
    res.json({ status: "ok", db: version[0]?.version || "unknown" });
  } catch (err) {
    console.error("Erro healthcheck", err);
    res.status(500).json({ status: "error", message: "DB indisponível" });
  }
});

/**
 * @swagger
 * /api/lead:
 *   get:
 *     summary: Lista todos os leads cadastrados
 *     description: Retorna uma lista de até 200 leads com informações de inscrição
 *     tags: [Leads]
 *     responses:
 *       200:
 *         description: Lista de leads
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 leads:
 *                   type: array
 *                   items:
 *                     type: object
 *                 total:
 *                   type: number
 *       500:
 *         description: Erro ao buscar leads
 */
app.get("/api/lead", async (_req, res) => {
  try {
    const leads = await sql`
      SELECT id, name, email, phone, experience, created_at
      FROM leads
      ORDER BY created_at DESC
      LIMIT 200;
    `;
    res.json({ leads, total: leads.length });
  } catch (err) {
    console.error("Erro listando leads", err);
    res.status(500).json({ error: "Falha ao buscar leads" });
  }
});

/**
 * @swagger
 * /api/lead:
 *   post:
 *     summary: Criar novo lead
 *     description: Inscreve um novo lead com validação de CPF e dados de contato
 *     tags: [Leads]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: João Silva
 *               email:
 *                 type: string
 *                 example: joao@example.com
 *               phone:
 *                 type: string
 *                 example: "11999999999"
 *               cpf:
 *                 type: string
 *                 example: "12345678901"
 *               experience:
 *                 type: string
 *                 example: iniciante
 *     responses:
 *       201:
 *         description: Lead criado com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro ao salvar lead
 */
app.post("/api/lead", async (req, res) => {
  const { name, email, phone, cpf, experience } = req.body || {};

  if (!email || !name) {
    return res.status(400).json({ error: "Nome e email são obrigatórios" });
  }

  // Validação de CPF (backend)
  function onlyDigits(s) { return (s || '').replace(/\D/g, ''); }
  function isValidCPF(value) {
    const cpfDigits = onlyDigits(value);
    if (!cpfDigits || cpfDigits.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpfDigits)) return false; // todos iguais
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(cpfDigits[i], 10) * (10 - i);
    let d1 = (sum * 10) % 11; if (d1 === 10) d1 = 0;
    if (d1 !== parseInt(cpfDigits[9], 10)) return false;
    sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(cpfDigits[i], 10) * (11 - i);
    let d2 = (sum * 10) % 11; if (d2 === 10) d2 = 0;
    return d2 === parseInt(cpfDigits[10], 10);
  }
  if (cpf && !isValidCPF(cpf)) {
    return res.status(400).json({ error: "CPF inválido" });
  }

  try {
    const inserted = await sql`
      INSERT INTO leads (name, email, phone, cpf, experience)
      VALUES (${name}, ${email}, ${phone || null}, ${cpf || null}, ${experience || null})
      RETURNING id, name, email, phone, cpf, experience, created_at;
    `;
    res.status(201).json({ lead: inserted[0] });
  } catch (err) {
    console.error("Erro salvando lead", err);
    res.status(500).json({ error: "Falha ao salvar lead" });
  }
});

// Newsletter subscription
/**
 * @swagger
 * /api/newsletter:
 *   post:
 *     summary: Inscrever na newsletter
 *     description: Cadastra um email para receber a newsletter
 *     tags: [Newsletter]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: usuario@example.com
 *     responses:
 *       201:
 *         description: Email inscrito na newsletter
 *       400:
 *         description: Email obrigatório
 *       500:
 *         description: Erro ao salvar inscrição
 */
app.post("/api/newsletter", async (req, res) => {
  const { email } = req.body || {};
  if (!email) {
    return res.status(400).json({ error: "Email é obrigatório" });
  }
  try {
    const inserted = await sql`
      INSERT INTO newsletter_subscribers (email)
      VALUES (${email})
      RETURNING id, email, created_at;
    `;
    res.status(201).json({ subscriber: inserted[0] });
  } catch (err) {
    console.error("Erro salvando newsletter", err);
    res.status(500).json({ error: "Falha ao salvar inscrição" });
  }
});

// Visita única por IP
/**
 * @swagger
 * /api/visit:
 *   post:
 *     summary: Registrar visita única por IP
 *     description: Registra uma visita única por endereço IP (não duplica)
 *     tags: [Analytics]
 *     responses:
 *       200:
 *         description: Visita registrada (ou já existia)
 *       400:
 *         description: IP não identificado
 *       500:
 *         description: Erro ao registrar visita
 */
app.post("/api/visit", async (req, res) => {
  const ip = getClientIp(req);
  if (!ip) return res.status(400).json({ error: "IP não identificado" });
  const userAgent = req.get("user-agent") || null;
  try {
    const inserted = await sql`
      INSERT INTO visits (ip, user_agent)
      VALUES (${ip}, ${userAgent})
      ON CONFLICT (ip) DO NOTHING
      RETURNING id, created_at;
    `;
    res.json({ recorded: inserted.length > 0, ip });
  } catch (err) {
    console.error("Erro registrando visita", err);
    res.status(500).json({ error: "Falha ao registrar visita" });
  }
});

// Registro de cliques no CTA "Garantir minha vaga"
/**
 * @swagger
 * /api/cta-click:
 *   post:
 *     summary: Registrar clique no CTA
 *     description: Registra um clique no botão "Garantir minha vaga" com IP do usuário
 *     tags: [Analytics]
 *     responses:
 *       201:
 *         description: Clique registrado
 *       400:
 *         description: IP não identificado
 *       500:
 *         description: Erro ao registrar clique
 */
app.post("/api/cta-click", async (req, res) => {
  const ip = getClientIp(req);
  if (!ip) return res.status(400).json({ error: "IP não identificado" });
  const userAgent = req.get("user-agent") || null;
  try {
    const inserted = await sql`
      INSERT INTO cta_clicks (ip, user_agent)
      VALUES (${ip}, ${userAgent})
      RETURNING id, created_at;
    `;
    res.status(201).json({ click: inserted[0] });
  } catch (err) {
    console.error("Erro registrando clique CTA", err);
    res.status(500).json({ error: "Falha ao registrar clique" });
  }
});

ensureSchema()
  .then(() => {
    app.listen(port, () => {
      console.log(`API de leads rodando em http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Erro inicializando schema", err);
    process.exit(1);
  });
