# API Routes - Next.js Server-Side Proxy

Este diretório contém as API Routes do Next.js que funcionam como proxy entre o frontend e o backend no Railway.

## 🎯 Objetivo

Resolver o problema de CORS ao fazer requisições do navegador para um backend em domínio diferente.

## 📁 Estrutura

```
api/
├── lead/
│   └── route.ts       # Proxy para /api/lead (GET, POST)
└── newsletter/
    └── route.ts       # Proxy para /api/newsletter (POST)
```

## 🔄 Fluxo de Requisição

```
Browser
  ↓ fetch('/api/lead')
Next.js API Route (Vercel Server)
  ↓ fetch(BACKEND_URL + '/api/lead')
Backend Railway
  ↓ Response
Next.js API Route
  ↓ Response
Browser
```

## 🔐 Segurança

- ✅ Sem CORS issues (requisições são server-side)
- ✅ BACKEND_URL é variável de ambiente (não exposta ao browser)
- ✅ Validações mantidas no backend
- ✅ Logs centralizados

## 🛠 Como Usar

### No Frontend:
```tsx
// ❌ Antes (com CORS issues)
const response = await fetch('https://backend.railway.app/api/lead', {
  method: 'POST',
  body: JSON.stringify(data)
});

// ✅ Agora (sem CORS)
const response = await fetch('/api/lead', {
  method: 'POST',
  body: JSON.stringify(data)
});
```

### Variável de Ambiente:
```env
# .env.local ou Vercel Environment Variables
BACKEND_URL=https://bootcamp-backend-production.up.railway.app
```

## 📝 Endpoints

### POST /api/lead
Cria um novo lead.

**Request:**
```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "phone": "11999999999",
  "cpf": "12345678901",
  "experience": "iniciante"
}
```

**Response (201):**
```json
{
  "lead": {
    "id": "uuid",
    "name": "João Silva",
    "email": "joao@example.com",
    ...
  }
}
```

### GET /api/lead
Lista todos os leads.

**Response (200):**
```json
{
  "leads": [...],
  "total": 42
}
```

### POST /api/newsletter
Inscreve email na newsletter.

**Request:**
```json
{
  "email": "usuario@example.com"
}
```

**Response (201):**
```json
{
  "subscriber": {
    "id": "uuid",
    "email": "usuario@example.com",
    "created_at": "2025-12-20T..."
  }
}
```

## 🐛 Debug

### Ver logs no desenvolvimento:
```bash
npm run dev
```

Os logs do console.error() aparecerão no terminal do Next.js.

### Ver logs em produção (Vercel):
1. Acesse Vercel Dashboard
2. Vá em **Deployments** → Selecione deployment
3. Clique em **Functions** → Veja os logs das API Routes

## ⚡ Performance

- As API Routes são serverless functions na Vercel
- Cold start: ~500ms
- Warm requests: ~50-100ms
- Cache automático para GET requests

## 🔧 Manutenção

Para adicionar novos endpoints:

1. Crie nova pasta em `app/api/`
2. Crie `route.ts` com handlers (GET, POST, etc)
3. Use o padrão:

```typescript
import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:4000';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const response = await fetch(`${BACKEND_URL}/api/seu-endpoint`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(error, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro:', error);
    return NextResponse.json(
      { error: 'Falha ao processar' },
      { status: 500 }
    );
  }
}
```

---

**Criado**: 20/12/2025  
**Problema resolvido**: CORS + TypeError: Failed to fetch  
**Status**: ✅ Funcionando
