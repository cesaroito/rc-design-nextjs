# Guia de Implementação no Figma

Guia prático e passo a passo para implementar o design system RinoDev no Figma.

---

## 1. Estrutura de Arquivos

### Organização Recomendada

```
📁 RinoDev Design System
├─ 📄 00 - Cover & Index
├─ 📄 01 - Design Tokens
│  ├─ Colors
│  ├─ Typography
│  ├─ Spacing
│  ├─ Shadows
│  └─ Border Radius
├─ 📄 02 - Components
│  ├─ Buttons
│  ├─ Form Elements
│  ├─ Cards
│  ├─ Badges
│  ├─ Navigation
│  └─ Icons
├─ 📄 03 - Patterns
│  ├─ Hero Sections
│  ├─ CTA Sections
│  ├─ Content Grids
│  └─ Filters & Pagination
├─ 📄 04 - Pages (Templates)
│  ├─ Home
│  ├─ Projects
│  ├─ Blog
│  ├─ Services
│  └─ Contact
└─ 📄 05 - Documentation & Annotations
```

---

## 2. Configurar Design Tokens

### Passo 1: Criar Color Styles

**File → Add local styles → Color**

#### Colors Principais

1. **Primary/Dark** → `#012c40`
2. **Primary/Secondary** → `#00708c`
3. **Accent/Primary** → `#ff404c`
4. **Accent/Secondary** → `#e63643`
5. **Success/Primary** → `#87deb3`
6. **Success/Secondary** → `#5fc99a`
7. **Neutrals/White** → `#ffffff`
8. **Neutrals/Light BG** → `#f8fafb`

#### Colors com Opacity

9. **Text/Primary** → `rgba(1,44,64,1)`
10. **Text/80** → `rgba(1,44,64,0.8)`
11. **Text/70** → `rgba(1,44,64,0.7)`
12. **Text/65** → `rgba(1,44,64,0.65)`
13. **Text/60** → `rgba(1,44,64,0.6)`
14. **Text/50** → `rgba(1,44,64,0.5)`
15. **Text/40** → `rgba(1,44,64,0.4)`
16. **Text/30** → `rgba(1,44,64,0.3)`

#### Borders

17. **Border/Default** → `rgba(0,112,140,0.15)`
18. **Border/Hover** → `rgba(0,112,140,0.2)`
19. **Border/Light** → `rgba(0,112,140,0.08)`
20. **Border/Subtle** → `rgba(0,112,140,0.12)`

### Passo 2: Criar Gradient Styles

**Fill → Linear Gradient → Salvar como style**

1. **Gradient/Primary Dark**
   - Angle: 135°
   - Stop 1: `#00708c` (0%)
   - Stop 2: `#012c40` (100%)

2. **Gradient/Success**
   - Angle: 135°
   - Stop 1: `#87deb3` (0%)
   - Stop 2: `#00708c` (100%)

3. **Gradient/Accent**
   - Angle: 135°
   - Stop 1: `#ff404c` (0%)
   - Stop 2: `#e63643` (100%)

4. **Gradient/CTA Background**
   - Angle: 135°
   - Stop 1: `#012c40` (0%)
   - Stop 2: `#00708c` (50%)
   - Stop 3: `#012c40` (100%)

5. **Gradient/Image Overlay**
   - Angle: 180° (to top)
   - Stop 1: `rgba(1,44,64,0.9)` (0%)
   - Stop 2: `rgba(1,44,64,0.6)` (50%)
   - Stop 3: `transparent` (100%)

### Passo 3: Criar Text Styles

**Text → ... → Text styles → +**

#### Headings (Plus Jakarta Sans)

1. **Headings/Display**
   - Font: Plus Jakarta Sans
   - Weight: Semibold (600)
   - Size: 48-72px (usar variações)
   - Line Height: 110%
   - Letter Spacing: -2%

2. **Headings/H1**
   - Font: Plus Jakarta Sans
   - Weight: Semibold (600)
   - Size: 36-48px
   - Line Height: 120%

3. **Headings/H2**
   - Font: Plus Jakarta Sans
   - Weight: Semibold (600)
   - Size: 24-36px
   - Line Height: 130%

4. **Headings/H3**
   - Font: Plus Jakarta Sans
   - Weight: Semibold (600)
   - Size: 18-24px
   - Line Height: 140%

5. **Headings/H4**
   - Font: Plus Jakarta Sans
   - Weight: Semibold (600)
   - Size: 16-18px
   - Line Height: 150%

#### Body (DM Sans)

6. **Body/Large**
   - Font: DM Sans
   - Weight: Regular (400)
   - Size: 16-18px
   - Line Height: 160-170%

7. **Body/Regular**
   - Font: DM Sans
   - Weight: Regular (400)
   - Size: 14-16px
   - Line Height: 160%

8. **Body/Small**
   - Font: DM Sans
   - Weight: Regular (400) / Medium (500)
   - Size: 12-14px
   - Line Height: 150%

9. **Body/Tiny**
   - Font: DM Sans
   - Weight: Semibold (600)
   - Size: 10-11px
   - Line Height: 140%
   - Letter Spacing: 5%
   - Text Transform: UPPERCASE

#### Buttons

10. **Button/Large**
    - Font: DM Sans
    - Weight: Semibold (600)
    - Size: 16px

11. **Button/Medium**
    - Font: DM Sans
    - Weight: Semibold (600)
    - Size: 14px

12. **Button/Small**
    - Font: DM Sans
    - Weight: Semibold (600)
    - Size: 12px

#### Monospace

13. **Mono/Regular**
    - Font: DM Mono
    - Weight: Regular (400)
    - Size: 12-14px

### Passo 4: Criar Effect Styles (Shadows)

**Effect → Drop Shadow → Salvar como style**

1. **Shadow/Small**
   - X: 0, Y: 1, Blur: 2
   - Color: `rgba(0,112,140,0.05)`

2. **Shadow/Medium**
   - X: 0, Y: 4, Blur: 6
   - Color: `rgba(0,112,140,0.1)`
   - + Segunda sombra: Y: 2, Blur: 4, `rgba(0,112,140,0.06)`

3. **Shadow/Large**
   - X: 0, Y: 10, Blur: 15
   - Color: `rgba(0,112,140,0.1)`
   - + Segunda: Y: 4, Blur: 6, `rgba(0,112,140,0.05)`

4. **Shadow/XL**
   - X: 0, Y: 20, Blur: 25
   - Color: `rgba(0,112,140,0.1)`
   - + Segunda: Y: 10, Blur: 10, `rgba(0,112,140,0.04)`

5. **Shadow/2XL**
   - X: 0, Y: 25, Blur: 50
   - Color: `rgba(0,112,140,0.25)`

6. **Shadow/Accent**
   - X: 0, Y: 20, Blur: 25
   - Color: `rgba(255,64,76,0.3)`

7. **Shadow/Success**
   - X: 0, Y: 10, Blur: 15
   - Color: `rgba(135,222,179,0.3)`

### Passo 5: Criar Grid & Layout Styles

**Layout Grid → + → Salvar como style**

#### Desktop Grid (1280px container)

- Type: Columns
- Count: 12
- Margin: 64px
- Gutter: 24px
- Color: `rgba(0,112,140,0.1)`

#### Tablet Grid

- Count: 8
- Margin: 32px
- Gutter: 20px

#### Mobile Grid

- Count: 4
- Margin: 16px
- Gutter: 16px

---

## 3. Criar Componentes Principais

### Button Component

**Passo a passo:**

1. **Criar Base Button**
   - Rectangle com corner radius 12px
   - Auto Layout: Horizontal, Center aligned
   - Padding: 24px horizontal, 14px vertical
   - Gap: 8px
   - Fill: aplicar Gradient/Primary Dark style
   - Text: aplicar Button/Medium style
   - Adicionar ícone (16x16)

2. **Criar Variantes**
   - Clicar com botão direito → "Add variant"
   - Adicionar propriedades:
     - **Type**: Primary, Secondary, Accent, Ghost
     - **State**: Default, Hover, Active, Disabled
     - **Size**: Small, Medium, Large
     - **Icon**: None, Left, Right

3. **Configurar Estados**
   - **Default**: configurado
   - **Hover**:
     - Adicionar effect Shadow/XL
     - (Nota: scale será no prototype)
   - **Active**: mesmos valores do default
   - **Disabled**: Opacity 50%

4. **Adicionar Interactive Components**
   - Selecionar variant Default
   - Prototype → Interaction
   - On Hover → Change to → Hover
   - Animation: Smart Animate
   - Duration: 300ms
   - Easing: Ease In and Out

5. **Configurar Animação do Ícone**
   - No variant Hover, mover ícone 4px para direita
   - Smart Animate irá animar automaticamente

**Resultado:** Component com 4 types × 4 states × 3 sizes = 48 variantes

### Card Components

**Project Card:**

1. **Criar Container**
   - Frame com Auto Layout Vertical
   - Padding: 0
   - Fill: White
   - Stroke: Border/Default
   - Corner radius: 16px
   - Clip content: Yes

2. **Adicionar Image Container**
   - Frame com aspect ratio 4:3
   - Dentro: placeholder image
   - Gradient overlay (position absolute, fill frame)
   - Icon badge (position absolute, top-left)
   - Metrics (position absolute, bottom)

3. **Adicionar Content**
   - Auto Layout Vertical
   - Padding: 24px
   - Gap: 12-16px
   - Tags, title, description, CTA

4. **Criar Variante Hover**
   - Duplicate variant
   - Stroke: Primary/Secondary
   - Effect: Shadow/2XL
   - Image: scale 110% (criar frame maior)

5. **Adicionar Interaction**
   - On Hover → Change to Hover
   - Smart Animate, 300ms

---

## 4. Criar Hero Section Pattern

### Estrutura

1. **Frame Principal**
   - Width: 1280px (desktop)
   - Auto Layout Vertical
   - Padding: 64px horizontal, 80px vertical
   - Fill: Gradient/Light Background
   - Border bottom: 1px Border/Light

2. **Container Max-Width**
   - Nested Frame: Max width 1280px
   - Auto Layout Vertical
   - Horizontal resizing: Fill

3. **Decorative Blur Circles**
   - Circle 1: 384x384px, top-right
   - Fill: `rgba(0,112,140,0.03)` gradient blur
   - Effect: Layer Blur 96px
   - Circle 2: 320x320px, bottom-left
   - Fill: `rgba(255,64,76,0.03)` gradient blur

4. **Content Grid**
   - Auto Layout Horizontal
   - 2 columns (1fr 1fr no desktop)
   - Gap: 48px
   - Responsive: stack vertical em mobile

5. **Left Column**
   - Badge (pill shaped)
   - Heading com underline effect
   - Paragraph
   - Buttons (flex row com gap)
   - Stats (flex row com icon badges)

6. **Right Column**
   - Image com border radius 16px
   - Shadow/2XL
   - Overlay elements (absolute positioned)

---

## 5. Prototyping e Animações

### Smart Animate Setup

**Para animar corretamente:**

1. **Nomear layers identicamente** entre variantes
   - Exemplo: "Icon" em Default e "Icon" em Hover
   - Figma anima automaticamente layers com mesmo nome

2. **Usar Smart Animate** sempre que possível
   - Melhor para: position, size, opacity, fill, effects
   - Limitado para: text changes, auto layout changes

3. **Timing comum:**
   - Micro-interactions: 150-200ms
   - Hover states: 300ms
   - Image zooms: 500ms

### Interações Comuns

**Button Hover:**
```
Trigger: On Hover
Action: Change to [State=Hover]
Animation: Smart Animate
Duration: 300ms
Easing: Ease In and Out
```

**Card Hover:**
```
Trigger: On Hover
Action: Change to [State=Hover]
Animation: Smart Animate
Duration: 300ms
Easing: Ease In and Out
```

**Click Interaction:**
```
Trigger: On Click
Action: Change to [State=Active]
Then: After 150ms
Action: Change to [State=Default]
Animation: Smart Animate
Duration: 150ms
Easing: Ease Out
```

### Workaround para Scale

**Problema:** Figma não tem propriedade "scale" diretamente.

**Solução:**
1. Aumentar tamanho do elemento em 5% (scale 1.05)
2. OU criar frame pai e aumentar tamanho do filho
3. Smart Animate irá interpolar o tamanho

**Exemplo Button Scale 1.05:**
- Default: Width 150px, Height 48px
- Hover: Width 157.5px, Height 50.4px

---

## 6. Responsividade

### Breakpoints

**Configure constraints corretamente:**

#### Desktop (>= 1024px)
- Container: Center, Max width 1280px
- Content: Left & Right constraints

#### Tablet (640px - 1023px)
- Container: Fill width, padding lateral 32px
- Grid: 2 colunas

#### Mobile (< 640px)
- Container: Fill width, padding lateral 16px
- Grid: 1 coluna (stack vertical)

### Auto Layout Tips

**Para responsividade:**

1. **Usar Fill container** em vez de Fixed width quando apropriado
2. **Wrap content** em containers que precisam encolher
3. **Min/Max width constraints** para texto
4. **Column to Row** em tablets, Stack em mobile

---

## 7. Anotações para Desenvolvedores

### Dev Mode Annotations

**Adicionar anotações:**

1. Selecionar elemento → Add annotation
2. Tipos de anotação:
   - **Specs**: Hover state, transition timing
   - **Interactions**: "On hover, scale 105%"
   - **Code hints**: "Use group-hover for icon"

**Exemplos:**

**Button:**
```
Hover State:
- Scale: 105%
- Shadow: shadow-xl
- Transition: 300ms ease-in-out
- Icon translateX: 4px

Code:
- Use: hover:scale-105 hover:shadow-xl transition-all
- Group: use group/group-hover for icon
```

**Card Image:**
```
Hover State:
- Image scale: 110%
- Transition: 500ms ease-in-out
- Parent card: overflow hidden

Code:
- Image: group-hover:scale-110 duration-500
- Container: overflow-hidden
```

---

## 8. Exportar Assets

### Export Settings

**Para desenvolvedores:**

1. **Ícones SVG:**
   - Select icon → Export → SVG
   - Settings: "Include id attribute", "Outline text"

2. **Images:**
   - PNG: 2x resolution
   - JPEG: quality 80% (se foto)

3. **Components:**
   - Export individual components como PNG para documentação
   - Dev Mode para specs

### Handoff

**Preparar para handoff:**

1. **Organizar layers** com nomes claros
2. **Usar Auto Layout** sempre que possível
3. **Aplicar styles** (não valores hard-coded)
4. **Adicionar descriptions** nos components
5. **Criar Annotations** para interações
6. **Dev Mode**: habilitar e verificar specs

---

## 9. Manutenção e Updates

### Versionamento

**Criar versionamento:**
```
File → Version history → Save version as...
Nome: "v1.0 - Initial Design System"
```

**Nomear versões:**
- v1.0: Design System completo
- v1.1: Novos componentes
- v1.2: Ajustes de espaçamento
- v2.0: Breaking changes (reestruturação)

### Publicar Library

**Para compartilhar:**

1. File → Publish library
2. Selecionar components e styles para publicar
3. Adicionar changelog
4. Publicar

**Atualizar:**
- Fazer mudanças
- Publish updates
- Outros files recebem notificação de update

---

## 10. Checklist Final

Antes de considerar completo:

### Design Tokens
- [ ] Todas as cores definidas como styles
- [ ] Gradientes salvos como styles
- [ ] Text styles criados (headings, body, buttons)
- [ ] Shadows como effect styles
- [ ] Spacing documentado

### Components
- [ ] Button component com todas variantes
- [ ] Form elements (input, select, checkbox, etc.)
- [ ] Cards (project, blog, service)
- [ ] Badges e tags
- [ ] Navigation components
- [ ] Icon library

### Patterns
- [ ] Hero section template
- [ ] CTA section template
- [ ] Grid layouts
- [ ] Filter bars

### Interações
- [ ] Hover states configurados
- [ ] Smart Animate em transitions
- [ ] Click interactions
- [ ] Timing correto (300ms, 500ms, etc.)

### Prototyping
- [ ] Flows principais conectados
- [ ] Navigation funcionando
- [ ] Animations smooth

### Documentation
- [ ] Components com descriptions
- [ ] Annotations para dev
- [ ] Examples de uso
- [ ] Changelog atualizado

### Dev Handoff
- [ ] Dev Mode habilitado
- [ ] Layers nomeados corretamente
- [ ] Styles aplicados (não hard-coded)
- [ ] Export settings configurados

---

## Recursos Adicionais

### Links Úteis

- Tailwind CSS Docs: https://tailwindcss.com/docs
- Figma Best Practices: https://www.figma.com/best-practices/
- Smart Animate: https://help.figma.com/hc/en-us/articles/360039818874

### Plugins Recomendados

- **Auto Layout**: Better Auto Layout control
- **Content Reel**: Generate realistic content
- **Iconify**: Access to lucide-react icons
- **Design Lint**: Check for inconsistencies