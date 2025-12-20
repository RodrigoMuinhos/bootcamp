import { X, CheckCircle, Clock, Target, Rocket } from 'lucide-react';

interface RoadmapProps {
  onClose: () => void;
}

interface Week {
  number: number;
  title: string;
  objective: string;
  topics: string[];
  delivery: string;
  guest?: string;
}

const weeks: Week[] = [
  {
    number: 1,
    title: "Onboarding & Mentalidade Dev",
    objective: "Alinhar base técnica e visão de mercado",
    topics: [
      "Como funciona o mercado de tecnologia",
      "Diferença entre faculdade × mercado",
      "O que é frontend, backend, API, banco e deploy",
      "Setup completo: VS Code, Git & GitHub, Java, Node.js, Docker",
      "Organização do repositório (monorepo ou multi-repo)"
    ],
    delivery: "Ambiente funcionando + primeiro commit profissional"
  },
  {
    number: 2,
    title: "UX/UI & Figma (Produto antes do código)",
    objective: "Aprender a pensar como produto",
    topics: [
      "Introdução a UX/UI para devs",
      "Fluxo de usuário",
      "Wireframes no Figma",
      "Design simples, funcional e vendável",
      "Preparação do layout do CRM"
    ],
    delivery: "Protótipo do CRM-Start no Figma"
  },
  {
    number: 3,
    title: "Frontend com Next.js",
    objective: "Construir a interface do sistema",
    topics: [
      "Estrutura do Next.js",
      "Rotas e páginas",
      "Consumo de API REST",
      "Formulários e listagens",
      "Integração frontend ↔ backend"
    ],
    delivery: "Frontend funcional consumindo a API"
  },
  {
    number: 4,
    title: "Fundamentos de Programação (Backend – Java)",
    objective: "Criar base sólida de backend",
    topics: [
      "Lógica aplicada ao backend",
      "Estrutura de classes",
      "Organização de pacotes",
      "Boas práticas iniciais",
      "Leitura e entendimento de código"
    ],
    delivery: "Base do projeto CRM-Start (backend estruturado)"
  },
  {
    number: 5,
    title: "APIs REST com Spring Boot",
    objective: "Entender comunicação entre sistemas",
    topics: [
      "O que é API REST",
      "HTTP, rotas e status",
      "Controllers no Spring Boot",
      "Testes com Postman / Insomnia"
    ],
    delivery: "Primeiros endpoints REST funcionando"
  },
  {
    number: 6,
    title: "CRUD Profissional & Arquitetura",
    objective: "Construir funcionalidades reais",
    topics: [
      "Controller → Service → Repository",
      "DTOs e validações",
      "Tratamento global de erros",
      "Boas práticas de arquitetura"
    ],
    delivery: "CRUD completo de Clientes"
  },
  {
    number: 7,
    title: "Banco de Dados & Persistência",
    objective: "Trabalhar com dados corretamente",
    topics: [
      "PostgreSQL",
      "Modelagem de dados",
      "Relacionamentos",
      "JPA / Hibernate",
      "Migrations com Flyway"
    ],
    delivery: "Banco estruturado + dados persistidos"
  },
  {
    number: 8,
    title: "Auth, Segurança & LGPD",
    objective: "Tornar o sistema real e responsável",
    topics: [
      "Login e auth",
      "JWT",
      "Perfis de usuário",
      "Proteção de rotas",
      "LGPD aplicada ao sistema",
      "Dados sensíveis e responsabilidade do desenvolvedor"
    ],
    delivery: "Sistema seguro, autenticado e alinhado à LGPD"
  },
  {
    number: 9,
    title: "Docker & Ambientes",
    objective: "Padronizar execução e preparo para produção",
    topics: [
      "Dockerfile (frontend e backend)",
      "Docker Compose",
      "Variáveis de ambiente",
      "Diferença entre dev, staging e prod"
    ],
    delivery: "Sistema full stack rodando com um comando"
  },
  {
    number: 10,
    title: "Documentação, Qualidade & IA",
    objective: "Deixar o projeto apresentável e profissional",
    topics: [
      "Swagger / OpenAPI",
      "README profissional",
      "Boas práticas de commit",
      "Uso de IA: Debug, revisão de código e refatoração orientada"
    ],
    delivery: "Projeto documentado como produto real"
  },
  {
    number: 11,
    title: "Deploy em Produção + Aula Especial",
    objective: "Colocar o sistema no ar e ampliar visão",
    topics: [
      "Conceito de cloud",
      "Variáveis sensíveis",
      "Deploy do backend",
      "Deploy do frontend",
      "Testes em produção",
      "Como sistemas funcionam em produção",
      "Redes, firewalls e segurança",
      "Erros comuns de devs iniciantes",
      "O que empresas realmente esperam"
    ],
    delivery: "CRM-Start online com URL pública",
    guest: "Murilo Muinhos — Especialista Sênior em Infraestrutura e Redes, Internet e Segurança"
  },
  {
    number: 12,
    title: "Portfólio, Mercado & Próximos Passos",
    objective: "Transformar aprendizado em oportunidade",
    topics: [
      "Como apresentar o projeto",
      "Simulação de entrevista técnica",
      "Como explicar decisões técnicas",
      "Evolução do CRM para SaaS",
      "Próximos passos na carreira"
    ],
    delivery: "✔ Sistema no ar (frontend + backend) • ✔ GitHub profissional • ✔ Projeto forte para vagas júnior"
  }
];

export function Roadmap({ onClose }: RoadmapProps) {
  return (
    <div id="roadmap" className="fixed inset-0 z-50 overflow-y-auto bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-primary to-accent border-b border-border backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Roadmap — CRM-Start Bootcamp</h1>
              <p className="text-white/80">Do Zero ao Deploy • Full Stack • 12 Semanas</p>
            </div>
            <button
              onClick={onClose}
              className="p-3 hover:bg-white/10 rounded-xl transition-colors text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Intro */}
        <div className="bg-muted border border-border rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Um caminho estruturado para sair do zero e construir, publicar e apresentar um sistema real em produção</h2>
          <p className="text-muted-foreground text-lg mb-6">
            Aqui você não aprende só a programar. Você aprende a pensar como dev, construir como mercado e entregar como produto.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2 text-accent font-semibold">
              <span>🚀</span> Do Zero ao Primeiro Deploy
            </div>
            <div className="flex items-center gap-2 text-accent font-semibold">
              <span>💼</span> Projeto Real • Java + Spring Boot + Next.js
            </div>
            <div className="flex items-center gap-2 text-accent font-semibold">
              <span>✨</span> Produto Final: CRM Lite Web (Online)
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-center">Linha do Tempo</h3>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {['Setup', 'Backend', 'API', 'Banco', 'Segurança/LGPD', 'UX/Figma', 'Frontend', 'Docker', 'Docs/IA', 'Deploy', 'Mercado'].map((item, i) => (
              <div key={i} className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Weeks Grid */}
        <div className="space-y-6">
          {weeks.map((week, index) => (
            <div
              key={week.number}
              className={`relative border-2 rounded-2xl p-8 transition-all hover:shadow-lg ${
                week.guest 
                  ? 'bg-gradient-to-br from-accent/5 to-primary/5 border-accent' 
                  : 'bg-card border-border hover:border-primary/50'
              }`}
            >
              {/* Week Number Badge */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">{week.number}</span>
              </div>

              <div className="pl-12">
                {/* Title & Objective */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3">{week.title}</h3>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <Target className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                    <p className="italic">{week.objective}</p>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    Conteúdo:
                  </h4>
                  <ul className="space-y-2">
                    {week.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Guest */}
                {week.guest && (
                  <div className="mb-6 p-4 bg-accent/10 border border-accent/30 rounded-xl">
                    <div className="flex items-center gap-2 text-accent font-semibold">
                      <Rocket className="w-5 h-5" />
                      <span>Convidado Especial:</span>
                    </div>
                    <p className="mt-2 font-medium">{week.guest}</p>
                  </div>
                )}

                {/* Delivery */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-accent">🎯 Entrega:</span>
                    <span className="font-medium">{week.delivery}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-16 mb-12 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-10">
          <h3 className="text-2xl font-bold mb-4">🔥 Diferencial do Curso</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">✓</span>
              <span>Projeto curto, simples e real — Pratico e Teórico</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">✓</span>
              <span>Tudo pensado para: rodar, subir, mostrar como portfólio</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">✓</span>
              <span>Método prático baseado no que o mercado realmente usa</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">✓</span>
              <span>Suporte direto com especialistas em cada tecnologia</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">✓</span>
              <span>Projeto pronto para apresentar em entrevistas</span>
            </li>
          </ul>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Pronto para começar sua jornada?</h3>
          <p className="text-xl mb-8 text-white/90">
            12 semanas para transformar sua carreira em tecnologia
          </p>
          <button
            onClick={onClose}
            className="px-10 py-5 bg-white hover:bg-white/90 text-primary rounded-xl transition-all duration-200 font-semibold shadow-xl"
          >
            Voltar e Garantir Minha Vaga
          </button>
        </div>
      </div>
    </div>
  );
}