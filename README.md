# Architecture Decisions — Portfolio Project

Este documento registra as **decisões de arquitetura, tecnologia e estilo**
adotadas no projeto de portfólio, com o objetivo de garantir previsibilidade,
baixo custo, simplicidade operacional e fácil evolução futura.

---

## 1. Objetivo do Projeto

Criar um **site de portfólio profissional** com:

* Página inicial (Home)
* Página Sobre
* Página de Projetos (listagem)
* Página de Detalhe de Projeto
* Página de Contato

Características principais:

* Conteúdo majoritariamente estático
* SEO adequado
* Baixo custo de manutenção
* Estrutura clara para possível evolução futura
  (ex: página de vendas de cursos)

---

## 2. Decisão Arquitetural Principal: SSG Puro

### Escolha

O projeto foi definido como **100% estático**, utilizando **Static Site Generation (SSG)**.

### Implementação

* Framework: **Next.js (App Router)**
* Configuração explícita:

  ```ts
  output: "export"
  ```
* Todo o HTML é gerado **no build**
* Nenhum código é executado em runtime no servidor

### Consequências Aceitas

* Não existe SSR
* Não existe fallback dinâmico
* Todas as rotas precisam ser conhecidas no build
* URLs inválidas não são suportadas (contrato do sistema)

### Justificativa

* Custo de hosting praticamente zero
* Performance máxima (HTML estático)
* Zero complexidade operacional
* Ideal para portfólio e conteúdo institucional

---

## 3. Roteamento Dinâmico em SSG

### Regra

Rotas dinâmicas (`/projects/[id]`) **só existem se forem geradas no build**.

### Implementação

* Uso obrigatório de `generateStaticParams`
* Slugs vêm exclusivamente do filesystem (MDX)

Exemplo conceitual:

```ts
export function generateStaticParams() {
  return projects.map(project => ({
    id: project.slug,
  }));
}
```

### Importante

* Rotas fora dessa lista **não existem**
* Não há fallback
* Não há SSR
* Isso é uma decisão arquitetural, não limitação acidental

---

## 4. Fonte de Conteúdo (Projetos)

### Formato

* **MDX**
* Um arquivo por projeto

Estrutura:

```
src/content/projects/
  ├─ primeiro-projeto.mdx
  ├─ segundo-projeto.mdx
```

### Motivos da escolha

* Separação clara entre conteúdo e layout
* Melhor SEO
* Fácil evolução para cases, blog ou páginas de venda
* Conteúdo versionado no Git

---

## 5. Leitura de Conteúdo (Build Time)

* Leitura feita via `fs`
* Parsing de frontmatter com `gray-matter`
* Executado **somente no build**

Exemplo de responsabilidades da camada de leitura:

* Listar projetos
* Resolver slug → arquivo
* Extrair metadados e conteúdo

Nunca:

* Fetch em runtime
* Banco de dados
* API routes

---

## 6. Estilo e Design System

### Tema

* Dark / Developer / Darcula-inspired

### Decisão Importante

O projeto utiliza **Tailwind CSS v4**, que:

* Não define tema via `tailwind.config.ts`
* Centraliza design tokens no CSS via `@theme`

### Tokens Globais

Definidos em:

```
src/app/globals.css
```

Exemplo conceitual:

```css
@theme {
  --color-background: #0202ce;
  --color-text-primary: #e6e6eb;
  --color-border: #1f1f2e;
}
```

### Uso

As cores são aplicadas via:

```tsx
bg-[var(--color-background)]
text-[var(--color-text-primary)]
```

### Motivo

* Maior controle explícito
* Facilita evolução para design system
* Alinhado com a filosofia do Tailwind v4

---

## 7. Layout Global

### Estrutura

* Header global
* Conteúdo centralizado
* Fundo aplicado no `<body>`
* Sem CSS inline

### Decisão de UX Importante

Para evitar “pulo” lateral ao aparecer scrollbar:

```css
html {
  scrollbar-gutter: stable;
}
```

Isso garante consistência visual entre páginas com e sem scroll.

---

## 8. Header e Navegação

* Header fixo no topo
* Navegação estática:

  * Home
  * Sobre
  * Projetos
  * Contato
* Nenhum estado dinâmico
* Nenhum menu mobile por enquanto

Motivo:

* Simplicidade
* Clareza
* Evolução posterior sem refactor

---

## 9. Tratamento de Rotas Inválidas

### Decisão

Como o site é estático:

* Rotas inválidas **não são suportadas**
* O usuário não deve chegar a URLs inexistentes via navegação

### Implementação

* Slugs vêm apenas do build
* `notFound()` é usado apenas como segurança
* Não existe fallback dinâmico

---

## 10. Evolução Futura (Planejada, Não Implementada)

Este projeto pode evoluir para:

* Página de vendas de cursos
* Conteúdo mais editorial
* Integração com plataformas externas

Quando isso acontecer:

* A decisão sobre SSR / ISR será reavaliada
* O core estático pode ser mantido
* Nada do que foi feito aqui impede essa evolução

---

## 11. Princípios Guias

* Simplicidade > Hype
* Previsibilidade > Flexibilidade excessiva
* Build-time > Runtime
* Custo baixo como default
* Decisões explícitas > comportamento implícito

---

**Este documento deve ser atualizado sempre que uma decisão estrutural relevante for alterada.**
