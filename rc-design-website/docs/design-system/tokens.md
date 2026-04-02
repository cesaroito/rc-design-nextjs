# Design Tokens

Design tokens centralizados para uso no Figma e implementação em código.

---

## Cores / Colors

### Cores Primárias

```yaml
Primary Dark:
  value: "#012c40"
  usage: ["Texto principal", "Backgrounds CTA", "Ícones principais"]
  figma: "Primary/Dark"

Secondary:
  value: "#00708c"
  usage: ["Texto de destaque", "Links", "Elementos interativos", "Gradientes"]
  figma: "Primary/Secondary"

Accent:
  value: "#ff404c"
  usage: ["CTAs principais", "Botões de destaque", "Badges featured"]
  secondary: "#e63643"
  figma: "Accent/Primary"

Success:
  value: "#87deb3"
  usage: ["Status positivo", "Confirmações", "Badges de sucesso"]
  secondary: "#5fc99a"
  figma: "Success/Primary"

Light Background:
  value: "#f8fafb"
  usage: ["Backgrounds alternativos", "Sections", "Cards"]
  figma: "Neutrals/Light BG"

White:
  value: "#ffffff"
  usage: ["Backgrounds principais", "Cards", "Overlays"]
  figma: "Neutrals/White"
```

### Cores com Opacity

```yaml
Text Primary:
  value: "rgba(1,44,64,1)"
  opacity_variants:
    - "rgba(1,44,64,0.8)"  # 80% - texto secundário
    - "rgba(1,44,64,0.7)"  # 70% - texto terciário
    - "rgba(1,44,64,0.65)" # 65% - parágrafos corpo
    - "rgba(1,44,64,0.6)"  # 60% - labels, captions
    - "rgba(1,44,64,0.5)"  # 50% - placeholders
    - "rgba(1,44,64,0.4)"  # 40% - disabled
    - "rgba(1,44,64,0.3)"  # 30% - dividers

Border Colors:
  primary: "rgba(0,112,140,0.15)" # Border padrão
  hover: "rgba(0,112,140,0.2)"    # Border hover
  light: "rgba(0,112,140,0.08)"   # Border muito leve
  subtle: "rgba(0,112,140,0.12)"  # Border suave
```

---

## Gradientes / Gradients

### Gradientes Principais

```yaml
Primary Dark Gradient:
  type: "linear"
  angle: "135deg (to-br)"
  stops:
    - { color: "#00708c", position: "0%" }
    - { color: "#012c40", position: "100%" }
  usage: ["Icon badges", "Botões primários", "Avatares"]
  tailwind: "bg-gradient-to-br from-[#00708c] to-[#012c40]"

Inverted Dark Gradient:
  type: "linear"
  angle: "135deg (to-br)"
  stops:
    - { color: "#012c40", position: "0%" }
    - { color: "#00708c", position: "100%" }
  usage: ["Backgrounds CTA", "Headers especiais"]
  tailwind: "bg-gradient-to-br from-[#012c40] to-[#00708c]"

Success Gradient:
  type: "linear"
  angle: "135deg (to-br)"
  stops:
    - { color: "#87deb3", position: "0%" }
    - { color: "#00708c", position: "100%" }
  usage: ["Badges sucesso", "CTAs secundários"]
  tailwind: "bg-gradient-to-br from-[#87deb3] to-[#00708c]"

Accent Gradient:
  type: "linear"
  angle: "135deg (to-br)"
  stops:
    - { color: "#ff404c", position: "0%" }
    - { color: "#e63643", position: "100%" }
  usage: ["Botões de ação principal", "Destaque forte"]
  tailwind: "bg-gradient-to-br from-[#ff404c] to-[#e63643]"

CTA Background:
  type: "linear"
  angle: "135deg (to-br)"
  stops:
    - { color: "#012c40", position: "0%" }
    - { color: "#00708c", position: "50%" }
    - { color: "#012c40", position: "100%" }
  usage: ["Seções CTA", "Footer hero"]
  tailwind: "bg-gradient-to-br from-[#012c40] via-[#00708c] to-[#012c40]"

Light Background Gradient:
  type: "linear"
  angle: "180deg (to-b)"
  stops:
    - { color: "#ffffff", position: "0%" }
    - { color: "#f8fafb", position: "100%" }
  usage: ["Backgrounds de seção", "Alternância de blocos"]
  tailwind: "bg-gradient-to-b from-white to-[#f8fafb]"

Hero Background Gradient:
  type: "linear"
  angle: "135deg (to-br)"
  stops:
    - { color: "#ffffff", position: "0%" }
    - { color: "#f8fafb", position: "50%" }
    - { color: "#ffffff", position: "100%" }
  usage: ["Hero sections", "Backgrounds principais"]
  tailwind: "bg-gradient-to-br from-white via-[#f8fafb] to-white"
```

### Gradientes de Overlay

```yaml
Image Overlay Dark:
  type: "linear"
  angle: "180deg (to-t)"
  stops:
    - { color: "rgba(1,44,64,0.9)", position: "0%" }
    - { color: "rgba(1,44,64,0.6)", position: "50%" }
    - { color: "transparent", position: "100%" }
  usage: ["Overlays em imagens de cards", "Hero images"]
  tailwind: "bg-gradient-to-t from-[#012c40]/90 via-[#012c40]/60 to-transparent"

Image Overlay Strong:
  type: "linear"
  angle: "180deg (to-t)"
  stops:
    - { color: "rgba(1,44,64,0.8)", position: "0%" }
    - { color: "rgba(1,44,64,0.3)", position: "100%" }
  usage: ["Card images hover", "Featured cards"]
  tailwind: "bg-gradient-to-t from-[#012c40]/80 via-[#012c40]/30 to-transparent"
```

---

## Tipografia / Typography

### Font Families

```yaml
Headings:
  family: "Plus Jakarta Sans"
  weights: [600, 700] # semibold, bold
  usage: ["Títulos", "Headings", "Nomes de produtos", "Valores numéricos"]
  fallback: "sans-serif"
  figma_style: "Headings/Plus Jakarta Sans"

Body:
  family: "DM Sans"
  weights: [400, 500, 600, 700] # regular, medium, semibold, bold
  usage: ["Parágrafos", "Botões", "Labels", "Corpo de texto geral"]
  fallback: "sans-serif"
  figma_style: "Body/DM Sans"

Monospace:
  family: "DM Mono"
  weights: [400, 500] # regular, medium
  usage: ["Código", "Tags técnicas", "Tecnologias"]
  fallback: "monospace"
  figma_style: "Monospace/DM Mono"
```

### Font Sizes & Line Heights

```yaml
Display/Hero:
  size: ["48px - 72px"] # 3xl - 6xl
  line_height: "1.1"
  weight: "600 (semibold)"
  letter_spacing: "tight (-0.02em)"
  usage: ["Títulos principais de página", "Hero headings"]

Heading/H1:
  size: ["36px - 48px"] # 2xl - 4xl
  line_height: "1.2"
  weight: "600 (semibold)"
  usage: ["Títulos de seção principal"]

Heading/H2:
  size: ["24px - 36px"] # xl - 3xl
  line_height: "1.3"
  weight: "600 (semibold)"
  usage: ["Subtítulos", "Títulos de cards grandes"]

Heading/H3:
  size: ["18px - 24px"] # lg - 2xl
  line_height: "1.4"
  weight: "600 (semibold)"
  usage: ["Títulos de cards", "Títulos de seções menores"]

Heading/H4:
  size: ["16px - 18px"] # base - lg
  line_height: "1.5"
  weight: "600 (semibold)"
  usage: ["Títulos pequenos", "Card headers"]

Body/Large:
  size: ["16px - 18px"] # base - lg
  line_height: "1.6 - 1.7"
  weight: "400 (regular)"
  usage: ["Parágrafos de destaque", "Intros"]

Body/Regular:
  size: "14px - 16px" # sm - base
  line_height: "1.6"
  weight: "400 (regular)"
  usage: ["Parágrafos gerais", "Descrições de cards"]

Body/Small:
  size: "12px - 14px" # xs - sm
  line_height: "1.5"
  weight: "400 - 500"
  usage: ["Labels", "Meta info", "Captions"]

Body/Tiny:
  size: "10px - 11px" # [10px] - [11px]
  line_height: "1.4"
  weight: "600 (semibold)"
  letter_spacing: "0.05em (wider)"
  text_transform: "uppercase"
  usage: ["Eyebrows", "Tags", "Badges", "Overlines"]
```

---

## Espaçamentos / Spacing

### Spacing Scale

```yaml
# Baseado no sistema Tailwind (4px base)
spacing:
  xs: "4px"   # 1
  sm: "8px"   # 2
  md: "12px"  # 3
  lg: "16px"  # 4
  xl: "20px"  # 5
  2xl: "24px" # 6
  3xl: "32px" # 8
  4xl: "48px" # 12
  5xl: "64px" # 16
  6xl: "80px" # 20
```

### Spacing Patterns

```yaml
Section Padding Vertical:
  mobile: "64px (py-16)"
  desktop: "80px (py-20)"
  usage: "Padding vertical de seções principais"

Card Padding:
  small: "16px (p-4)"
  medium: "20px (p-5)"
  large: "24px (p-6)"
  xlarge: "32px (p-8)"
  usage: "Padding interno de cards"

Grid Gaps:
  tight: "12px (gap-3)"
  normal: "16px - 24px (gap-4 - gap-6)"
  loose: "32px (gap-8)"
  usage: "Espaçamento entre elementos em grid"

Stack Gaps:
  tight: "8px - 12px (gap-2 - gap-3)"
  normal: "16px - 20px (gap-4 - gap-5)"
  loose: "24px - 32px (gap-6 - gap-8)"
  usage: "Espaçamento vertical em listas/stacks"
```

---

## Sombras / Shadows

```yaml
Shadow/Small:
  value: "0 1px 2px 0 rgba(0,112,140,0.05)"
  tailwind: "shadow-sm"
  usage: ["Cards sutis", "Inputs", "Badges"]

Shadow/Medium:
  value: "0 4px 6px -1px rgba(0,112,140,0.1), 0 2px 4px -1px rgba(0,112,140,0.06)"
  tailwind: "shadow-md"
  usage: ["Cards hover", "Dropdowns", "Modals"]

Shadow/Large:
  value: "0 10px 15px -3px rgba(0,112,140,0.1), 0 4px 6px -2px rgba(0,112,140,0.05)"
  tailwind: "shadow-lg"
  usage: ["Icon badges", "Featured elements", "Floating buttons"]

Shadow/XL:
  value: "0 20px 25px -5px rgba(0,112,140,0.1), 0 10px 10px -5px rgba(0,112,140,0.04)"
  tailwind: "shadow-xl"
  usage: ["Cards hover state", "Important CTAs", "Hero images"]

Shadow/2XL:
  value: "0 25px 50px -12px rgba(0,112,140,0.25)"
  tailwind: "shadow-2xl"
  usage: ["Project cards hover", "Blog cards hover", "Modal overlays"]

Shadow/Accent:
  value: "0 20px 25px -5px rgba(255,64,76,0.3)"
  custom: "shadow-[rgba(255,64,76,0.3)]"
  usage: ["Botões accent hover", "CTAs principais"]

Shadow/Success:
  value: "0 10px 15px -3px rgba(135,222,179,0.3)"
  custom: "shadow-[rgba(135,222,179,0.3)]"
  usage: ["Success badges", "Confirmation elements"]
```

---

## Border Radius

```yaml
Radius/Small:
  value: "6px"
  tailwind: "rounded-md"
  usage: ["Inputs pequenos", "Badges", "Tags"]

Radius/Medium:
  value: "8px"
  tailwind: "rounded-lg"
  usage: ["Botões", "Cards pequenos", "Form elements"]

Radius/Large:
  value: "12px"
  tailwind: "rounded-xl"
  usage: ["Cards principais", "Botões grandes", "Containers"]

Radius/XL:
  value: "16px"
  tailwind: "rounded-2xl"
  usage: ["Cards grandes", "Hero images", "Feature cards"]

Radius/Full:
  value: "9999px"
  tailwind: "rounded-full"
  usage: ["Avatares", "Pills", "Badges circulares", "Status indicators"]
```

---

## Borders

```yaml
Border/Default:
  width: "1px"
  color: "rgba(0,112,140,0.15)"
  tailwind: "border border-[rgba(0,112,140,0.15)]"
  usage: "Bordas padrão de cards e containers"

Border/Subtle:
  width: "1px"
  color: "rgba(0,112,140,0.08)"
  tailwind: "border border-[rgba(0,112,140,0.08)]"
  usage: "Dividers muito leves, separadores de seção"

Border/Medium:
  width: "1px"
  color: "rgba(0,112,140,0.2)"
  tailwind: "border border-[rgba(0,112,140,0.2)]"
  usage: "Bordas em estados hover ou focus"

Border/Strong:
  width: "2px"
  color: "rgba(0,112,140,0.15)"
  tailwind: "border-2 border-[rgba(0,112,140,0.15)]"
  usage: "Bordas de elementos importantes (secondary buttons)"

Border/Accent:
  width: "1px - 2px"
  color: "#00708c"
  tailwind: "border-[#00708c]"
  usage: "Estados active, selected, focus"

Border/Left Accent:
  width: "3px"
  position: "left"
  color: "#00708c"
  tailwind: "border-l-[3px] border-[#00708c]"
  usage: "Active state em sidebar navigation"
```

---

## Opacidade / Opacity

```yaml
Opacity/Disabled:
  value: "0.5"
  tailwind: "opacity-50"
  usage: "Elementos disabled"

Opacity/Muted:
  value: "0.6"
  tailwind: "opacity-60"
  usage: "Logos, elementos secundários"

Opacity/Hover:
  value: "0.9"
  tailwind: "hover:opacity-90"
  usage: "Hover em botões sólidos"
```

---

## Backdrop Blur

```yaml
Blur/Small:
  value: "4px"
  tailwind: "backdrop-blur-sm"
  usage: "Overlays leves, badges sobre imagens"

Blur/Medium:
  value: "12px"
  tailwind: "backdrop-blur-md"
  usage: "Modals, dropdowns, tooltips"

Blur/Decorative:
  value: "96px - 112px"
  tailwind: "blur-3xl"
  usage: "Círculos decorativos de background"
```

---

## Breakpoints / Responsive

```yaml
Mobile:
  min: "0px"
  max: "639px"
  tailwind: "(default, no prefix)"

Small (sm):
  min: "640px"
  tailwind: "sm:"
  usage: "Tablets pequenos, landscape phones"

Medium (md):
  min: "768px"
  tailwind: "md:"
  usage: "Tablets, pequenos desktops"

Large (lg):
  min: "1024px"
  tailwind: "lg:"
  usage: "Desktops"

XL:
  min: "1280px"
  tailwind: "xl:"
  usage: "Desktops grandes"
```

---

## Z-Index Layers

```yaml
z-index:
  base: "0"           # Elementos normais
  dropdown: "10"      # Dropdowns, tooltips
  sticky: "20"        # Sticky navigation, filter bars
  modal_backdrop: "40" # Backdrop de modais
  modal: "50"         # Modais, dialogs
```

---

## Max Width Containers

```yaml
Container/7xl:
  value: "80rem (1280px)"
  tailwind: "max-w-7xl"
  usage: "Container padrão para conteúdo principal"

Container/6xl:
  value: "72rem (1152px)"
  tailwind: "max-w-6xl"
  usage: "Conteúdo um pouco mais estreito"

Container/4xl:
  value: "56rem (896px)"
  tailwind: "max-w-4xl"
  usage: "Texto longo, artigos de blog"

Container/3xl:
  value: "48rem (768px)"
  tailwind: "max-w-3xl"
  usage: "CTAs, forms, conteúdo focado"

Container/2xl:
  value: "42rem (672px)"
  tailwind: "max-w-2xl"
  usage: "Parágrafos, descrições"
```
