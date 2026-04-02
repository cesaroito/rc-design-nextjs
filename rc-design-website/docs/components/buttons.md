# Buttons - Documentação Completa

Especificações detalhadas de todos os tipos de botões e seus estados.

---

## Primary Button (Gradient)

### Variantes

1. **With Icon** (Arrow Right)
2. **Without Icon**

### Estados

#### Default

```yaml
Background: "gradient-to-br from-[#012c40] to-[#00708c]"
Text Color: "#ffffff"
Font: "DM Sans"
Font Size: "14px (text-sm)" # Pode variar: sm=12-14px, base=14-16px
Font Weight: "600 (font-semibold)"
Padding: "px-6 py-3.5 (24px 14px)" # Variações: px-5 py-2.5, px-8 py-4, px-10 py-5
Border Radius: "12px (rounded-xl)"
Shadow: "none"
Transform: "scale(1)"
Icon Size: "16px (w-4 h-4)"
Icon Position: "translateX(0)"
```

**Figma Layers:**
```
PrimaryButton [Component]
├─ Background [Rectangle] - Gradient fill
├─ Text [Text] - White, DM Sans Semibold 14px
└─ Icon [Frame] - Arrow Right, 16x16
```

#### Hover

```yaml
Background: "gradient-to-br from-[#012c40] to-[#00708c]" # Mesmo
Transform: "scale(1.05)"
Shadow: "shadow-xl with brand tint (rgba(0,112,140,0.3))"
Icon Position: "translateX(4px)"
Cursor: "pointer"
Transition: "all 300ms ease-in-out"
```

**Mudanças:**
- Scale aumenta para 105%
- Shadow aparece (0 20px 25px -5px rgba(0,112,140,0.3))
- Ícone desliza 4px para direita

#### Active (Pressed)

```yaml
Transform: "scale(1)" # Volta ao normal
Transition: "all 150ms ease-out"
```

#### Focus

```yaml
Ring: "ring-2 ring-[rgba(0,112,140,0.2)]"
Outline: "none"
```

#### Disabled

```yaml
Opacity: "0.5"
Cursor: "not-allowed"
Pointer Events: "none"
```

### Tamanhos

```yaml
Small:
  padding: "px-5 py-2.5 (20px 10px)"
  font_size: "12px (text-xs)"
  icon_size: "14px (w-3.5 h-3.5)"

Medium (Default):
  padding: "px-6 py-3.5 (24px 14px)"
  font_size: "14px (text-sm)"
  icon_size: "16px (w-4 h-4)"

Large:
  padding: "px-8 py-4 (32px 16px)"
  font_size: "16px (text-base)"
  icon_size: "20px (w-5 h-5)"

XL (Hero CTAs):
  padding: "px-10 py-5 (40px 20px)"
  font_size: "16px (text-base)"
  icon_size: "20px (w-5 h-5)"
```

### Código Exemplo

```tsx
// Com ícone
<button className="group text-sm font-semibold px-6 py-3.5 bg-gradient-to-br from-[#012c40] to-[#00708c] text-white rounded-xl hover:scale-105 hover:shadow-xl transition-all flex items-center gap-2 font-['DM_Sans',sans-serif]">
  Próximo passo
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</button>

// Sem ícone
<button className="text-sm font-semibold px-6 py-3.5 bg-gradient-to-br from-[#012c40] to-[#00708c] text-white rounded-xl hover:scale-105 hover:shadow-xl transition-all font-['DM_Sans',sans-serif]">
  Confirmar
</button>
```

---

## Accent Button (Red/CTA)

### Variantes

1. **With Icon**
2. **Without Icon**

### Estados

#### Default

```yaml
Background: "#ff404c (solid)" # OU gradient: from-[#ff404c] to-[#e63643]
Text Color: "#ffffff"
Font: "DM Sans"
Font Size: "14px (text-sm)"
Font Weight: "500-600 (medium/semibold)"
Padding: "px-8 py-3.5 (32px 14px)"
Border Radius: "12px (rounded-xl)"
Shadow: "shadow-lg shadow-[rgba(255,64,76,0.25)]"
Transform: "scale(1) translateY(0)"
```

#### Hover

```yaml
Background: "#e63643" # Darker shade
Transform: "scale(1) translateY(-2px)" # Lift effect
Shadow: "shadow-xl shadow-[rgba(255,64,76,0.35)]"
Icon Position: "translateX(4px)"
Transition: "all 300ms ease-in-out"
```

#### Active

```yaml
Transform: "scale(1) translateY(0)"
Transition: "all 150ms ease-out"
```

### Código Exemplo

```tsx
<button className="group bg-[#ff404c] text-white px-8 py-3.5 rounded-xl text-sm font-medium hover:bg-[#e63643] transition-all shadow-lg shadow-[rgba(255,64,76,0.25)] hover:shadow-xl hover:shadow-[rgba(255,64,76,0.35)] hover:-translate-y-0.5 flex items-center justify-center gap-2">
  Ver nossos projetos
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</button>
```

---

## Secondary Button (Border/Ghost)

### Variantes

1. **With Border** (outlined)
2. **Ghost** (no border, hover only)

### Estados

#### Default

```yaml
Background: "white" # OU transparent para ghost
Border: "border-2 border-[rgba(0,112,140,0.15)]" # 2px para destaque
Text Color: "#012c40"
Font: "DM Sans"
Font Size: "14px (text-sm)"
Font Weight: "500-600 (medium/semibold)"
Padding: "px-8 py-3.5 (32px 14px)" # Ajustar para compensar border
Border Radius: "12px (rounded-xl)"
Shadow: "none"
```

#### Hover

```yaml
Border Color: "#00708c"
Background: "#f8fafb" # OU "rgba(0,112,140,0.04)"
Shadow: "shadow-md" # Opcional
Transition: "all 300ms ease-in-out"
```

#### Active

```yaml
Border Color: "#012c40"
Background: "rgba(0,112,140,0.08)"
```

### Código Exemplo

```tsx
// Secondary with border
<button className="bg-white border-2 border-[rgba(0,112,140,0.2)] px-8 py-3.5 rounded-xl text-sm font-medium text-[#012c40] hover:border-[#00708c] hover:bg-[#f8fafb] transition-all">
  Conheça os produtos
</button>

// Ghost (for CTA sections on dark background)
<button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-4 rounded-xl text-base font-semibold hover:bg-white/20 transition-all">
  Ver portfólio completo
</button>
```

---

## White Button (On Dark Backgrounds)

### Estados

#### Default

```yaml
Background: "#ffffff"
Text Color: "#012c40"
Font: "DM Sans"
Font Size: "16px (text-base)"
Font Weight: "600 (semibold)"
Padding: "px-10 py-5 (40px 20px)" # Geralmente maior em CTAs
Border Radius: "12px (rounded-xl)"
Shadow: "none"
```

#### Hover

```yaml
Transform: "scale(1.05)"
Shadow: "shadow-2xl"
Icon Position: "translateX(4px)"
Transition: "all 300ms ease-in-out"
```

### Código Exemplo

```tsx
<button className="group inline-flex items-center gap-3 text-base font-semibold px-10 py-5 bg-white text-[#012c40] rounded-xl hover:scale-105 hover:shadow-2xl transition-all font-['DM_Sans',sans-serif]">
  Falar com a equipe
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</button>
```

---

## Success Button (Green/Confirmation)

### Estados

#### Default

```yaml
Background: "gradient-to-br from-[#87deb3] to-[#00708c]"
Text Color: "#ffffff" # OU "#012c40" para contraste
Font: "DM Sans"
Font Size: "14px (text-sm)"
Font Weight: "600 (semibold)"
Padding: "px-5 py-2.5"
Border Radius: "12px (rounded-xl)"
Shadow: "shadow-lg"
```

#### Hover

```yaml
Transform: "scale(1.05)"
Shadow: "shadow-xl"
Icon Position: "translateX(4px)"
```

### Código Exemplo

```tsx
<button className="group text-sm font-semibold px-5 py-2.5 bg-gradient-to-br from-[#87deb3] to-[#00708c] text-white rounded-xl hover:scale-105 hover:shadow-xl transition-all font-['DM_Sans',sans-serif] flex items-center gap-2">
  Abrir conversa
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</button>
```

---

## Icon-Only Button

### Variantes

1. **Square** (w-10 h-10, w-12 h-12, etc.)
2. **Circle** (rounded-full)

### Estados

#### Default

```yaml
Width/Height: "40px (w-10 h-10)" # Variações: w-8 h-8, w-12 h-12
Background: "rgba(0,112,140,0.08)"
Border: "border border-[rgba(0,112,140,0.15)]" # Opcional
Border Radius: "12px (rounded-xl)" # OU rounded-full
Icon Size: "20px (w-5 h-5)"
Icon Color: "#00708c"
```

#### Hover

```yaml
Background: "#00708c"
Icon Color: "#ffffff"
Shadow: "shadow-md"
Transition: "all 200ms ease-in-out"
```

### Código Exemplo

```tsx
// Square
<button className="w-10 h-10 rounded-xl bg-[rgba(0,112,140,0.08)] flex items-center justify-center hover:bg-[#00708c] hover:shadow-md transition-all">
  <ArrowRight className="w-5 h-5 text-[#00708c] hover:text-white" />
</button>

// Circle
<button className="w-10 h-10 rounded-full bg-[rgba(0,112,140,0.08)] flex items-center justify-center hover:bg-[#00708c] hover:shadow-md transition-all">
  <Plus className="w-5 h-5 text-[#00708c]" />
</button>
```

---

## Link Button (Text Only)

### Estados

#### Default

```yaml
Background: "none"
Text Color: "#00708c"
Font: "DM Sans"
Font Size: "14px (text-sm)"
Font Weight: "600 (semibold)"
Text Decoration: "none"
Display: "inline-flex items-center gap-2"
```

#### Hover

```yaml
Text Color: "#012c40"
Icon Position: "translateX(2px)"
Transition: "all 200ms ease-in-out"
```

### Código Exemplo

```tsx
<button className="group inline-flex items-center gap-2 text-sm text-[#00708c] font-semibold hover:text-[#012c40] transition-colors font-['DM_Sans',sans-serif]">
  Ver case completo
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</button>
```

---

## Back Button (Navigation)

### Estados

#### Default

```yaml
Background: "transparent"
Border: "border-2 border-[rgba(0,112,140,0.15)]"
Text Color: "rgba(1,44,64,0.6)"
Font: "DM Sans"
Font Size: "12px (text-xs)"
Font Weight: "600 (semibold)"
Padding: "px-5 py-3"
Border Radius: "12px (rounded-xl)"
Icon: "ArrowLeft (before text)"
```

#### Hover

```yaml
Border Color: "#00708c"
Text Color: "#012c40"
Shadow: "shadow-md"
Icon Position: "translateX(-2px)"
```

### Código Exemplo

```tsx
<button
  onClick={() => setCurrentStep(1)}
  className="text-sm font-semibold px-5 py-3 border-2 border-[rgba(0,112,140,0.15)] rounded-xl text-[rgba(1,44,64,0.6)] hover:text-[#012c40] hover:border-[#00708c] hover:shadow-md transition-all font-['DM_Sans',sans-serif]"
>
  ← Voltar
</button>
```

---

## Filter/Pill Button

### Estados

#### Default (Unselected)

```yaml
Background: "transparent"
Border: "border border-[rgba(0,112,140,0.15)]"
Text Color: "rgba(1,44,64,0.6)"
Font: "DM Sans"
Font Size: "12px (text-xs)"
Font Weight: "500 (medium)"
Padding: "px-4 py-2"
Border Radius: "8px (rounded-lg)"
```

#### Hover (Unselected)

```yaml
Border Color: "#00708c"
Background: "rgba(0,112,140,0.04)"
```

#### Active (Selected)

```yaml
Border Color: "#00708c"
Background: "rgba(0,112,140,0.08)"
Text Color: "#012c40"
Font Weight: "600 (semibold)"
Shadow: "shadow-sm"
```

### Código Exemplo

```tsx
<button
  onClick={() => setActiveFilter(filter)}
  className={`text-xs font-medium px-4 py-2 rounded-lg border transition-all font-['DM_Sans',sans-serif] ${
    activeFilter === filter
      ? 'border-[#00708c] bg-[rgba(0,112,140,0.08)] text-[#012c40] shadow-sm'
      : 'border-[rgba(0,112,140,0.15)] text-[rgba(1,44,64,0.6)] hover:border-[#00708c] hover:bg-[rgba(0,112,140,0.04)]'
  }`}
>
  {filter}
</button>
```

---

## Pagination Button

### Previous/Next Buttons

#### Default

```yaml
Background: "white"
Border: "border-2 border-[rgba(0,112,140,0.15)]"
Text Color: "#012c40"
Font: "DM Sans"
Font Size: "14px (text-sm)"
Font Weight: "600 (semibold)"
Padding: "px-5 py-3"
Border Radius: "12px (rounded-xl)"
```

#### Hover

```yaml
Border Color: "#00708c"
Shadow: "shadow-lg"
Icon Transform: "translateX(±2px)" # + para next, - para prev
```

#### Disabled

```yaml
Background: "rgba(0,112,140,0.05)"
Border Color: "rgba(0,112,140,0.08)"
Text Color: "rgba(1,44,64,0.3)"
Cursor: "not-allowed"
```

### Numbered Pages

#### Default

```yaml
Width/Height: "48px (w-12 h-12)"
Background: "white"
Border: "border-2 border-[rgba(0,112,140,0.15)]"
Text Color: "rgba(1,44,64,0.6)"
Font: "DM Sans"
Font Size: "14px (text-sm)"
Font Weight: "600 (semibold)"
Border Radius: "12px (rounded-xl)"
```

#### Hover

```yaml
Border Color: "#00708c"
Text Color: "#012c40"
```

#### Active (Current Page)

```yaml
Background: "gradient-to-br from-[#00708c] to-[#012c40]"
Border: "none"
Text Color: "#ffffff"
Shadow: "shadow-lg"
```

### Código Exemplo

```tsx
// Page numbers
{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
  <button
    key={page}
    onClick={() => setCurrentPage(page)}
    className={`w-12 h-12 rounded-xl text-sm font-semibold transition-all font-['DM_Sans',sans-serif] ${
      currentPage === page
        ? 'bg-gradient-to-br from-[#00708c] to-[#012c40] text-white shadow-lg'
        : 'bg-white border-2 border-[rgba(0,112,140,0.15)] text-[rgba(1,44,64,0.6)] hover:border-[#00708c] hover:text-[#012c40]'
    }`}
  >
    {page}
  </button>
))}
```

---

## Implementação no Figma

### Estrutura de Componentes

```
Button [Component Set]
├─ Type
│  ├─ Primary
│  ├─ Secondary
│  ├─ Accent
│  ├─ Ghost
│  └─ Link
├─ State
│  ├─ Default
│  ├─ Hover
│  ├─ Active
│  ├─ Focus
│  └─ Disabled
├─ Size
│  ├─ Small
│  ├─ Medium
│  └─ Large
└─ Icon
   ├─ None
   ├─ Left
   └─ Right
```

### Propriedades de Variante

**Type:** Primary | Secondary | Accent | Ghost | Link
**State:** Default | Hover | Active | Focus | Disabled
**Size:** Small | Medium | Large
**Icon:** None | Left | Right

### Auto Layout

```yaml
Direction: "Horizontal"
Alignment: "Center"
Padding: "24px 14px (horizontal vertical)"
Gap: "8px (between text and icon)"
Resizing:
  Horizontal: "Hug"
  Vertical: "Fixed"
```

### Estilos Compartilhados

Criar styles no Figma:

1. **Text Styles:**
   - Button/Small
   - Button/Medium
   - Button/Large

2. **Color Styles:**
   - Button/Primary BG
   - Button/Accent BG
   - Button/Border Default
   - Button/Border Hover

3. **Effect Styles:**
   - Button/Shadow Default
   - Button/Shadow Hover
   - Button/Shadow Accent

### Prototyping

**Hover interaction:**
- Trigger: On Hover
- Action: Change to [Hover variant]
- Animation: Smart Animate
- Duration: 300ms
- Easing: Ease In and Out

**Click interaction:**
- Trigger: On Click
- Action: Change to [Active variant] → After 150ms → Change to [Default/Hover]
- Animation: Smart Animate
- Duration: 150ms
- Easing: Ease Out

---

## Checklist de Implementação

Ao criar um botão, garantir:

- [ ] Todos os estados (Default, Hover, Active, Focus, Disabled)
- [ ] Font correto (DM Sans com peso correto)
- [ ] Padding e border-radius corretos
- [ ] Ícone com tamanho correto (se aplicável)
- [ ] Transição configurada (300ms ease-in-out)
- [ ] Hover state com scale/shadow adequados
- [ ] Ícone anima com group-hover
- [ ] Cursor pointer no hover
- [ ] Disabled state com opacity 50% e cursor not-allowed
- [ ] Focus state com ring visível
- [ ] Acessibilidade (aria-label, aria-disabled, etc.)