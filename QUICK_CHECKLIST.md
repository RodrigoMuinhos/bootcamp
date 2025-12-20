# 🎯 CHECKLIST RÁPIDO - Deploy em 3 Passos

## ⚡ Ação Imediata

### 📋 Passo 1: Vercel Dashboard (2 minutos)

1. [ ] Abrir https://vercel.com/dashboard
2. [ ] Selecionar projeto "bootcamp-page"
3. [ ] Ir em Settings → Environment Variables
4. [ ] Clicar "Add New"
5. [ ] Preencher:
   - Name: `BACKEND_URL`
   - Value: `https://bootcamp-backend-production.up.railway.app`
6. [ ] Marcar: Production ✓ Preview ✓ Development ✓
7. [ ] Clicar "Save"

### 💾 Passo 2: Git Push (1 minuto)

```bash
git add .
git commit -m "fix: resolve CORS with API routes"
git push origin main
```

### ✅ Passo 3: Testar (3 minutos)

1. [ ] Aguardar deploy na Vercel (~2-3 min)
2. [ ] Abrir https://seu-site.vercel.app
3. [ ] Clicar "Garantir Minha Vaga"
4. [ ] Preencher e enviar formulário
5. [ ] ✅ Verificar: SEM erro "Failed to fetch"
6. [ ] ✅ Verificar: Mensagem de sucesso aparece

---

## 🎉 Sucesso se...

- ✅ Formulário envia sem erro
- ✅ Console sem "Failed to fetch"
- ✅ Modal fecha automaticamente
- ✅ Lead salvo no banco

---

## 📚 Documentação Completa

Para mais detalhes, veja:

- **Deploy Completo**: [READY_TO_DEPLOY.md](./READY_TO_DEPLOY.md)
- **Guia Técnico**: [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md)
- **Explicação CORS**: [CORS_FIX_SUMMARY.md](./CORS_FIX_SUMMARY.md)

---

**Tempo Total**: ~6 minutos  
**Dificuldade**: Fácil  
**Status**: Pronto para executar
