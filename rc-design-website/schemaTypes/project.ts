import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projeto / Case',
  type: 'document',
  groups: [
    { name: 'content', title: 'Conteúdo', default: true },
    { name: 'media', title: 'Mídia' },
    { name: 'meta', title: 'SEO & Meta' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Título do projeto',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required().min(3).max(80),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Nome do cliente',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline (uma frase)',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'featured',
      title: 'Projeto em destaque',
      type: 'boolean',
      group: 'content',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de publicação',
      type: 'datetime',
      group: 'content',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'brandColor',
      title: 'Cor de identidade do projeto',
      type: 'string',
      group: 'content',
      description: 'Hex color usado na transição de entrada da página do case. Ex: #00708C',
      validation: (Rule) => Rule.regex(/^#[0-9A-Fa-f]{6}$/, { name: 'hex color' }),
    }),
    defineField({
      name: 'services',
      title: 'Serviços aplicados',
      type: 'array',
      group: 'content',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Análise de dados', value: 'analise-dados' },
          { title: 'IA', value: 'ia' },
          { title: 'Painel / Dashboard', value: 'painel' },
          { title: 'Games', value: 'games' },
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'Gov / Prefeitura', value: 'gov' },
          { title: 'B2B', value: 'b2b' },
          { title: 'SaaS', value: 'saas' },
        ],
      },
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagem hero do case',
      type: 'image',
      group: 'media',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', type: 'string', title: 'Texto alternativo' }),
        defineField({ name: 'caption', type: 'string', title: 'Legenda' }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'screenshots',
      title: 'Screenshots do produto',
      type: 'array',
      group: 'media',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', type: 'string', title: 'Texto alternativo' }),
            defineField({ name: 'caption', type: 'string', title: 'Legenda' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'challenge',
      title: 'O desafio',
      type: 'array',
      group: 'content',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'solution',
      title: 'A solução',
      type: 'array',
      group: 'content',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text' })],
        },
      ],
    }),
    defineField({
      name: 'results',
      title: 'Resultados mensuráveis',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          name: 'result',
          fields: [
            defineField({ name: 'metric', title: 'Métrica', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'value', title: 'Valor', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', title: 'Descrição', type: 'string' }),
          ],
          preview: {
            select: { title: 'value', subtitle: 'metric' },
          },
        },
      ],
    }),
    defineField({
      name: 'techStack',
      title: 'Stack tecnológica',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'liveUrl',
      title: 'URL do projeto (live)',
      type: 'url',
      group: 'content',
    }),
    defineField({
      name: 'testimonial',
      title: 'Depoimento do cliente',
      type: 'reference',
      group: 'content',
      to: [{ type: 'testimonial' }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seoFields',
      group: 'meta',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'heroImage',
      featured: 'featured',
    },
    prepare({ title, subtitle, media, featured }) {
      return {
        title: `${featured ? '⭐ ' : ''}${title}`,
        subtitle: subtitle ?? 'Sem cliente definido',
        media,
      }
    },
  },
  orderings: [
    { title: 'Mais recentes', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
    { title: 'Em destaque', name: 'featured', by: [{ field: 'featured', direction: 'desc' }] },
  ],
})
