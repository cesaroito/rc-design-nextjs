# Cards - Documentação Completa

Especificações de todos os tipos de cards utilizados no design system.

---

## Project Card

### Anatomia

```
Project Card
├─ Image Container (aspect-[4/3])
│  ├─ Image (with scale on hover)
│  ├─ Gradient Overlay (to-t from dark)
│  ├─ Icon Badge (top-left, gradient bg)
│  ├─ Featured Badge (top-right, if featured)
│  └─ Metrics Row (bottom, 2 metric cards)
├─ Content Container (p-6)
   ├─ Tags Row (flex gap-2)
   ├─ Title (H3)
   ├─ Description (paragraph)
   └─ CTA Link (with arrow)
```

### Especificações

#### Container

```yaml
Width: "Full (responsive grid)"
Background: "#ffffff"
Border: "1px solid rgba(0,112,140,0.15)"
Border Radius: "16px (rounded-2xl)"
Overflow: "hidden"
Shadow Default: "none"
Shadow Hover: "shadow-2xl (0 25px 50px -12px rgba(0,112,140,0.25))"
```

#### Image

```yaml
Aspect Ratio: "4:3"
Object Fit: "cover"
Transform Default: "scale(1)"
Transform Hover: "scale(1.1)"
Transition: "500ms ease-in-out"
Overflow: "hidden (in container)"
```

#### Gradient Overlay

```yaml
Type: "linear-gradient(to-t)"
Stops:
  - "rgba(1,44,64,0.9) 0%"
  - "rgba(1,44,64,0.4) 50%"
  - "transparent 100%"
Position: "absolute inset-0"
```

#### Icon Badge

```yaml
Position: "absolute top-4 left-4"
Size: "48px (w-12 h-12)"
Border Radius: "12px (rounded-xl)"
Background: "gradient-to-br from-[#00708c] to-[#012c40]"
Shadow: "shadow-xl"
Icon Size: "24px (w-6 h-6)"
Icon Color: "#ffffff"
```

#### Metrics Cards (Bottom Overlay)

```yaml
Position: "absolute bottom-4 left-4 right-4"
Layout: "flex gap-3"
Each Card:
  background: "rgba(255,255,255,0.95)"
  backdrop_blur: "sm"
  border_radius: "8px (rounded-lg)"
  padding: "px-3 py-2"
  border: "1px solid rgba(0,112,140,0.15)"
  flex: "1"
```

#### Content Section

```yaml
Padding: "24px (p-6)"
```

#### Tags

```yaml
Font: "DM Sans"
Font Size: "12px (text-xs)"
Font Weight: "500 (medium)"
Padding: "px-3 py-1"
Background: "rgba(0,112,140,0.08)"
Border: "1px solid rgba(0,112,140,0.12)"
Border Radius: "9999px (rounded-full)"
Text Color: "#00708c"
Gap: "8px (gap-2)"
```

#### Title

```yaml
Font: "Plus Jakarta Sans"
Font Size: "20px (text-xl)"
Font Weight: "600 (semibold)"
Color: "#012c40"
Margin Bottom: "8px (mb-2)"
```

#### Description

```yaml
Font: "DM Sans"
Font Size: "14px (text-sm)"
Color: "rgba(1,44,64,0.65)"
Line Height: "1.6 (leading-relaxed)"
Margin Bottom: "16px (mb-4)"
```

#### CTA Link

```yaml
Font: "DM Sans"
Font Size: "14px (text-sm)"
Font Weight: "600 (semibold)"
Color: "#00708c"
Display: "flex items-center gap-2"
Hover Gap: "12px (gap-3)"
Transition: "all 300ms ease-in-out"
```

### Estados

#### Default

```yaml
Border: "rgba(0,112,140,0.15)"
Shadow: "none"
Image Scale: "1"
Arrow Position: "0"
```

#### Hover

```yaml
Border: "#00708c"
Shadow: "shadow-2xl"
Image Scale: "1.1"
Arrow Position: "translateX(4px)"
Cursor: "pointer"
Transition: "all 300ms ease-in-out (card), 500ms (image)"
```

### Código Exemplo

```tsx
<Link
  to={`/projetos/${project.id}`}
  className="group relative bg-white border border-[rgba(0,112,140,0.15)] rounded-2xl overflow-hidden cursor-pointer hover:border-[#00708c] hover:shadow-2xl transition-all"
>
  {/* Image */}
  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#f8fafb]">
    <ImageWithFallback
      src={project.image}
      alt={project.name}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#012c40]/90 via-[#012c40]/40 to-transparent"></div>

    {/* Icon Badge */}
    <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} shadow-xl flex items-center justify-center`}>
      <Icon className="w-6 h-6 text-white" />
    </div>

    {/* Metrics */}
    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
      {project.metrics.map((metric, i) => (
        <div key={i} className="flex-1 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 border border-[rgba(0,112,140,0.15)]">
          <div className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#012c40] text-lg leading-none mb-1">
            {metric.value}
          </div>
          <div className="text-[10px] text-[rgba(1,44,64,0.6)] font-['DM_Sans',sans-serif] leading-tight">{metric.label}</div>
        </div>
      ))}
    </div>
  </div>

  {/* Content */}
  <div className="p-6">
    <div className="flex gap-2 flex-wrap mb-3">
      {project.tags.map((tag) => (
        <span key={tag} className="text-xs px-3 py-1 bg-[rgba(0,112,140,0.08)] border border-[rgba(0,112,140,0.12)] rounded-full text-[#00708c] font-medium font-['DM_Sans',sans-serif]">
          {tag}
        </span>
      ))}
    </div>
    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#012c40] text-xl mb-2">
      {project.name}
    </h3>
    <p className="text-sm text-[rgba(1,44,64,0.65)] leading-relaxed mb-4 font-['DM_Sans',sans-serif]">
      {project.description}
    </p>
    <div className="flex items-center gap-2 text-sm text-[#00708c] font-semibold group-hover:gap-3 transition-all font-['DM_Sans',sans-serif]">
      Ver case completo
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </div>
  </div>
</Link>
```

---

## Blog Card (Regular)

### Anatomia

```
Blog Card
├─ Image Container (aspect-[16/10])
│  ├─ Image (with scale on hover)
│  ├─ Gradient Overlay
│  ├─ Category Badge (top-left, gradient)
│  └─ Read Time Badge (bottom-right, white bg)
├─ Content Container (p-6)
   ├─ Meta Row (author, date)
   ├─ Title (H3, hover color change)
   ├─ Excerpt (paragraph, line-clamp)
   ├─ Tags Row (2 tags max)
   └─ CTA Link (border-top)
```

### Especificações

#### Container

```yaml
Background: "#ffffff"
Border: "1px solid rgba(0,112,140,0.15)"
Border Radius: "16px (rounded-2xl)"
Overflow: "hidden"
Shadow Default: "none"
Shadow Hover: "shadow-2xl"
```

#### Image

```yaml
Aspect Ratio: "16:10"
Object Fit: "cover"
Transform Default: "scale(1)"
Transform Hover: "scale(1.1)"
Transition: "500ms ease-in-out"
```

#### Category Badge

```yaml
Position: "absolute top-4 left-4"
Padding: "px-3 py-1.5"
Border Radius: "8px (rounded-lg)"
Background: "gradient-to-br (varies by category)"
Text Color: "#ffffff"
Font: "DM Sans"
Font Size: "12px (text-xs)"
Font Weight: "600 (semibold)"
Shadow: "shadow-lg"
```

#### Read Time Badge

```yaml
Position: "absolute bottom-4 right-4"
Padding: "px-3 py-1.5"
Border Radius: "8px (rounded-lg)"
Background: "rgba(255,255,255,0.95)"
Backdrop Blur: "sm"
Text Color: "#012c40"
Font: "DM Sans"
Font Size: "12px (text-xs)"
Font Weight: "500 (medium)"
Shadow: "shadow-md"
Icon: "Clock (14px w-3.5 h-3.5)"
```

#### Title Hover

```yaml
Default Color: "#012c40"
Hover Color: "#00708c"
Transition: "colors 300ms"
```

### Código Exemplo

```tsx
<Link
  to={`/blog/${post.id}`}
  className="group relative bg-white border border-[rgba(0,112,140,0.15)] rounded-2xl overflow-hidden cursor-pointer hover:border-[#00708c] hover:shadow-2xl transition-all"
>
  {/* Image */}
  <div className="relative aspect-[16/10] overflow-hidden bg-[#f8fafb]">
    <ImageWithFallback
      src={post.image}
      alt={post.title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#012c40]/80 via-[#012c40]/30 to-transparent"></div>

    {/* Category Badge */}
    <div className="absolute top-4 left-4">
      <div className={`px-3 py-1.5 rounded-lg bg-gradient-to-br ${post.gradient} text-white text-xs font-semibold font-['DM_Sans',sans-serif] shadow-lg`}>
        {post.category}
      </div>
    </div>

    {/* Read Time */}
    <div className="absolute bottom-4 right-4">
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm text-xs font-medium text-[#012c40] shadow-md font-['DM_Sans',sans-serif]">
        <Clock className="w-3.5 h-3.5" />
        {post.readTime}
      </div>
    </div>
  </div>

  {/* Content */}
  <div className="p-6">
    <div className="flex items-center gap-2 text-xs text-[rgba(1,44,64,0.6)] mb-3 font-['DM_Sans',sans-serif]">
      <User className="w-3.5 h-3.5" />
      <span>{post.author}</span>
      <span className="text-[rgba(1,44,64,0.3)]">·</span>
      <span>{post.date}</span>
    </div>

    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#012c40] text-lg mb-3 leading-tight group-hover:text-[#00708c] transition-colors line-clamp-2">
      {post.title}
    </h3>

    <p className="text-sm text-[rgba(1,44,64,0.65)] leading-relaxed mb-4 font-['DM_Sans',sans-serif] line-clamp-3">
      {post.excerpt}
    </p>

    <div className="flex gap-2 flex-wrap mb-4">
      {post.tags.slice(0, 2).map((tag) => (
        <span
          key={tag}
          className="text-xs px-2.5 py-1 rounded-full bg-[rgba(0,112,140,0.06)] text-[#00708c] font-medium font-['DM_Sans',sans-serif]"
        >
          {tag}
        </span>
      ))}
    </div>

    <div className="flex items-center gap-2 text-sm text-[#00708c] font-semibold pt-4 border-t border-[rgba(0,112,140,0.08)] group-hover:gap-3 transition-all font-['DM_Sans',sans-serif]">
      Ler mais
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </div>
  </div>
</Link>
```

---

## Service Card (Sidebar Item)

### Especificações

#### Default State

```yaml
Padding: "px-6 py-3.5"
Border Left: "3px solid transparent"
Background: "transparent"
Cursor: "pointer"
```

#### Hover State

```yaml
Background: "#ffffff"
Border Left: "3px solid rgba(0,112,140,0.2)"
Icon Background: "rgba(0,112,140,0.12)"
```

#### Active State

```yaml
Background: "#ffffff"
Border Left: "3px solid #00708c"
Shadow: "shadow-lg (0 2px 12px rgba(0,112,140,0.08))"
Icon Background: "gradient-to-br from-[#00708c] to-[#012c40]"
Icon Color: "#ffffff"
Text Color: "#012c40"
Text Weight: "semibold"
```

### Icon Badge

```yaml
Size: "36px (w-9 h-9)"
Border Radius: "8px (rounded-lg)"
Icon Size: "16px (w-4 h-4)"
Default BG: "rgba(0,112,140,0.08)"
Active BG: "gradient-to-br from-[#00708c] to-[#012c40]"
```

---

## Contact Method Card

### Especificações

```yaml
Padding: "p-4"
Border: "1px solid rgba(0,112,140,0.15)"
Border Radius: "12px (rounded-xl)"
Background: "rgba(255,255,255,0.8)"
Backdrop Blur: "sm"
Layout: "flex items-start gap-3"
```

#### Hover State

```yaml
Border Color: "#00708c"
Shadow: "shadow-lg"
Transition: "all 300ms ease-in-out"
```

#### Icon Badge

```yaml
Size: "40px (w-10 h-10)"
Border Radius: "12px (rounded-xl)"
Background: "gradient-to-br from-[#87deb3] to-[#00708c]"
Shadow: "shadow-md"
Icon Size: "20px (w-5 h-5)"
Icon Color: "#ffffff"
```

---

## Team Member Card

### Especificações

```yaml
Padding: "p-4"
Border: "1px solid rgba(0,112,140,0.15)"
Border Radius: "12px (rounded-xl)"
Background: "rgba(255,255,255,0.8)"
Backdrop Blur: "sm"
Shadow: "shadow-sm"
Layout: "flex items-center gap-3"
```

#### Avatar Badge

```yaml
Size: "48px (w-12 h-12)"
Border Radius: "12px (rounded-xl)"
Background: "gradient-to-br from-[#00708c] to-[#012c40]"
Shadow: "shadow-md"
Icon: "User icon OR initials"
```

#### Status Indicator

```yaml
Size: "8px (w-2 h-2)"
Border Radius: "rounded-full"
Background: "#87deb3"
Animation: "animate-pulse"
```

---

## Implementação no Figma

### Auto Layout Structure

**Project Card:**
```
Auto Layout Vertical (Fill container)
├─ Image Container (Fill, Fixed Height)
│  └─ Absolute positioned elements (badges, metrics)
└─ Content Container (Hug, Padding 24px)
   └─ Auto Layout Vertical (Gap 12-16px)
```

### Prototyping

**Card Hover:**
- Trigger: On Hover
- Action: Change to variant="Hover"
- Animation: Smart Animate
- Duration: 300ms
- Easing: Ease In and Out

**Image Scale:**
- Precisa de frame pai com clip content
- Image escala para 110% no hover

---

## Responsividade

```yaml
Mobile (< 640px):
  Grid: "1 column"
  Padding: "p-4 (reduced from p-6)"
  Image Aspect: "Manter 4:3 ou 16:10"

Tablet (640px - 1023px):
  Grid: "2 columns"
  Padding: "p-5"

Desktop (>= 1024px):
  Grid: "3 columns"
  Padding: "p-6"
```