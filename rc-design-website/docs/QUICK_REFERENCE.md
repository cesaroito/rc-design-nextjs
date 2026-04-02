# Quick Reference - Design System RinoDev

Guia de referência rápida para consulta durante o trabalho.

---

## 🎨 Cores Mais Usadas

```
#012c40  Primary Dark      (texto principal, backgrounds CTA)
#00708c  Secondary         (links, hover, elementos interativos)
#ff404c  Accent            (CTAs principais, destaques)
#87deb3  Success           (confirmações, status positivo)
#f8fafb  Light Background  (backgrounds alternativos)
#ffffff  White             (backgrounds principais)

rgba(1,44,64,0.65)  Texto corpo (65%)
rgba(1,44,64,0.6)   Labels (60%)
rgba(0,112,140,0.15) Border padrão
rgba(0,112,140,0.08) Border leve
```

---

## 📐 Espaçamentos Comuns

```
Gap between elements:    12px-16px (gap-3 gap-4)
Card padding:            24px (p-6)
Section padding Y:       64px mobile, 80px desktop (py-16 md:py-20)
Grid gaps:               24px (gap-6)
Container max-width:     1280px (max-w-7xl)
```

---

## 🔤 Tipografia

### Headings (Plus Jakarta Sans)

```
H1 Hero:     48-72px, semibold, line-height 110%
H1:          36-48px, semibold, line-height 120%
H2:          24-36px, semibold, line-height 130%
H3:          18-24px, semibold, line-height 140%
H4:          16-18px, semibold, line-height 150%
```

### Body (DM Sans)

```
Large:       16-18px, regular, line-height 160-170%
Regular:     14-16px, regular, line-height 160%
Small:       12-14px, regular/medium, line-height 150%
Tiny (caps): 10-11px, semibold, UPPERCASE, tracking 5%
```

### Buttons (DM Sans)

```
Large:   16px, semibold
Medium:  14px, semibold
Small:   12px, semibold
```

---

## 🎭 Gradientes Rápidos

### Backgrounds

```css
/* Primary Dark */
bg-gradient-to-br from-[#00708c] to-[#012c40]

/* Success */
bg-gradient-to-br from-[#87deb3] to-[#00708c]

/* Accent */
bg-gradient-to-br from-[#ff404c] to-[#e63643]

/* CTA Section */
bg-gradient-to-br from-[#012c40] via-[#00708c] to-[#012c40]

/* Hero Background */
bg-gradient-to-br from-white via-[#f8fafb] to-white

/* Light Vertical */
bg-gradient-to-b from-white to-[#f8fafb]
```

### Overlays de Imagem

```css
/* Overlay Escuro (to-t) */
bg-gradient-to-t from-[#012c40]/90 via-[#012c40]/60 to-transparent

/* Overlay Médio */
bg-gradient-to-t from-[#012c40]/80 via-[#012c40]/30 to-transparent
```

---

## 💫 Animações Comuns

### Timing

```
Padrão:              300ms ease-in-out
Micro-interactions:  150-200ms ease-out
Image scale:         500ms ease-in-out
```

### Transitions

```css
/* Padrão (múltiplas propriedades) */
transition-all

/* Apenas cores */
transition-colors

/* Apenas transform */
transition-transform

/* Apenas opacity */
transition-opacity
```

### Transforms Comuns

```css
/* Button hover */
hover:scale-105

/* Card lift */
hover:-translate-y-1

/* Arrow slide */
group-hover:translate-x-1
```

---

## 🔲 Border Radius

```
Small:     6px (rounded-md)   - inputs pequenos, badges
Medium:    8px (rounded-lg)   - botões, form elements
Large:     12px (rounded-xl)  - cards, containers
XL:        16px (rounded-2xl) - cards grandes, hero images
Full:      9999px (rounded-full) - avatares, pills
```

---

## ☂️ Shadows

```css
/* Cards padrão */
shadow-lg

/* Cards hover */
shadow-xl ou shadow-2xl

/* Buttons hover */
shadow-xl

/* Icon badges */
shadow-lg

/* Accent button hover */
shadow-[rgba(255,64,76,0.35)]
```

---

## 🔘 Button Quick Specs

### Primary Button

```tsx
className="text-sm font-semibold px-6 py-3.5
  bg-gradient-to-br from-[#012c40] to-[#00708c]
  text-white rounded-xl
  hover:scale-105 hover:shadow-xl
  transition-all
  font-['DM_Sans',sans-serif]"
```

### Secondary Button

```tsx
className="text-sm font-semibold px-8 py-3.5
  bg-white border-2 border-[rgba(0,112,140,0.15)]
  text-[#012c40] rounded-xl
  hover:border-[#00708c] hover:bg-[#f8fafb]
  transition-all"
```

### Accent Button

```tsx
className="text-sm font-medium px-8 py-3.5
  bg-[#ff404c] text-white rounded-xl
  hover:bg-[#e63643]
  shadow-lg shadow-[rgba(255,64,76,0.25)]
  hover:shadow-xl hover:shadow-[rgba(255,64,76,0.35)]
  hover:-translate-y-0.5
  transition-all"
```

---

## 🎴 Card Quick Specs

### Project Card Container

```tsx
className="group relative
  bg-white border border-[rgba(0,112,140,0.15)]
  rounded-2xl overflow-hidden
  hover:border-[#00708c] hover:shadow-2xl
  transition-all"
```

### Card Image

```tsx
className="w-full h-full object-cover
  group-hover:scale-110
  transition-transform duration-500"
```

### Icon Badge

```tsx
className="w-12 h-12 rounded-xl
  bg-gradient-to-br from-[#00708c] to-[#012c40]
  shadow-xl
  flex items-center justify-center"
```

---

## 📋 Form Elements Quick

### Input Default

```tsx
className="w-full px-4 py-3
  border border-[rgba(0,112,140,0.15)]
  rounded-xl text-sm text-[#012c40]
  focus:border-[#00708c]
  focus:ring-2 focus:ring-[rgba(0,112,140,0.1)]
  focus:outline-none
  transition-all
  font-['DM_Sans',sans-serif]"
```

### Select / Dropdown

```tsx
className="w-full px-4 py-3
  border border-[rgba(0,112,140,0.15)]
  rounded-xl text-sm text-[#012c40]
  focus:border-[#00708c]
  focus:ring-2 focus:ring-[rgba(0,112,140,0.1)]
  focus:outline-none bg-white
  transition-all
  font-['DM_Sans',sans-serif]"
```

---

## 🏷️ Badges Quick

### Category Badge (on image)

```tsx
className="px-3 py-1.5 rounded-lg
  bg-gradient-to-br from-[#00708c] to-[#012c40]
  text-white text-xs font-semibold
  shadow-lg
  font-['DM_Sans',sans-serif]"
```

### Tag / Pill

```tsx
className="text-xs px-3 py-1
  bg-[rgba(0,112,140,0.08)]
  border border-[rgba(0,112,140,0.12)]
  rounded-full text-[#00708c]
  font-medium
  font-['DM_Sans',sans-serif]"
```

### Icon Badge (gradient)

```tsx
className="w-10 h-10 rounded-xl
  bg-gradient-to-br from-[#00708c] to-[#012c40]
  shadow-md
  flex items-center justify-center"
```

---

## 📱 Breakpoints Responsive

```
Mobile:   < 640px    (default, sem prefix)
sm:       >= 640px   (tablets pequenos)
md:       >= 768px   (tablets)
lg:       >= 1024px  (desktop)
xl:       >= 1280px  (desktop grande)
```

### Padrões Comuns

```tsx
// Grid responsivo
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Padding responsivo
className="px-4 md:px-6"

// Typography responsiva
className="text-2xl md:text-3xl lg:text-4xl"

// Section padding
className="py-16 md:py-20"
```

---

## 🎯 Classes Tailwind Mais Usadas

### Layout

```
max-w-7xl mx-auto          Container principal
flex items-center gap-3    Flex horizontal
flex flex-col gap-4        Flex vertical
grid grid-cols-3 gap-6     Grid 3 colunas
```

### Spacing

```
p-6                        Padding 24px
px-4 py-3                  Padding horizontal/vertical
gap-3                      Gap 12px
mb-4                       Margin bottom 16px
```

### Typography

```
text-sm                    14px
text-base                  16px
text-lg                    18px
text-xl                    20px
font-semibold              Weight 600
leading-relaxed            Line height 1.6
```

### Colors

```
text-[#012c40]                      Primary dark
text-[rgba(1,44,64,0.6)]            60% opacity
bg-[#f8fafb]                        Light bg
border-[rgba(0,112,140,0.15)]      Border padrão
```

### Borders & Shadows

```
border border-[...]        Border 1px
border-2                   Border 2px
rounded-xl                 Border radius 12px
shadow-lg                  Shadow large
```

### States

```
hover:scale-105           Scale no hover
hover:shadow-xl           Shadow no hover
group-hover:translate-x-1 Ícone move quando parent hover
transition-all            Transição todas propriedades
```

---

## ⚡ Copy-Paste Templates

### Section Container

```tsx
<div className="px-4 md:px-6 py-16 md:py-20 border-b border-[rgba(0,112,140,0.08)] bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Content */}
  </div>
</div>
```

### Hero Background com Blur Circles

```tsx
<div className="relative px-4 md:px-6 py-16 md:py-20 border-b border-[rgba(0,112,140,0.08)] overflow-hidden bg-gradient-to-br from-white via-[#f8fafb] to-white">
  <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[rgba(0,112,140,0.03)] to-transparent rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[rgba(255,64,76,0.03)] to-transparent rounded-full blur-3xl"></div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Content */}
  </div>
</div>
```

### CTA Section Dark

```tsx
<div className="relative px-4 md:px-6 py-16 md:py-20 text-center border-t border-[rgba(0,112,140,0.08)] bg-gradient-to-br from-[#012c40] via-[#00708c] to-[#012c40] overflow-hidden">
  <div className="absolute top-0 right-0 w-96 h-96 bg-[rgba(255,64,76,0.1)] rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-[rgba(135,222,179,0.1)] rounded-full blur-3xl"></div>

  <div className="max-w-3xl mx-auto relative z-10">
    {/* Content */}
  </div>
</div>
```

---

## 🔍 Troubleshooting Comum

### "Animação não está funcionando"
- ✅ Verificar se usou `group` no elemento pai
- ✅ Verificar se usou `group-hover:` no filho
- ✅ Verificar se tem `transition-all` ou `transition-transform`

### "Border não aparece"
- ✅ Verificar se tem `border` base antes do `border-[color]`
- ✅ Exemplo: `border border-[rgba(0,112,140,0.15)]`

### "Gradient não funciona"
- ✅ Usar `bg-gradient-to-[direction]` (br, t, b, r, l)
- ✅ Usar `from-[color] to-[color]` ou `via-[color]` para 3 stops

### "Hover não ativa no Figma"
- ✅ Verificar se criou variante "Hover"
- ✅ Verificar se configurou Prototype: On Hover → Change to
- ✅ Verificar se usou Smart Animate

---

**Tip:** Salve este arquivo nos favoritos para consulta rápida! 🚀