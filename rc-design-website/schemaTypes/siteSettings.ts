import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configurações do site',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Título do site',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Descrição global (meta description)',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'siteUrl',
      title: 'URL base do site',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ogImage',
      title: 'Imagem OG padrão (1200x630)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'logoDark',
      title: 'Logo versão dark',
      type: 'image',
    }),
    defineField({
      name: 'contact',
      title: 'Informações de contato',
      type: 'object',
      fields: [
        defineField({ name: 'email', title: 'E-mail', type: 'string' }),
        defineField({ name: 'whatsapp', title: 'WhatsApp (com DDI)', type: 'string', description: 'Ex: 5511999999999' }),
        defineField({ name: 'whatsappMessage', title: 'Mensagem padrão WhatsApp', type: 'string' }),
        defineField({ name: 'address', title: 'Endereço', type: 'string' }),
        defineField({ name: 'city', title: 'Cidade', type: 'string', initialValue: 'São Paulo, SP' }),
      ],
    }),
    defineField({
      name: 'social',
      title: 'Redes sociais',
      type: 'object',
      fields: [
        defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
        defineField({ name: 'github', title: 'GitHub URL', type: 'url' }),
        defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
        defineField({ name: 'twitter', title: 'X / Twitter URL', type: 'url' }),
      ],
    }),
    defineField({
      name: 'gtmId',
      title: 'Google Tag Manager ID',
      type: 'string',
      description: 'Ex: GTM-XXXXXXX',
    }),
    defineField({
      name: 'maintenanceMode',
      title: 'Modo manutenção',
      type: 'boolean',
      initialValue: false,
      description: 'Ativa página de manutenção em todo o site',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Configurações globais do site' }
    },
  },
})
