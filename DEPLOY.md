# 🚀 Guia de Deploy para GitHub Pages

## Passo 1: Inicializar o repositório Git (se ainda não fez)

```bash
git init
git add .
git commit -m "Initial commit: Academic portfolio"
```

## Passo 2: Conectar ao repositório remoto

```bash
git remote add origin https://github.com/mjcea/mjcea.github.io.git
git branch -M main
git push -u origin main
```

## Passo 3: Instalar dependências

```bash
npm install
```

## Passo 4: Fazer o deploy

```bash
npm run deploy
```

Este comando irá:
1. Criar o build do projeto (pasta `dist`)
2. Enviar o conteúdo para a branch `gh-pages`
3. Fazer push automático para o GitHub

## Passo 5: Configurar GitHub Pages

1. Acesse: https://github.com/mjcea/mjcea.github.io/settings/pages
2. Em **"Source"**, selecione a branch **`gh-pages`**
3. Mantenha a pasta como **`/ (root)`**
4. Clique em **"Save"**

## ✅ Pronto!

Aguarde 2-3 minutos e seu site estará disponível em:
**https://mjcea.github.io/**

---

## 🔄 Para atualizar o site no futuro

Sempre que fizer alterações:

```bash
git add .
git commit -m "Descrição das alterações"
git push origin main
npm run deploy
```

---

## 🐛 Problemas comuns

### Erro: "gh-pages not found"
```bash
npm install --save-dev gh-pages
```

### Erro: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/mjcea/mjcea.github.io.git
```

### Erro: "Failed to build"
```bash
# Limpe o cache e tente novamente
rm -rf node_modules dist
npm install
npm run deploy
```

### Site não aparece ou mostra erro 404
- Verifique se a branch `gh-pages` foi criada
- Confirme que selecionou `gh-pages` nas configurações do GitHub Pages
- Aguarde alguns minutos após o deploy
