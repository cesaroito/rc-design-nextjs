import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Depoimento',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Depoimento',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(400),
    }),
    defineField({
      name: 'authorName',
      title: 'Nome do autor',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorRole',
      title: 'Cargo do autor',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Empresa',
      type: 'string',
    }),
    defineField({
      name: 'authorPhoto',
      title: 'Foto do autor',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'companyLogo',
      title: 'Logo da empresa',
      type: 'image',
    }),
    defineField({
      name: 'project',
      title: 'Projeto relacionado',
      type: 'reference',
      to: [{ type: 'project' }],
    }),
    defineField({
      name: 'featured',
      title: 'Exibir na homepage',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'authorName', subtitle: 'company', media: 'authorPhoto' },
  },
})
