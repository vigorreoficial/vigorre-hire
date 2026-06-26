# 🚀 Vigorre Hire™ — Recrutamento Inteligente

> O produto de recrutamento do Ecossistema Vigorre™. Conectamos talentos e empresas com dados, IA e análise comportamental.

[![Vigorre Hire](https://img.shields.io/badge/Vigorre-Hire-6366F1)](https://hire.vigorre.com)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

## 📖 Sobre o Vigorre Hire™

O **Vigorre Hire™** é o produto de recrutamento do **Ecossistema Vigorre™**. Ele oferece:

- 🔍 **Portal de Vagas** — Curadoria mundial com IA (AIApply)
- 🤖 **ATS Inteligente** — Triagem automatizada com Career Match Score™
- 🧭 **Career GPS™** — Recomendações acionáveis em tempo real
- 📊 **Executive Dashboard** — BI em tempo real com KPIs
- 💼 **Vigorre Consulting™** — Full Cycle e Executive Search

---

## 🏢 Ecossistema Vigorre™

O **Vigorre Hire™** faz parte do Ecossistema Vigorre™, junto com:

| Produto | Descrição | Site |
|:--------|:----------|:-----|
| **Vigorre One™** | Inteligência Comportamental | https://vigorre.one |
| **Vigorre Hire™** | Recrutamento Inteligente | https://hire.vigorre.com |
| **Vigorre Designer™** | Criação Digital | https://designer.vigorre.com |
| **Instituto Vigorre™** | Desenvolvimento Humano | https://instituto.vigorre.com |

---

## 🛠️ Tecnologias

| Camada | Tecnologias |
|:-------|:------------|
| **Frontend** | React, Next.js 15, TailwindCSS 4, TypeScript |
| **Backend** | Node.js, NestJS, Prisma ORM |
| **Banco de Dados** | PostgreSQL, Redis, Elasticsearch |
| **IA/ML** | Python, PyTorch, LangChain |
| **DevOps** | Docker, Kubernetes, Terraform, AWS |
| **Monorepo** | Turborepo, pnpm |

---

## 📦 Estrutura do Projeto
vigorre-hire/
├── .github/
│ └── workflows/
│ ├── ci.yml
│ ├── deploy-staging.yml
│ └── deploy-production.yml
│
├── packages/
│ ├── frontend/
│ │ └── web/ # Next.js App
│ │ ├── app/
│ │ ├── components/
│ │ ├── lib/
│ │ ├── hooks/
│ │ ├── types/
│ │ └── styles/
│ │
│ ├── backend/
│ │ └── api/ # NestJS API
│ │ ├── src/
│ │ ├── prisma/
│ │ └── test/
│ │
│ └── shared/
│ ├── ui-kit/ # Design System
│ ├── auth/ # Autenticação
│ └── utils/ # Utilitários
│
├── docs/
│ ├── 00-README.md
│ ├── 01-architecture.md
│ ├── 02-database-schema.md
│ ├── 03-api-documentation.md
│ └── 04-integration-one.md
│
├── .env.example
├── .gitignore
├── docker-compose.yml
├── package.json
├── turbo.json
└── README.m
