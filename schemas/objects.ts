import { defineField, defineType } from 'sanity'

// ─── SEO Fields (reutilizado em project, product, post) ─────────────────────
export const seoFields = defineType({
  name: 'seoFields',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta title',
      type: 'string',
      description: 'Deixe vazio para usar o título principal. Max 60 chars.',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 2,
      description: 'Deixe vazio para usar o excerpt. Max 160 chars.',
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'ogImage',
      title: 'OG Image (1200x630)',
      type: 'image',
      description: 'Deixe vazio para usar a imagem hero. Gerada automaticamente se não definida.',
    }),
    defineField({
      name: 'noIndex',
      title: 'Não indexar (noindex)',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})

// ─── CTA Block (reutilizável em qualquer página) ─────────────────────────────
export const ctaBlock = defineType({
  name: 'ctaBlock',
  title: 'Bloco CTA',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Texto do botão', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'type',
      title: 'Tipo',
      type: 'string',
      options: { list: ['internal', 'external', 'whatsapp', 'email'], layout: 'radio' },
      initialValue: 'internal',
    }),
    defineField({ name: 'href', title: 'URL / path', type: 'string' }),
    defineField({
      name: 'variant',
      title: 'Variante visual',
      type: 'string',
      options: { list: ['primary', 'secondary', 'ghost'], layout: 'radio' },
      initialValue: 'primary',
    }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'type' },
  },
})

// ─── Stat (métrica numérica para hero e cases) ───────────────────────────────
export const statItem = defineType({
  name: 'statItem',
  title: 'Estatística',
  type: 'object',
  fields: [
    defineField({ name: 'value', title: 'Valor', type: 'string', description: 'Ex: 3+, 98%, 2x', validation: (Rule) => Rule.required() }),
    defineField({ name: 'label', title: 'Rótulo', type: 'string', validation: (Rule) => Rule.required().max(40) }),
    defineField({ name: 'prefix', title: 'Prefixo', type: 'string', description: 'Ex: +, R$' }),
    defineField({ name: 'suffix', title: 'Sufixo', type: 'string', description: 'Ex: %, k' }),
  ],
  preview: {
    select: { title: 'value', subtitle: 'label' },
  },
})
