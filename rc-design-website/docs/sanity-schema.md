# Sanity CMS — Schemas do projeto RC Design

Documentação dos document types e object types do CMS.
Arquivo de referência para desenvolvimento e manutenção.

---

## O que é um Schema no Sanity

Um schema é a "ficha" que define quais campos um documento tem.
Por exemplo: um Projeto tem título, imagem, descrição, data...
O Sanity Studio usa os schemas para gerar a interface de edição automaticamente.

---

## Document Types (aparecem como listas no Studio)

### 1. `project` — Projetos / Cases

Usado na página /projetos e nos cards de destaque da homepage.

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| title | string | sim | Nome do projeto |
| slug | slug | sim | URL da página (ex: deolhoemvoce) |
| client | string | não | Nome do cliente |
| tagline | string | sim | Frase de impacto (max 120 chars) |
| featured | boolean | não | Aparece em destaque na homepage |
| publishedAt | datetime | não | Data de publicação |
| brandColor | string | não | Cor hex da identidade do projeto (ex: #00708C) |
| services | referência[] | não | Serviços aplicados neste projeto |
| tags | string[] | não | Tags: analise-dados, ia, painel, games, whatsapp, gov, b2b, saas |
| heroImage | image | sim | Imagem principal do case |
| screenshots | image[] | não | Capturas de tela do produto |
| challenge | Portable Text | sim | O desafio enfrentado pelo cliente |
| solution | Portable Text | não | Como a RC Design resolveu |
| results | objeto[] | não | Resultados mensuráveis: { metric, value, description } |
| techStack | string[] | não | Tecnologias usadas: Next.js, Supabase, etc |
| liveUrl | url | não | URL do projeto em produção |
| testimonial | referência | não | Depoimento do cliente sobre este projeto |
| seo | seoFields | não | Meta title, description, OG image |

---

### 2. `service` — Serviços

Usado na página /servicos com o painel lateral interativo.

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| title | string | sim | Nome do serviço |
| slug | slug | sim | URL/identificador |
| order | number | sim | Ordem de exibição (1 a 5) |
| icon | string | não | Nome do ícone Lucide (ex: BarChart2) |
| tagline | string | sim | Frase curta (max 80 chars) |
| description | Portable Text | sim | Descrição completa do serviço |
| benefits | objeto[] | não | O que entregamos: { title, description } — mínimo 2, máximo 6 |
| techStack | string[] | não | Tecnologias comuns neste serviço |
| faq | objeto[] | não | Perguntas frequentes: { question, answer } |
| relatedProjects | referência[] | não | Cases relacionados a este serviço |

**Os 5 serviços a criar:**
1. Projetos personalizados
2. Análise de dados
3. Painéis para clientes
4. Games corporativos
5. IA para o negócio

---

### 3. `product` — Produtos SaaS

Usado na seção de produtos da homepage e página /produtos.

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| title | string | sim | Nome do produto |
| slug | slug | sim | URL/identificador |
| tagline | string | sim | Frase de impacto (max 100 chars) |
| description | Portable Text | não | Descrição completa |
| status | string | sim | ready / dev / beta |
| targetAudience | string[] | não | empresas / governo / eventos / startups |
| features | objeto[] | não | Funcionalidades: { title, description, icon } — mínimo 3, máximo 8 |
| liveUrl | url | não | URL do produto ao vivo |
| demoUrl | url | não | URL de demonstração |
| heroImage | image | não | Imagem principal |
| screenshots | image[] | não | Telas do produto |
| seo | seoFields | não | SEO específico |

**Os 2 produtos a criar:**
- CuidoDeVocê (cuidodevoce.ai.br) — status: ready
- ArcadePulse (arcadepulse.com.br) — status: ready

---

### 4. `post` — Posts do Blog

Usado na página /blog e nas páginas individuais /blog/[slug].

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| title | string | sim | Título do post (10 a 100 chars) |
| slug | slug | sim | URL do post |
| publishedAt | datetime | não | Data de publicação |
| author | referência | não | Membro da equipe que escreveu |
| categories | string[] | não | ia / dados / dev / inovacao / cases / produtos |
| excerpt | text | sim | Resumo para cards e meta description (max 200 chars) |
| coverImage | image | não | Imagem de capa |
| body | Portable Text | sim | Conteúdo completo do post |
| relatedPosts | referência[] | não | Posts relacionados (max 3) |
| seo | seoFields | não | SEO específico |

**Tipos de bloco disponíveis no body:**
- Texto rico (headings h2/h3, bold, italic, links)
- Imagem com legenda
- Callout colorido (info / warning / tip / success)
- Bloco de código (com linguagem e nome do arquivo)

---

### 5. `teamMember` — Membros da equipe

Usado na página /sobre.

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| name | string | sim | Nome completo |
| role | string | sim | Cargo / função |
| bio | text | não | Biografia curta (max 280 chars) |
| photo | image | não | Foto do membro |
| expertise | string[] | não | Áreas de expertise |
| linkedIn | url | não | Perfil LinkedIn |
| github | url | não | Perfil GitHub |
| isActive | boolean | não | Se deve aparecer no site |

---

### 6. `testimonial` — Depoimentos

Usado nos cases de projeto e na homepage.

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| quote | text | sim | Texto do depoimento (max 400 chars) |
| authorName | string | sim | Nome do autor |
| authorRole | string | não | Cargo do autor |
| company | string | não | Empresa |
| authorPhoto | image | não | Foto do autor |
| companyLogo | image | não | Logo da empresa |
| project | referência | não | Projeto ao qual o depoimento pertence |
| featured | boolean | não | Exibir na homepage |

---

### 7. `siteSettings` — Configurações globais (singleton)

Aparece uma única vez no Studio. Controla informações globais do site.

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| siteTitle | string | sim | Título do site |
| siteDescription | text | sim | Meta description global (max 160 chars) |
| siteUrl | url | sim | URL base (https://rcdesign.com.br) |
| ogImage | image | não | Imagem OG padrão (1200x630px) |
| contact.email | string | não | E-mail de contato |
| contact.whatsapp | string | não | WhatsApp com DDI (ex: 5511999999999) |
| contact.whatsappMessage | string | não | Mensagem padrão ao abrir WhatsApp |
| contact.city | string | não | Cidade (padrão: São Paulo, SP) |
| social.linkedin | url | não | URL do LinkedIn |
| social.github | url | não | URL do GitHub |
| social.instagram | url | não | URL do Instagram |
| gtmId | string | não | ID do Google Tag Manager (ex: GTM-XXXXXXX) |
| maintenanceMode | boolean | não | Ativa página de manutenção |

---

## Object Types (reutilizáveis, não aparecem como listas)

### `seoFields` — Campos de SEO

Reutilizado em: project, product, post

| Campo | Tipo | Descrição |
|-------|------|-----------|
| metaTitle | string | Título para SEO (deixar vazio = usa o título principal). Max 60 chars |
| metaDescription | text | Descrição para SEO (deixar vazio = usa o excerpt). Max 160 chars |
| ogImage | image | Imagem para redes sociais (1200x630px). Gerada automaticamente se vazia |
| noIndex | boolean | Se true, página não aparece no Google |

### `ctaBlock` — Bloco de botão/CTA

| Campo | Tipo | Descrição |
|-------|------|-----------|
| label | string | Texto do botão |
| type | string | internal / external / whatsapp / email |
| href | string | URL ou caminho de destino |
| variant | string | primary / secondary / ghost |

### `statItem` — Estatística numérica

| Campo | Tipo | Descrição |
|-------|------|-----------|
| value | string | Valor exibido (ex: 3+, 98%, 2x) |
| label | string | Rótulo da métrica (max 40 chars) |
| prefix | string | Prefixo opcional (ex: +, R$) |
| suffix | string | Sufixo opcional (ex: %, k) |

---

## Relacionamentos entre schemas

```
project  ──referencia──>  service      (serviços aplicados no projeto)
project  ──referencia──>  testimonial  (depoimento do cliente)
service  ──referencia──>  project      (cases relacionados)
post     ──referencia──>  teamMember   (autor do post)
post     ──referencia──>  post         (posts relacionados)
testimonial ──referencia──> project    (projeto do depoimento)
```

---

## Arquivos de schema no repositório

```
schemas/
├── index.ts          # Registro de todos os schemas
├── project.ts        # Document type: Projetos
├── service.ts        # Document type: Serviços
├── product.ts        # Document type: Produtos
├── post.ts           # Document type: Blog
├── teamMember.ts     # Document type: Equipe
├── testimonial.ts    # Document type: Depoimentos
├── siteSettings.ts   # Document type: Configurações (singleton)
└── objects.ts        # Object types: seoFields, ctaBlock, statItem
```

---

## Como o Sanity Studio vai aparecer para você

Quando rodar o projeto localmente e acessar `/studio`, verá:

```
RC Design CMS
├── ⚙️  Configurações do site   (singleton — editar uma vez)
├── ─────────────────────────────
├── 📁  Projetos / Cases         (lista — criar um por projeto)
├── 🔧  Serviços                 (lista — criar os 5 serviços)
├── 🚀  Produtos SaaS            (lista — criar CuidoDeVocê e ArcadePulse)
├── ─────────────────────────────
├── ✍️  Posts do Blog            (lista — criar artigos)
├── ─────────────────────────────
├── 👤  Equipe                   (lista — criar perfis)
└── 💬  Depoimentos              (lista — criar testimonials)
```

---

## Ordem de preenchimento recomendada (Fase 04)

1. Configurações do site (1x, dados globais)
2. Equipe (membros que aparecem como autores nos posts)
3. Serviços (5 documentos — necessários para linkar nos projetos)
4. Projetos (3 cases: DeOlhoEmVocê, CuidoDeVocê, ArcadePulse)
5. Produtos (2 documentos)
6. Depoimentos (criar após ter os projetos linkados)
7. Posts do Blog (após todo o resto estar pronto)

---

*Última atualização: Fase 01 — v0.1.0*
*Schemas TypeScript disponíveis em: `/schemas/`*
