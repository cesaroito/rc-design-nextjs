import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post do Blog',
  type: 'document',
  groups: [
    { name: 'content', title: 'Conteúdo', default: true },
    { name: 'meta', title: 'SEO & Meta' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required().min(10).max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de publicação',
      type: 'datetime',
      group: 'content',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      group: 'content',
      to: [{ type: 'teamMember' }],
    }),
    defineField({
      name: 'categories',
      title: 'Categorias',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Inteligência Artificial', value: 'ia' },
          { title: 'Análise de Dados', value: 'dados' },
          { title: 'Desenvolvimento', value: 'dev' },
          { title: 'Inovação', value: 'inovacao' },
          { title: 'Cases', value: 'cases' },
          { title: 'Produtos', value: 'produtos' },
        ],
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo (para cards e meta description)',
      type: 'text',
      group: 'content',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'coverImage',
      title: 'Imagem de capa',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', type: 'string', title: 'Alt text', validation: (Rule) => Rule.required() }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo (Portable Text)',
      type: 'array',
      group: 'content',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
            defineField({ name: 'caption', type: 'string', title: 'Legenda' }),
          ],
        },
        {
          type: 'object',
          name: 'callout',
          title: 'Callout / destaque',
          fields: [
            defineField({ name: 'type', title: 'Tipo', type: 'string', options: { list: ['info', 'warning', 'tip', 'success'], layout: 'radio' }, initialValue: 'info' }),
            defineField({ name: 'text', title: 'Texto', type: 'text', validation: (Rule) => Rule.required() }),
          ],
          preview: { select: { title: 'text', subtitle: 'type' } },
        },
        {
          type: 'object',
          name: 'codeBlock',
          title: 'Bloco de código',
          fields: [
            defineField({ name: 'language', title: 'Linguagem', type: 'string', options: { list: ['typescript', 'javascript', 'python', 'bash', 'json', 'sql', 'html', 'css'] } }),
            defineField({ name: 'filename', title: 'Nome do arquivo', type: 'string' }),
            defineField({ name: 'code', title: 'Código', type: 'text', validation: (Rule) => Rule.required() }),
          ],
          preview: { select: { title: 'filename', subtitle: 'language' } },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'relatedPosts',
      title: 'Posts relacionados',
      type: 'array',
      group: 'content',
      of: [{ type: 'reference', to: [{ type: 'post' }] }],
      validation: (Rule) => Rule.max(3),
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
      author: 'author.name',
      media: 'coverImage',
      publishedAt: 'publishedAt',
    },
    prepare({ title, author, media, publishedAt }) {
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString('pt-BR') : 'Sem data'
      return { title, subtitle: `${author ?? 'Sem autor'} · ${date}`, media }
    },
  },
  orderings: [
    { title: 'Mais recentes', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
})
