# Landing Page - CRM-Start Bootcamp

Bootcamp landing page com sistema completo de captura de leads, newsletter e analytics.

## 🚀 Quick Start

**⚠️ IMPORTANTE**: Se você está vendo erro "Failed to fetch", veja [QUICK_CHECKLIST.md](./QUICK_CHECKLIST.md)

### Deploy Rápido (3 passos)

1. Configure `BACKEND_URL` na Vercel (veja [QUICK_CHECKLIST.md](./QUICK_CHECKLIST.md))
2. `git push origin main`
3. Aguarde deploy (~2 min)

### Desenvolvimento Local

```bash
# Frontend
cd frontend
npm install
npm run dev
# Acesse: http://localhost:3000

# Backend
cd backend
npm install
npm run dev
# API em: http://localhost:4000
```

## 📚 Documentação

- **[QUICK_CHECKLIST.md](./QUICK_CHECKLIST.md)** - Deploy em 3 passos (6 minutos)
- **[READY_TO_DEPLOY.md](./READY_TO_DEPLOY.md)** - Guia completo de deploy
- **[DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md)** - Instruções técnicas detalhadas
- **[CORS_FIX_SUMMARY.md](./CORS_FIX_SUMMARY.md)** - Correção do erro "Failed to fetch"
- **[DEPLOYMENT_STATUS.md](./DEPLOYMENT_STATUS.md)** - Status do projeto

## 🏗️ Arquitetura

```
Browser (Vercel)
    ↓ /api/* (Next.js API Routes)
Frontend Next.js (Vercel)
    ↓ Server-side requests
Backend Node.js (Railway)
    ↓
PostgreSQL (Neon)
```

## ✨ Features

- ✅ Captura de leads com validação de CPF
- ✅ Newsletter signup
- ✅ Analytics (visitas e CTAs)
- ✅ WhatsApp integration
- ✅ Swagger API docs
- ✅ CORS resolvido com API Routes
- ✅ TypeScript + React + Next.js
- ✅ Tailwind CSS + shadcn/ui

## 🔧 Stack

**Frontend**:
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui

**Backend**:
- Node.js + Express
- Neon PostgreSQL
- Swagger/OpenAPI
- CORS configurado

**Deploy**:
- Frontend: Vercel
- Backend: Railway
- Database: Neon (Serverless Postgres)

## 🌐 URLs

| Ambiente | URL |
|----------|-----|
| Frontend (Prod) | https://seu-site.vercel.app |
| Backend API | https://bootcamp-backend-production.up.railway.app |
| Swagger Docs | https://bootcamp-backend-production.up.railway.app/api-docs |
| Health Check | https://bootcamp-backend-production.up.railway.app/health |

## 🔐 Environment Variables

### Frontend (.env.local ou Vercel)
```bash
BACKEND_URL=https://bootcamp-backend-production.up.railway.app
```

### Backend (.env ou Railway)
```bash
DATABASE_URL=postgresql://user:pass@host/db
PORT=4000
CORS_ORIGIN=*
```

## 🧪 Testes

```bash
# Testar API
curl https://bootcamp-backend-production.up.railway.app/health

# Testar API Route
curl https://seu-site.vercel.app/api/lead

# Criar lead de teste
curl -X POST https://seu-site.vercel.app/api/lead \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com"}'
```

## 📦 Project Structure

```
BootCamp-RMM/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── api/              # Next.js API Routes (proxy)
│   │   │   │   ├── lead/
│   │   │   │   ├── newsletter/
│   │   │   │   ├── visit/
│   │   │   │   └── cta-click/
│   │   │   ├── components/       # React components
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── styles/
│   └── package.json
├── backend/
│   ├── index.mjs                 # Express API
│   └── package.json
├── QUICK_CHECKLIST.md            # Start here!
├── READY_TO_DEPLOY.md
└── README.md                     # This file
```

## 🐛 Troubleshooting

### "Failed to fetch" error
✅ **Resolvido!** Veja [CORS_FIX_SUMMARY.md](./CORS_FIX_SUMMARY.md)

### BACKEND_URL não configurado
Configure na Vercel Dashboard: Settings → Environment Variables

### API não responde
Verifique logs no Railway Dashboard

### Frontend não carrega
Verifique deploy logs na Vercel

## 📄 License

This project is based on Figma design: https://www.figma.com/design/PXGCqax0BFqv1ubKc6bEhX/Landing-Page-para-Bootcamp

---

**Status**: ✅ Pronto para produção  
**Última atualização**: 20/12/2025  
**Problema CORS**: Resolvido com Next.js API Routes
  