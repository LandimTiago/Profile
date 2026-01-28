# Portfolio — Tiago Landim

Landing page institucional e portfólio profissional, desenvolvida com foco em **performance, SEO técnico, segurança e escalabilidade futura**, utilizando **Next.js em modo SSG (Static Site Generation)**.

O projeto foi pensado para ser simples na superfície, mas sólido na base — seguindo boas práticas de arquitetura, SEO e infraestrutura moderna.

---

## ✨ Objetivo

- Apresentar meu perfil profissional de forma clara e estratégica
- Consolidar experiências, projetos e atuação técnica
- Servir como base para expansão futura (ex: produtos, cursos, conteúdos)
- Manter **custo zero ou mínimo de infraestrutura**, sem abrir mão de qualidade

---

## 🧱 Stack Técnica

- **Next.js (App Router)**
- **SSG (Static Site Generation)**
- **TypeScript**
- **Tailwind CSS**
- **MDX** para conteúdo de projetos
- **Vercel** (deploy e hosting)
- **Cloudflare** (DNS, SSL, segurança)
- **SEO técnico avançado**

---

## ⚙️ Arquitetura

### Static First (SSG)

- Todas as páginas são pré-geradas no build
- Rotas dinâmicas (`/projects/[id]`) utilizam `generateStaticParams`
- Zero SSR em produção
- Ideal para:
  - performance
  - SEO
  - custo
  - previsibilidade

### Conteúdo

- Projetos e experiências descritos via **MDX**
- Conteúdo versionado junto ao código
- Estrutura pensada para futura troca de fonte (ex: API, GitHub, CMS headless) **sem quebrar o SSG**

---

## 🎨 UI / Estilo

- Tema **dark (Darcula-inspired)**
- Paleta focada em:
  - preto
  - roxo
  - magenta
- Layout **full-width**, preparado para:
  - monitores ultrawide
  - mobile-first
- Hero com imagem em alta resolução (3440px / 5120px)

---

## 🔍 SEO & Performance

Implementações:

- Metadata global e por página
- Open Graph completo (OG image, title, description)
- Twitter Cards
- Canonical URLs
- `sitemap.xml`
- `robots.txt`
- Schema.org (`WebSite` + `Person`)
- Headers de segurança
- Build 100% estático

Validação:

- Lighthouse
- OpenGraph Debug
- Build output auditável

---

## 🔐 Segurança

Headers aplicados:

- Content Security Policy (CSP)
- HSTS
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

Superfície de ataque mínima:

- Sem backend
- Sem formulários
- Sem exposição de secrets
- Apenas variável pública de URL do site

---

## 🌐 Infraestrutura

- **Vercel**
  - Static Export (`output: export`)
  - CDN global
  - HTTPS automático
- **Cloudflare**
  - DNS
  - SSL/TLS (Full)
  - Preparado para cache e proteção futura

---
