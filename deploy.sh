#!/bin/bash

# Script de deploy automatizado para GitHub Pages
# Autor: Marcos José Canêjo

echo "🚀 Iniciando processo de deploy..."

# Verifica se node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
fi

# Adiciona alterações ao git
echo "📝 Adicionando alterações ao git..."
git add .

# Solicita mensagem de commit
echo "💬 Digite a mensagem do commit (ou pressione Enter para usar a padrão):"
read commit_message

if [ -z "$commit_message" ]; then
    commit_message="Update: $(date '+%Y-%m-%d %H:%M:%S')"
fi

git commit -m "$commit_message"

# Push para o repositório
echo "⬆️  Enviando para o repositório..."
git push origin main

# Deploy para GitHub Pages
echo "🌐 Fazendo deploy para GitHub Pages..."
npm run deploy

echo "✅ Deploy concluído!"
echo "📍 Seu site estará disponível em: https://mjcea.github.io/"
echo "⏳ Aguarde 2-3 minutos para que as alterações sejam publicadas."
