# Configuração de Notificações por Email

## 📧 Como Configurar

Para receber notificações de novos cadastros no email **rodrigomuinhodev@gmail.com**, siga os passos abaixo:

### 1. Criar uma Senha de App no Gmail

Como o Gmail não permite usar a senha normal para aplicações, você precisa criar uma **Senha de App**:

1. Acesse sua conta Google: https://myaccount.google.com/
2. Vá em **Segurança**
3. Ative a **Verificação em duas etapas** (se ainda não estiver ativa)
4. Procure por **Senhas de app** (App Passwords)
5. Selecione **App**: Email
6. Selecione **Dispositivo**: Outro (personalizado)
7. Digite: "Bootcamp Backend"
8. Clique em **Gerar**
9. Copie a senha gerada (16 caracteres sem espaços)

### 2. Configurar as Variáveis de Ambiente

Edite o arquivo `.env` e adicione:

```env
EMAIL_USER=rodrigomuinhodev@gmail.com
EMAIL_PASSWORD=sua-senha-de-app-aqui
```

⚠️ **Importante**: Use a senha de app gerada no passo anterior, não sua senha normal do Gmail!

### 3. Instalar as Dependências

```bash
npm install
```

### 4. Reiniciar o Servidor

```bash
npm run dev
```

## ✅ O que acontece agora?

Sempre que alguém se cadastrar no Bootcamp, você receberá um email automaticamente com:

- ✉️ **Assunto**: 🎉 Novo Cadastro no Bootcamp!
- 📝 **Conteúdo**: 
  - Nome da pessoa
  - Email
  - Telefone (se fornecido)
  - CPF (se fornecido)

## 🚀 Deploy no Railway

Para adicionar as variáveis no Railway:

1. Acesse o dashboard do Railway
2. Selecione seu projeto backend
3. Vá em **Variables**
4. Adicione:
   - `EMAIL_USER`: rodrigomuinhodev@gmail.com
   - `EMAIL_PASSWORD`: sua-senha-de-app

## 🔍 Solução de Problemas

Se os emails não estiverem sendo enviados:

1. Verifique se a senha de app está correta
2. Confirme que a verificação em duas etapas está ativa
3. Verifique os logs do servidor para mensagens de erro
4. Teste manualmente enviando um email de teste

## 🔒 Segurança

- ✅ Nunca compartilhe sua senha de app
- ✅ Não commite o arquivo `.env` no Git
- ✅ Use variáveis de ambiente no Railway para produção
