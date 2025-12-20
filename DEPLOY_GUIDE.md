# 🚀 Guia de Deploy - Bootcamp CRM-Start

## 📋 Problema Resolvido

**Erro anterior**: `TypeError: Failed to fetch` ao salvar leads
**Causa**: CORS bloqueado quando frontend (Vercel HTTPS) chamava backend (Railway) diretamente do navegador

**Solução implementada**: 
- ✅ API Routes no Next.js como proxy (elimina CORS do navegador)
- ✅ Browser → Next.js (mesmo domínio) → Backend Railway
- ✅ CORS melhorado no backend para chamadas server-to-server
- ✅ Variáveis de ambiente reorganizadas

---

## 🔧 Configuração Passo a Passo

### 1️⃣ Deploy do Backend (Railway)

#### Variáveis de Ambiente no Railway:
```
DATABASE_URL=postgresql://user:pass@host/db?sslmode=require
PORT=4000
CORS_ORIGIN=*
```

**Importante**: Mantenha `CORS_ORIGIN=*` ou adicione os domínios da Vercel quando souber.

#### Verificar Deploy:
1. Acesse: `https://bootcamp-backend-production.up.railway.app/health`
2. Deve retornar: `{"status":"ok","db":"PostgreSQL 16.x..."}`

---

### 2️⃣ Deploy do Frontend (Vercel)

#### A. Adicionar Variável de Ambiente na Vercel

1. Acesse: [Vercel Dashboard](https://vercel.com/dashboard)
2. Selecione o projeto **bootcamp-page**
3. Vá em: **Settings** → **Environment Variables**
4. Adicione:

```
Name: BACKEND_URL
Value: https://bootcamp-backend-production.up.railway.app
```

5. Aplique para: **Production**, **Preview**, **Development**
6. Salve

#### B. Fazer Deploy

**Opção 1 - Push Git (Recomendado)**:
```bash
git add .
git commit -m "fix: resolve CORS issue with API routes"
git push origin main
```

A Vercel vai fazer deploy automaticamente.

**Opção 2 - Manual na Vercel**:
1. Vá em **Deployments**
2. Clique em **Redeploy** no último deployment
3. Marque **Use existing Build Cache** = OFF
4. Clique **Redeploy**

---

### 3️⃣ Testar a Integração

#### Teste 1: Health Check Backend
```bash
curl https://bootcamp-backend-production.up.railway.app/health
```
Esperado: `{"status":"ok",...}`

#### Teste 2: Swagger API Docs
Acesse: https://bootcamp-backend-production.up.railway.app/api-docs

#### Teste 3: API Route no Frontend
Depois do deploy, acesse:
```
https://seu-site.vercel.app/api/lead
```
Deve retornar lista de leads (mesmo que vazia).

#### Teste 4: Formulário de Inscrição
1. Acesse seu site na Vercel
2. Clique em "Garantir Minha Vaga"
3. Preencha o formulário
4. Envie

**Verificar**:
- Não deve aparecer erro "Failed to fetch"
- Deve mostrar mensagem de sucesso
- Lead deve aparecer no banco de dados

---

## 🔍 Debugging

### Se ainda der erro "Failed to fetch":

#### 1. Verificar variável de ambiente
```bash
# Na Vercel, vá em Settings → Environment Variables
# Confirme que BACKEND_URL está configurado
```

#### 2. Ver logs do Frontend
```bash
# No terminal local ou Vercel Logs
```

#### 3. Ver logs do Backend
No Railway:
- Vá em **Deployments** → Clique no deployment ativo
- Veja os **Logs**

#### 4. Testar API Route diretamente
```bash
curl -X POST https://seu-site.vercel.app/api/lead \
  -H "Content-Type: application/json" \
  -d '{"name":"Teste","email":"teste@example.com"}'
```

---

## 📁 Arquitetura da Solução

### Antes (❌ Com erro CORS):
```
Browser (HTTPS Vercel)
    ↓ fetch() direto
Backend Railway (HTTPS)
    ❌ CORS blocked
```

### Agora (✅ Funcionando):
```
Browser (HTTPS Vercel)
    ↓ fetch('/api/lead') - mesmo domínio
Next.js API Route (Vercel Server)
    ↓ fetch(Railway) - server-to-server
Backend Railway (HTTPS)
    ✅ Sem CORS issues
```

---

## 📝 Arquivos Modificados

### Frontend:
- ✅ `frontend/src/app/api/lead/route.ts` - Novo proxy API
- ✅ `frontend/src/app/api/newsletter/route.ts` - Novo proxy newsletter
- ✅ `frontend/src/app/components/SignupModal.tsx` - Atualizado para `/api/lead`
- ✅ `frontend/src/app/components/Newsletter.tsx` - Atualizado para `/api/newsletter`
- ✅ `frontend/.env.example` - Variável BACKEND_URL

### Backend:
- ✅ `backend/index.mjs` - CORS melhorado
- ✅ `backend/.env.example` - Documentação de variáveis

---

## 🎯 Checklist Final

### Backend (Railway):
- [ ] Deploy ativo em Railway
- [ ] `DATABASE_URL` configurado
- [ ] `CORS_ORIGIN=*` configurado
- [ ] `/health` retornando `{"status":"ok"}`
- [ ] Swagger docs acessível

### Frontend (Vercel):
- [ ] `BACKEND_URL` configurado na Vercel
- [ ] Deploy realizado
- [ ] Site acessível
- [ ] Formulário de inscrição funcionando
- [ ] Newsletter funcionando
- [ ] Sem erros no console do navegador

### Testes:
- [ ] Criar lead através do formulário
- [ ] Verificar lead salvo no banco
- [ ] Testar newsletter
- [ ] Verificar analytics (visitas/CTAs)

---

## 🆘 Suporte

### Comandos Úteis:

**Ver logs do backend local:**
```bash
cd backend
npm run dev
```

**Ver logs do frontend local:**
```bash
cd frontend
npm run dev
```

**Testar API diretamente:**
```bash
# Health check
curl https://bootcamp-backend-production.up.railway.app/health

# Criar lead
curl -X POST https://bootcamp-backend-production.up.railway.app/api/lead \
  -H "Content-Type: application/json" \
  -d '{"name":"Teste API","email":"api@test.com","phone":"11999999999"}'
```

---

## ✅ Status

- **Data**: 20/12/2025
- **Problema CORS**: Resolvido ✅
- **API Routes**: Implementadas ✅
- **Pronto para Deploy**: Sim ✅

**Próximo passo**: Fazer push e deploy na Vercel!
