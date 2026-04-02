// ─── RC Design · Sanity Schema Index ────────────────────────────────────────
// Registra todos os document types e object types no Sanity Studio.
// Ordem de aparição no Studio segue a sequência abaixo.

import { project } from './project'
import { service } from './service'
import { product } from './product'
import { post } from './post'
import { teamMember } from './teamMember'
import { testimonial } from './testimonial'
import { siteSettings } from './siteSettings'
import { seoFields, ctaBlock, statItem } from './objects'

export const schemaTypes = [
  // ── Document types (aparecem como listas no Studio) ──────────────────
  project,
  service,
  product,
  post,
  teamMember,
  testimonial,
  siteSettings,

  // ── Object types (reutilizáveis, não aparecem como listas) ────────────
  seoFields,
  ctaBlock,
  statItem,
]
