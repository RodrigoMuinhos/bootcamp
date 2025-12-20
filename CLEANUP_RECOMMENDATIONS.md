# 🧹 Limpeza de Arquivos - Recomendações

## Arquivos Duplicados/Obsoletos Encontrados

### ⚠️ Diretório `/src/` na raiz
O projeto possui arquivos duplicados na pasta raiz `/src/` que parecem ser versões antigas:

- `src/app/components/SignupModal.tsx` (obsoleto)
- `src/styles/` (obsoleto)

**Diretório correto**: `frontend/src/`

### 🗑️ Ação Recomendada

**Opção 1 - Deletar (Recomendado):**
```bash
# Confirme que frontend/src/ tem os arquivos corretos
# Então delete a pasta obsoleta:
rm -rf src/
```

**Opção 2 - Mover para backup:**
```bash
mkdir -p _backup
mv src/ _backup/src-old-$(date +%Y%m%d)
```

### ✅ Estrutura Correta

```
BootCamp-RMM/
├── backend/           # Backend Node.js (Railway)
│   ├── index.mjs
│   └── package.json
├── frontend/          # Frontend Next.js (Vercel)
│   ├── src/          ✅ Correto - usar este
│   │   ├── app/
│   │   │   ├── api/           # API Routes (proxy)
│   │   │   ├── components/    # Componentes React
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── styles/
│   └── package.json
├── src/              ❌ Obsoleto - pode deletar
│   └── app/
└── ...
```

### 📋 Verificação Antes de Deletar

Confirme que os arquivos corretos estão em `frontend/src/`:
```bash
# Verificar estrutura correta
ls -la frontend/src/app/
ls -la frontend/src/app/components/
ls -la frontend/src/app/api/

# Verificar que API routes existem
ls -la frontend/src/app/api/lead/
ls -la frontend/src/app/api/newsletter/
ls -la frontend/src/app/api/visit/
ls -la frontend/src/app/api/cta-click/
```

Se todos os arquivos acima existirem e estiverem corretos, o diretório `/src/` na raiz pode ser deletado com segurança.

### 🔍 Outros Arquivos a Revisar

**index.html na raiz:**
- `index.html` - Parece ser antigo (Vite). Next.js não usa index.html na raiz.
- Se não for usado, pode ser removido.

**package.json na raiz:**
- `package.json` na raiz - Verificar se é usado ou se apenas frontend/package.json é relevante.

### ⚡ Script de Limpeza (Use com cuidado!)

```bash
#!/bin/bash
# cleanup.sh - Execute APENAS após confirmar backup

echo "🧹 Limpando arquivos obsoletos..."

# Criar backup primeiro
mkdir -p _backup_$(date +%Y%m%d)
cp -r src/ _backup_$(date +%Y%m%d)/ 2>/dev/null || true

# Remover duplicados (descomente após confirmar)
# rm -rf src/

echo "✅ Limpeza concluída. Backup em _backup_$(date +%Y%m%d)/"
```

### 📝 Checklist de Segurança

Antes de deletar, confirme:
- [ ] Arquivos corretos estão em `frontend/src/`
- [ ] API routes criadas e funcionando
- [ ] SignupModal atualizado em `frontend/src/`
- [ ] Newsletter atualizado em `frontend/src/`
- [ ] page.tsx atualizado em `frontend/src/`
- [ ] Backup criado (se necessário)
- [ ] Git commit feito antes da limpeza

### 🔄 Depois da Limpeza

```bash
# Verificar que tudo ainda funciona
cd frontend
npm run build

# Se build passar, está tudo ok!
```

---

**Criado**: 20/12/2025  
**Status**: Recomendação de limpeza  
**Ação**: Manual (revisar antes de executar)
