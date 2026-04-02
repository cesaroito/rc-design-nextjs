# Animações e Transições

Documentação de todas as animações, transições e efeitos de movimento utilizados no design system.

---

## Transition Timing

### Duration (Duração)

```yaml
Fast:
  value: "150ms"
  usage: "Micro interações, mudanças de cor, opacity"
  figma: "150ms"

Normal:
  value: "200ms - 300ms"
  usage: "Transições padrão, hover states, scale"
  figma: "200ms / 300ms"

Slow:
  value: "500ms"
  usage: "Transições de imagem, scale complexo"
  figma: "500ms"
```

### Easing (Timing Function)

```yaml
Ease In Out:
  value: "ease-in-out"
  cubic_bezier: "cubic-bezier(0.4, 0, 0.2, 1)"
  usage: "Transições padrão, all properties"
  figma: "Ease In and Out"

Ease Out:
  value: "ease-out"
  cubic_bezier: "cubic-bezier(0, 0, 0.2, 1)"
  usage: "Elementos que aparecem, fade in, slide in"
  figma: "Ease Out"

Ease In:
  value: "ease-in"
  cubic_bezier: "cubic-bezier(0.4, 0, 1, 1)"
  usage: "Elementos que desaparecem, fade out"
  figma: "Ease In"

Linear:
  value: "linear"
  usage: "Animações contínuas, loops"
  figma: "Linear"
```

---

## Transições por Componente

### Buttons

#### Primary Button Hover

```yaml
Elemento: "Button (Primary)"
Estado: "Default → Hover"
Propriedades:
  transform: "scale(1.05)"
  shadow: "none → shadow-xl"
  icon_transform: "translateX(0) → translateX(4px)"
Duração: "300ms (button), 200ms (icon)"
Easing: "ease-in-out"
Trigger: "mouse hover"
```

**Figma Implementation:**
- Criar variante "Hover"
- Scale: 105%
- Shadow: aplicar efeito "Shadow/XL"
- Ícone: criar frame com translateX +4px
- Smart Animate entre estados

#### Secondary Button Hover

```yaml
Elemento: "Button (Secondary/Ghost)"
Estado: "Default → Hover"
Propriedades:
  border_color: "rgba(0,112,140,0.15) → #00708c"
  background: "transparent → rgba(0,112,140,0.04)"
  shadow: "none → shadow-md"
Duração: "300ms"
Easing: "ease-in-out"
Trigger: "mouse hover"
```

#### Button Active (Click)

```yaml
Elemento: "Button (Any)"
Estado: "Hover → Active"
Propriedades:
  transform: "scale(1.05) → scale(1)"
Duração: "150ms"
Easing: "ease-out"
Trigger: "mouse down"
```

---

### Cards

#### Project Card Hover

```yaml
Elemento: "Project Card"
Estado: "Default → Hover"
Propriedades:
  border_color: "rgba(0,112,140,0.15) → #00708c"
  shadow: "none → shadow-2xl"
  transform: "none → translateY(-4px)" # -translate-y-1
  image_transform: "scale(1) → scale(1.1)"
Duração: "300ms (card), 500ms (image)"
Easing: "ease-in-out"
Trigger: "mouse hover"
```

**Layers affected:**
1. **Card container**: border, shadow, translateY
2. **Image**: scale 110%
3. **Arrow icon**: translateX +4px

#### Blog Card Hover

```yaml
Elemento: "Blog Card"
Estado: "Default → Hover"
Propriedades:
  border_color: "rgba(0,112,140,0.15) → #00708c"
  shadow: "none → shadow-2xl"
  image_transform: "scale(1) → scale(1.1)"
  title_color: "#012c40 → #00708c"
Duração: "300ms (card), 500ms (image), 300ms (title)"
Easing: "ease-in-out"
Trigger: "mouse hover"
```

#### Service Card Hover

```yaml
Elemento: "Service Card (Home)"
Estado: "Default → Hover"
Propriedades:
  border_color: "rgba(0,112,140,0.15) → #00708c"
  shadow: "none → shadow-xl"
  transform: "none → translateY(-4px)"
  icon_scale: "scale(1) → scale(1.1)"
  decorative_circle_opacity: "0 → 100"
Duração: "300ms"
Easing: "ease-in-out"
Trigger: "mouse hover"
```

---

### Form Elements

#### Input Focus

```yaml
Elemento: "Input / Textarea"
Estado: "Default → Focus"
Propriedades:
  border_color: "rgba(0,112,140,0.15) → #00708c"
  ring: "none → ring-2 ring-[rgba(0,112,140,0.1)]"
  outline: "none"
Duração: "200ms"
Easing: "ease-in-out"
Trigger: "input focus"
```

**Figma Implementation:**
- Criar variante "Focus"
- Border: mudar cor para Secondary
- Adicionar outer stroke 2px com 10% opacity da cor Secondary
- Remover outline padrão

#### Select / Dropdown Hover

```yaml
Elemento: "Select / Dropdown option"
Estado: "Default → Hover"
Propriedades:
  background: "white → rgba(0,112,140,0.04)"
  text_color: "rgba(1,44,64,0.6) → #012c40"
Duração: "150ms"
Easing: "ease-out"
Trigger: "mouse hover"
```

#### Checkbox / Radio Selection

```yaml
Elemento: "Custom Radio/Checkbox"
Estado: "Unchecked → Checked"
Propriedades:
  border_color: "rgba(0,112,140,0.15) → #00708c"
  background: "white → #00708c" (gradient opcional)
  checkmark_opacity: "0 → 100"
  scale: "scale(0.8) → scale(1)"
Duração: "200ms"
Easing: "ease-out"
Trigger: "click"
```

---

### Navigation & Tabs

#### Tab Active State

```yaml
Elemento: "Tab Button"
Estado: "Inactive → Active"
Propriedades:
  background: "rgba(0,112,140,0.05) → gradient-to-br from-[#87deb3] to-[#00708c]"
  text_color: "rgba(1,44,64,0.6) → white"
  font_weight: "normal → semibold"
  icon_opacity: "0 → 100" (checkmark icon)
Duração: "300ms"
Easing: "ease-in-out"
Trigger: "state change"
```

#### Sidebar Nav Item Hover

```yaml
Elemento: "Sidebar Navigation Item"
Estado: "Default → Hover"
Propriedades:
  background: "transparent → white"
  border_left: "transparent → rgba(0,112,140,0.2)"
  icon_background: "rgba(0,112,140,0.08) → rgba(0,112,140,0.12)"
Duração: "200ms"
Easing: "ease-in-out"
Trigger: "mouse hover"
```

#### Sidebar Nav Item Active

```yaml
Elemento: "Sidebar Navigation Item"
Estado: "Default → Active"
Propriedades:
  background: "transparent → white"
  border_left: "transparent → 3px solid #00708c"
  icon_background: "rgba(0,112,140,0.08) → gradient from-[#00708c] to-[#012c40]"
  icon_color: "#00708c → white"
  text_color: "rgba(1,44,64,0.7) → #012c40"
  text_weight: "medium → semibold"
  shadow: "none → shadow-lg"
Duração: "300ms"
Easing: "ease-in-out"
Trigger: "selection"
```

---

### Icon Animations

#### Arrow Icon Slide

```yaml
Elemento: "Arrow Icon (ArrowRight)"
Estado: "Default → Hover"
Propriedades:
  transform: "translateX(0) → translateX(4px)"
Duração: "200ms"
Easing: "ease-out"
Trigger: "parent hover"
Note: "Ícone se move 4px para direita quando o pai recebe hover"
```

**Figma Implementation:**
- Grupo com Auto Layout horizontal
- No estado hover, aumentar spacing para criar movimento
- OU usar frame com translateX +4px

#### Icon Badge Scale

```yaml
Elemento: "Icon Badge (service cards)"
Estado: "Default → Hover"
Propriedades:
  transform: "scale(1) → scale(1.1)"
Duração: "300ms"
Easing: "ease-in-out"
Trigger: "parent card hover"
```

---

### Pagination & Navigation

#### Page Number Button Hover

```yaml
Elemento: "Pagination Number Button"
Estado: "Default → Hover"
Propriedades:
  border_color: "rgba(0,112,140,0.15) → #00708c"
  text_color: "rgba(1,44,64,0.6) → #012c40"
Duração: "200ms"
Easing: "ease-in-out"
Trigger: "mouse hover"
```

#### Prev/Next Button Hover

```yaml
Elemento: "Pagination Prev/Next Button"
Estado: "Default → Hover"
Propriedades:
  border_color: "rgba(0,112,140,0.15) → #00708c"
  shadow: "none → shadow-lg"
  icon_transform: "translateX(0) → translateX(±2px)" # + para next, - para prev
Duração: "200ms"
Easing: "ease-out"
Trigger: "mouse hover"
```

---

### Filter Buttons

#### Filter Button Active

```yaml
Elemento: "Filter Button"
Estado: "Default → Active"
Propriedades:
  border_color: "rgba(0,112,140,0.15) → #00708c"
  background: "transparent → rgba(0,112,140,0.08)"
  text_color: "rgba(1,44,64,0.6) → #012c40"
  shadow: "none → shadow-sm"
Duração: "200ms"
Easing: "ease-in-out"
Trigger: "click/selection"
```

#### Filter Button Hover

```yaml
Elemento: "Filter Button"
Estado: "Default → Hover"
Propriedades:
  border_color: "rgba(0,112,140,0.15) → #00708c"
  background: "transparent → rgba(0,112,140,0.04)"
Duração: "200ms"
Easing: "ease-in-out"
Trigger: "mouse hover"
```

---

### Badges & Tags

#### Category Badge Hover (on card)

```yaml
Elemento: "Category Badge"
Estado: "Default → Hover (inherited from parent)"
Propriedades:
  # Badge não tem hover próprio, move com card
  note: "Badge permanece estável visualmente mas move com card"
Duração: "n/a"
```

#### Project Type Selection

```yaml
Elemento: "Project Type Card (Contact Form)"
Estado: "Unselected → Selected"
Propriedades:
  border_color: "rgba(0,112,140,0.15) → #00708c"
  background: "white → rgba(0,112,140,0.08)"
  shadow: "none → shadow-md"
  icon_background: "rgba(0,112,140,0.08) → gradient from-[#00708c] to-[#012c40]"
  icon_color: "#00708c → white"
  text_color: "rgba(1,44,64,0.6) → #012c40"
  text_weight: "medium → semibold"
Duração: "200ms"
Easing: "ease-in-out"
Trigger: "click"
```

---

### Contact Methods Cards (ContactPage)

#### Contact Card Hover

```yaml
Elemento: "Contact Method Card"
Estado: "Default → Hover"
Propriedades:
  border_color: "rgba(0,112,140,0.15) → #00708c"
  shadow: "none → shadow-lg"
Duração: "300ms"
Easing: "ease-in-out"
Trigger: "mouse hover"
```

---

### Time Slot Selection (ContactPage)

#### Time Slot Button Selection

```yaml
Elemento: "Time Slot Button"
Estado: "Unselected → Selected"
Propriedades:
  border_color: "rgba(0,112,140,0.15) → #00708c"
  background: "white → gradient from-[#00708c] to-[#012c40]"
  text_color: "rgba(1,44,64,0.6) → white"
  font_weight: "medium → semibold"
  shadow: "none → shadow-md"
Duração: "200ms"
Easing: "ease-in-out"
Trigger: "click"
```

---

### Decorative Animations

#### Pulse Animation (Status Indicators)

```yaml
Elemento: "Status Dot (disponível, online, etc)"
Estado: "Continuous animation"
Propriedades:
  opacity: "1 → 0.5 → 1" (loop)
  OR scale: "scale(1) → scale(1.2) → scale(1)" (loop)
Duração: "2000ms"
Easing: "ease-in-out"
Trigger: "auto (always)"
Tailwind: "animate-pulse"
```

**Figma Implementation:**
- Criar 2-3 keyframes
- Opacity: 100% → 50% → 100%
- Loop infinito
- Duration: 2s

#### Bounce Animation (Scroll Hint)

```yaml
Elemento: "Scroll Hint / ChevronDown"
Estado: "Continuous animation"
Propriedades:
  transform: "translateY(0) → translateY(-8px) → translateY(0)" (loop)
Duração: "1500ms"
Easing: "ease-in-out"
Trigger: "auto (always)"
Tailwind: "animate-bounce"
```

---

### Image Transitions

#### Image Zoom on Card Hover

```yaml
Elemento: "Card Image"
Estado: "Default → Hover (parent)"
Propriedades:
  transform: "scale(1) → scale(1.1)"
Duração: "500ms"
Easing: "ease-in-out"
Trigger: "parent card hover"
Note: "Imagem sempre faz overflow: hidden no container"
```

**Figma Implementation:**
- Container com clip content
- Variante hover com image scale 110%
- Smart Animate

---

### Success States

#### Success Icon Appear

```yaml
Elemento: "CheckCircle2 Icon (Success state)"
Estado: "Hidden → Visible"
Propriedades:
  opacity: "0 → 100"
  scale: "scale(0.8) → scale(1)"
Duração: "300ms"
Easing: "ease-out"
Trigger: "success state trigger"
```

#### Form Submit Success

```yaml
Elemento: "Form → Success Message"
Estado: "Form visible → Success visible"
Propriedades:
  opacity: "100 → 0 (form), 0 → 100 (success)"
  transform: "translateY(0) → translateY(-20px) (form), translateY(20px) → translateY(0) (success)"
Duração: "400ms"
Easing: "ease-in-out"
Trigger: "form submit success"
```

---

## Propriedades de Transição Comuns

### Transition All (Padrão)

```yaml
Property: "all"
Duration: "300ms"
Easing: "ease-in-out"
Tailwind: "transition-all"
Usage: "Quando múltiplas propriedades mudam (border, shadow, transform)"
```

### Transition Colors

```yaml
Property: "color, background-color, border-color"
Duration: "200ms"
Easing: "ease-in-out"
Tailwind: "transition-colors"
Usage: "Mudanças apenas de cor"
```

### Transition Transform

```yaml
Property: "transform"
Duration: "200ms - 300ms"
Easing: "ease-in-out"
Tailwind: "transition-transform"
Usage: "Scale, translate, rotate isolados"
```

### Transition Opacity

```yaml
Property: "opacity"
Duration: "200ms"
Easing: "ease-in-out"
Tailwind: "transition-opacity"
Usage: "Fade in/out"
```

---

## Transforms Comuns

### Scale Up (Hover)

```yaml
Transform: "scale(1.05)"
Usage: "Buttons, CTAs hover"
Tailwind: "hover:scale-105"
Note: "Sempre combinar com transition-all"
```

### Scale Subtle

```yaml
Transform: "scale(1.02)"
Usage: "Hover states mais discretos"
Tailwind: "hover:scale-[1.02]"
```

### Translate Y Up

```yaml
Transform: "translateY(-4px)"
Usage: "Cards hover (lift effect)"
Tailwind: "hover:-translate-y-1"
Note: "4px = 1 unit Tailwind"
```

### Translate X (Arrow)

```yaml
Transform: "translateX(4px)"
Usage: "Arrow icons on hover"
Tailwind: "group-hover:translate-x-1"
Note: "Usar group/group-hover para parent trigger"
```

---

## Guia de Implementação no Figma

### Smart Animate

Para usar Smart Animate entre variantes:

1. **Criar Variantes** para cada estado (Default, Hover, Active, Focus)
2. **Nomear layers identicamente** entre variantes
3. **Configurar Prototype**:
   - Trigger: On Hover / On Click
   - Action: Change to [variante]
   - Animation: Smart Animate
   - Easing: escolher conforme tabela acima
   - Duration: seguir valores documentados

### Propriedades Animáveis

**Smart Animate suporta:**
- Position (X, Y)
- Size (Width, Height)
- Rotation
- Opacity
- Corner radius
- Fill colors
- Stroke colors
- Effects (shadows, blurs)

**NÃO suporta:**
- Text content changes
- Auto layout property changes (requer workaround)

### Workarounds

**Auto Layout spacing change:**
- Criar frame intermediário
- Animar posição do elemento dentro do frame

**Text changes:**
- Fade out → change text → fade in
- OU criar variantes separadas e crossfade

---

## Checklist para Documentação

Ao documentar uma nova animação, incluir:

- [ ] Nome do elemento/componente
- [ ] Estados (início e fim)
- [ ] Propriedades que mudam
- [ ] Duração (ms)
- [ ] Easing function
- [ ] Trigger (hover, click, auto, etc.)
- [ ] Classe Tailwind equivalente
- [ ] Instruções Figma (Smart Animate, variantes, etc.)
- [ ] Notas especiais (se houver)