# Vigorre One™ — Inteligência Humana & People Analytics

Plataforma premium de HR Tech: People Analytics, análise comportamental (DISC), recrutamento inteligente e o ecossistema de 12 módulos Vigorre One™. Construído com **React + Vite + Tailwind CSS v4**.

> Identidade visual em azuis metálicos, cinzas grafite e branco quente — sofisticação executiva e padrão internacional.

---

## 🧰 Pré-requisitos

- [Node.js](https://nodejs.org/) **18+** (recomendado 20+)
- npm (já vem com o Node)

---

## 💻 Rodando localmente

```bash
# 1. Instalar dependências
npm install

# 2. Ambiente de desenvolvimento (hot reload)
npm run dev
# Abra o endereço mostrado no terminal (ex.: http://localhost:5173)

# 3. Build de produção
npm run build
# Gera a pasta dist/ com um index.html autossuficiente

# 4. Pré-visualizar o build
npm run preview
```

---

## 🚀 Deploy online

Você tem **3 caminhos**. Recomendado: **Vercel via GitHub** (deploy automático a cada commit).

---

### ✅ Opção 1 — Vercel + GitHub (recomendado, deploy automático)

1. **Suba o código para o GitHub** (veja a seção [Subindo para o GitHub](#-subindo-para-o-github) abaixo).
2. Acesse **[vercel.com](https://vercel.com)** e faça login com sua conta GitHub.
3. Clique em **Add New → Project**.
4. Importe o repositório do Vigorre.
5. A Vercel detecta o framework **Vite** automaticamente. As configs do `vercel.json` já preenchem tudo:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Clique em **Deploy**. ✨ Pronto! Seu site estará no ar em ~1 minuto em `https://vigorre.vercel.app`.
7. A partir de agora, **todo `git push` para a `main` republica o site automaticamente**.

> 💡 Domínio personalizado? Em **Settings → Domains** na Vercel, adicione `www.vigorre.com.br` e configure o DNS conforme as instruções que aparecem na tela.

---

### ⚡ Opção 2 — Vercel CLI (pelo terminal)

```bash
# Instalar a CLI da Vercel (uma vez)
npm i -g vercel

# Login (abre o navegador)
vercel login

# Deploy de preview
vercel

# Deploy de produção (site oficial)
vercel --prod
```

---

### 🐙 Opção 3 — GitHub Pages (gratuito, no próprio GitHub)

Já incluí o workflow em `.github/workflows/deploy.yml` que publica o site automaticamente.

1. Suba o código para o GitHub (repositório público).
2. No repositório: **Settings → Pages**.
3. Em **Build and deployment → Source**, escolha **GitHub Actions**.
4. Faça um push qualquer (ou vá na aba **Actions → Run workflow**). O site sairá em:
   `https://SEU_USUARIO.github.io/NOME_DO_REPO/`

---

## 🔼 Subindo para o GitHub

Se ainda não versionou o projeto:

```bash
# Inicializa o repositório (se necessário)
git init
git add .
git commit -m "feat: Vigorre One™ — redesign completo"

# Crie um repositório novo em https://github.com/new (NÃO marque README/.gitignore)
# Depois vincule e envie:
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/vigorre.git
git push -u origin main
```

> Caso já tenha o repositório, basta `git add .`, `git commit` e `git push`.

---

## 📁 Estrutura do projeto

```
.
├── public/
│   └── favicon.svg            # Ícone (azul metálico + prata)
├── src/
│   ├── components/            # Navbar, Hero, Modules, Features, Pricing...
│   ├── data/content.ts        # Conteúdo centralizado (12 módulos, planos, etc.)
│   ├── lib/hooks.ts           # Hooks: scroll reveal, count-up
│   ├── utils/cn.ts            # Helper de classes Tailwind
│   ├── App.tsx                # Composição da página
│   ├── main.tsx               # Entry point
│   └── index.css              # Design system (tokens, animações, glass)
├── index.html
├── vercel.json                # ✅ Config de deploy Vercel
├── .github/workflows/deploy.yml  # ✅ Deploy GitHub Pages
└── package.json
```

---

## 🛠️ Stack

| Tecnologia | Uso |
|------------|-----|
| React 19 | UI components |
| Vite 7 | Build/bundler |
| Tailwind CSS v4 | Estilização + design tokens |
| lucide-react | Ícones |
| vite-plugin-singlefile | Gera um `index.html` autossuficiente |

---

## 🔒 Segurança & LGPD

Headers de segurança (CSP-ready, nosniff, frame-options) já configurados no `vercel.json`. Conformidade LGPD e ISO 27001 destacadas no conteúdo do site.

---

© 2026 Vigorre™. Todos os direitos reservados.
