# Marcos José Canêjo - Academic Portfolio

Portfolio acadêmico com tema escuro, desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Como publicar no GitHub Pages

### Opção 1: Usando Vite (Recomendado)

1. **Clone ou crie seu repositório:**
```bash
git clone https://github.com/mjcea/mjcea.github.io.git
cd mjcea.github.io
```

2. **Copie todos os arquivos deste projeto para o repositório**

3. **Instale as dependências:**
```bash
npm install
```

4. **Configure o vite.config.ts:**
Crie o arquivo `vite.config.ts` na raiz com:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
})
```

5. **Configure o package.json:**
Adicione os scripts de build e deploy:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.446.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^5.4.11",
    "typescript": "^5.6.3",
    "tailwindcss": "^4.0.0",
    "gh-pages": "^6.1.1"
  }
}
```

6. **Instale gh-pages:**
```bash
npm install --save-dev gh-pages
```

7. **Faça o build e deploy:**
```bash
npm run deploy
```

8. **Configure o GitHub Pages:**
- Vá em Settings > Pages no seu repositório
- Em "Source", selecione a branch `gh-pages`
- Salve as configurações

Seu site estará disponível em: **https://mjcea.github.io/**

### Opção 2: Build Manual

1. Execute o build:
```bash
npm run build
```

2. O conteúdo da pasta `dist` deve ser enviado para a branch `gh-pages` ou `main` (dependendo da sua configuração no GitHub Pages)

## 📁 Estrutura do Projeto

```
/
├── App.tsx                          # Componente principal
├── components/
│   ├── ProfileHeader.tsx            # Cabeçalho com foto e informações
│   └── figma/
│       └── ImageWithFallback.tsx    # Componente para imagens
├── styles/
│   └── globals.css                  # Estilos globais
└── README.md                        # Este arquivo
```

## 🎨 Personalização

### Alterar Informações Pessoais
Edite o arquivo `/components/ProfileHeader.tsx`:
- Nome e descrição
- Links de contato (email, LinkedIn, GitHub)

### Alterar Foto de Perfil
Substitua a imagem importada em `ProfileHeader.tsx`

### Alterar Cores
Edite o arquivo `/styles/globals.css` para modificar o esquema de cores

## 🛠️ Tecnologias

- React 18
- TypeScript
- Tailwind CSS v4
- Vite
- Lucide React (ícones)

## 📝 Licença

Este projeto é de uso pessoal para o portfolio acadêmico de Marcos José Canêjo.
