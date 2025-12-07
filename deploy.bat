@echo off
REM Script de deploy automatizado para GitHub Pages (Windows)
REM Autor: Marcos José Canêjo

echo 🚀 Iniciando processo de deploy...

REM Verifica se node_modules existe
if not exist "node_modules\" (
    echo 📦 Instalando dependências...
    call npm install
)

REM Adiciona alterações ao git
echo 📝 Adicionando alterações ao git...
git add .

REM Solicita mensagem de commit
set /p commit_message="💬 Digite a mensagem do commit (ou pressione Enter para usar a padrão): "

if "%commit_message%"=="" (
    set commit_message=Update: %date% %time%
)

git commit -m "%commit_message%"

REM Push para o repositório
echo ⬆️  Enviando para o repositório...
git push origin main

REM Deploy para GitHub Pages
echo 🌐 Fazendo deploy para GitHub Pages...
call npm run deploy

echo ✅ Deploy concluído!
echo 📍 Seu site estará disponível em: https://mjcea.github.io/
echo ⏳ Aguarde 2-3 minutos para que as alterações sejam publicadas.

pause
