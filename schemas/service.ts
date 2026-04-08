import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Serviço',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nome do serviço',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordem de exibição',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(10),
    }),
    defineField({
      name: 'icon',
      title: 'Ícone (nome)',
      type: 'string',
      description: 'Nome do ícone Lucide. Ex: "BarChart2", "Bot", "Gamepad2"',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline curta',
      type: 'string',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'description',
      title: 'Descrição completa',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'benefits',
      title: 'O que entregamos',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'benefit',
          fields: [
            defineField({ name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', title: 'Descrição', type: 'string', validation: (Rule) => Rule.required().max(120) }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(2).max(6),
    }),
    defineField({
      name: 'techStack',
      title: 'Tecnologias comuns',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          fields: [
            defineField({ name: 'question', title: 'Pergunta', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'answer', title: 'Resposta', type: 'text', validation: (Rule) => Rule.required() }),
          ],
          preview: { select: { title: 'question' } },
        },
      ],
    }),
    defineField({
      name: 'relatedProjects',
      title: 'Cases relacionados',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'tagline', order: 'order' },
    prepare({ title, subtitle, order }) {
      return { title: `${order ?? '?'}. ${title}`, subtitle }
    },
  },
  orderings: [
    { title: 'Ordem de exibição', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
})
