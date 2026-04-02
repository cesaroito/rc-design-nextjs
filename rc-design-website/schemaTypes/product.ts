import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Produto (SaaS)',
  type: 'document',
  groups: [
    { name: 'content', title: 'Conteúdo', default: true },
    { name: 'media', title: 'Mídia' },
    { name: 'meta', title: 'SEO & Meta' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Nome do produto',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'description',
      title: 'Descrição completa',
      type: 'array',
      group: 'content',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'content',
      options: {
        list: [
          { title: 'Pronto para uso', value: 'ready' },
          { title: 'Em desenvolvimento', value: 'dev' },
          { title: 'Beta', value: 'beta' },
        ],
        layout: 'radio',
      },
      initialValue: 'ready',
    }),
    defineField({
      name: 'targetAudience',
      title: 'Público-alvo',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Empresas privadas', value: 'empresas' },
          { title: 'Prefeituras / Gov', value: 'governo' },
          { title: 'Eventos', value: 'eventos' },
          { title: 'Startups', value: 'startups' },
        ],
      },
    }),
    defineField({
      name: 'features',
      title: 'Funcionalidades principais',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          name: 'feature',
          fields: [
            defineField({ name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', title: 'Descrição', type: 'string', validation: (Rule) => Rule.required().max(140) }),
            defineField({ name: 'icon', title: 'Ícone Lucide', type: 'string' }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(3).max(8),
    }),
    defineField({
      name: 'liveUrl',
      title: 'URL do produto',
      type: 'url',
      group: 'content',
    }),
    defineField({
      name: 'demoUrl',
      title: 'URL de demonstração',
      type: 'url',
      group: 'content',
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagem principal',
      type: 'image',
      group: 'media',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text' })],
    }),
    defineField({
      name: 'screenshots',
      title: 'Screenshots',
      type: 'array',
      group: 'media',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
            defineField({ name: 'caption', type: 'string', title: 'Legenda' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seoFields',
      group: 'meta',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'status', media: 'heroImage' },
    prepare({ title, subtitle, media }) {
      const statusLabel: Record<string, string> = { ready: '✅ Pronto', dev: '🔧 Dev', beta: '🧪 Beta' }
      return { title, subtitle: statusLabel[subtitle] ?? subtitle, media }
    },
  },
})
