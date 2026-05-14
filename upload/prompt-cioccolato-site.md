# 🍫 PROMPT — SITE CIOCCOLATO CHOCOLATES ARTESANAIS

## VISÃO GERAL

Site one-page para chocolateria artesanal **Cioccolato** — marca italiana com mascote personagem 3D (boneco de chocolate com cartola dourada, monóculo, gravata borboleta dourada, luvas brancas). Tom: premium, quente, convidativo. Nem infantil nem sério demais — como o mascote: elegante com charme.

## ⚠️ REGRA ABSOLUTA — IMAGENS
Usar SOMENTE as URLs fornecidas neste prompt. Não substituir, não buscar alternativas, não usar imagens próprias. Nunca.

---

## IDENTIDADE VISUAL

### Paleta:
```css
--chocolate-dark:  #2C1A0E;   /* fundo principal */
--chocolate-mid:   #5C3317;   /* seções alternadas */
--caramel:         #C8860A;   /* dourado quente — accent principal */
--cream:           #F5EDD6;   /* texto claro, cards */
--cream-low:       #D4C4A0;   /* texto secundário */
--ganache:         #1A0F08;   /* preto chocolate */
--gold:            #D4A017;   /* dourado brilhante */
```

### Tipografia:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Lato:wght@300;400;700&family=Dancing+Script:wght@600&display=swap" rel="stylesheet">
```
- **Títulos:** Playfair Display italic — elegância italiana
- **Corpo:** Lato 300/400 — legível e leve
- **Destaque/preço:** Dancing Script — caligrafia artesanal

### Mascote:
```
Logo URL:
https://res.cloudinary.com/dwfbqgtfr/image/upload/v1742491617/WhatsApp_Image_2026-03-20_at_17_46_57_rjkbxo.jpg
```
Usar o mascote como elemento recorrente — hero, seção de destaque, footer.

---

## ESTRUTURA DO SITE

### SEÇÃO 1 — HERO

Layout: fundo `#2C1A0E` com textura de cacau via SVG feTurbulence. Mascote à direita em tamanho grande (400px). Título à esquerda.

```
Título: "Chocolate que conta uma história."
Subtítulo: "Artesanal. Italiano. Irresistível."
CTA: "Ver Coleção →"
```

**Animação hero:**
- Mascote entra da direita com `translateX(60px) → 0` + `opacity 0 → 1` em 0.8s ease-out
- Título: char reveal letra por letra, delay 0.3s após load
- Fundo: gotículas de chocolate animadas caindo (CSS keyframes, 5-6 gotas em posições aleatórias, `border-radius: 50% 50% 50% 0`, cor `#5C3317`, opacity 0.3)

**Textura de fundo:**
```css
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
```

---

### SEÇÃO 2 — NOSSA HISTÓRIA (fundo `#1A0F08`)

Layout assimétrico: texto à esquerda (60%), linha dourada vertical separando, detalhe decorativo à direita.

```
Label: "DESDE 2018 · ARTESANAL"
Título: "Do cacau à sua mão."
Texto: "Cada tablete e cada ovo é produzido com cacau selecionado, 
temperado à mão e embalado com amor. Cioccolato nasceu da 
paixão por transformar chocolate em experiência."
```

Linha dourada vertical: `width: 1px; background: var(--caramel); height: 120px`

---

### SEÇÃO 3 — COLEÇÃO (fundo `#2C1A0E`)

**Título da seção:**
```
"Nossa Coleção"
Subtítulo em Dancing Script: "feito com amor, temperado com arte"
```

**Grid de produtos:** 3 colunas desktop, 1 coluna mobile. Cards com hover sofisticado.

#### CARD DESIGN:
```css
.produto-card {
  background: #1A0F08;
  border: 1px solid rgba(200,134,10,0.2);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.produto-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 60px rgba(200,134,10,0.15);
  border-color: rgba(200,134,10,0.5);
}

.produto-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--caramel);
  color: var(--ganache);
  font-family: 'Lato', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  padding: 4px 10px;
  border-radius: 20px;
  text-transform: uppercase;
}
```

#### 5 PRODUTOS:

**1. Tablete Intenso 70%**
- Badge: MAIS VENDIDO
- Peso: 80g
- Preço: R$ 28,90
- Descrição: "Cacau intenso com notas de frutas vermelhas e finalização longa. Para quem leva chocolate a sério."
- Imagem placeholder: fundo `#3D2210` com ícone de tablete SVG centralizado

**2. Tablete Avelã & Caramelo**
- Badge: NOVO
- Peso: 80g
- Preço: R$ 32,90
- Descrição: "Chocolate ao leite cremoso com avelãs inteiras tostadas e swirl de caramelo artesanal."
- Imagem placeholder: fundo `#4A2A0F`

**3. Tablete Branco Pistache**
- Badge: EDIÇÃO LIMITADA
- Peso: 80g
- Preço: R$ 34,90
- Descrição: "Chocolate branco premium com pistache siciliano e flor de sal. Delicado e surpreendente."
- Imagem placeholder: fundo `#3A2E1A`

**4. Ovo de Páscoa Trufa Belga**
- Badge: PÁSCOA 2026
- Peso: 350g
- Preço: R$ 89,90
- Descrição: "Casca de chocolate 60% cacau recheada com trufas belgas artesanais. Embalagem presente incluída."
- Imagem placeholder: fundo `#2C1A0E`

**5. Ovo de Páscoa Branco com Morango**
- Badge: PÁSCOA 2026
- Peso: 300g
- Preço: R$ 79,90
- Descrição: "Chocolate branco com recheio de mousse de morango e pedaços de morango liofilizado."
- Imagem placeholder: fundo `#3A1A1A`

**Placeholder das imagens** — usar este SVG inline para cada produto (trocar a cor de fundo por produto):
```html
<div class="produto-img-placeholder" style="
  width: 100%; 
  height: 220px; 
  background: #3D2210;
  display: flex;
  align-items: center;
  justify-content: center;
">
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
    <rect x="10" y="20" width="60" height="40" rx="6" fill="rgba(200,134,10,0.3)" stroke="rgba(200,134,10,0.6)" stroke-width="1.5"/>
    <line x1="10" y1="32" x2="70" y2="32" stroke="rgba(200,134,10,0.4)" stroke-width="1"/>
    <line x1="10" y1="44" x2="70" y2="44" stroke="rgba(200,134,10,0.4)" stroke-width="1"/>
    <line x1="28" y1="20" x2="28" y2="60" stroke="rgba(200,134,10,0.4)" stroke-width="1"/>
    <line x1="46" y1="20" x2="46" y2="60" stroke="rgba(200,134,10,0.4)" stroke-width="1"/>
  </svg>
</div>
```

**Botão de cada card:**
```html
<button class="btn-comprar">
  Adicionar ao Carrinho
</button>
```
```css
.btn-comprar {
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 1px solid var(--caramel);
  color: var(--caramel);
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: crosshair;
  transition: all 0.3s ease;
  border-radius: 8px;
  margin-top: 1rem;
}

.btn-comprar:hover {
  background: var(--caramel);
  color: var(--ganache);
}
```

---

### SEÇÃO 4 — DIFERENCIAIS (fundo `#5C3317`)

3 colunas com ícones SVG simples + texto:

**Col 1 — Artesanal**
- Ícone: mãos SVG
- Título: "100% Artesanal"
- Texto: "Cada peça produzida à mão, com temperagem manual e controle total do processo."

**Col 2 — Cacau Selecionado**
- Ícone: folha SVG
- Título: "Cacau Premium"
- Texto: "Grãos selecionados de fazendas certificadas do sul da Bahia."

**Col 3 — Embalagem Presente**
- Ícone: caixa SVG
- Título: "Embalagem Exclusiva"
- Texto: "Cada produto embalado como presente, pronto para presentear alguém especial."

---

### SEÇÃO 5 — CTA FINAL (fundo `#2C1A0E`)

Mascote menor (200px) centralizado acima do texto.

```
Título em Playfair italic: "Pronto para se apaixonar?"
Subtítulo: "Peça pelo WhatsApp e receba em casa."
CTA principal: "Pedir pelo WhatsApp →"  
```

Botão WhatsApp:
```css
.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #25D366;
  color: white;
  padding: 16px 32px;
  border-radius: 50px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-whatsapp:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(37,211,102,0.3);
}
```
Link: `https://wa.me/5511999999999?text=Olá! Vim pelo site e quero fazer um pedido 🍫`

---

### FOOTER (fundo `#1A0F08`)

```
Logo/mascote pequeno (80px) + nome "Cioccolato"
Tagline em Dancing Script: "Artesanal com amor"
Linha dourada separadora
Links: Instagram | WhatsApp | Facebook
© 2026 Cioccolato · Chocolates Artesanais
```

---

## ANIMAÇÕES GLOBAIS

### Reveal on scroll:
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
```

### Gotículas de chocolate no hero:
```css
@keyframes drip {
  0% { transform: translateY(-20px); opacity: 0; }
  10% { opacity: 0.3; }
  90% { opacity: 0.2; }
  100% { transform: translateY(120vh); opacity: 0; }
}

.drip {
  position: absolute;
  width: 8px;
  height: 12px;
  background: #5C3317;
  border-radius: 50% 50% 50% 0;
  animation: drip linear infinite;
  pointer-events: none;
}
```
Criar 6 gotas com posições e durações aleatórias via JS.

### Cursor:
```css
*, *::before, *::after { cursor: crosshair; }
```

---

## RESPONSIVO

```css
@media (max-width: 768px) {
  /* Hero: mascote acima, texto abaixo */
  .hero-inner { flex-direction: column-reverse; text-align: center; }
  .mascote-hero { width: 240px; }
  
  /* Grid produtos: 1 coluna */
  .produtos-grid { grid-template-columns: 1fr; }
  
  /* Diferenciais: 1 coluna */
  .diferenciais-grid { grid-template-columns: 1fr; }
}
```

---

## STACK

- **HTML + CSS + JS vanilla** — sem framework
- **Google Fonts** via CDN
- **IntersectionObserver** para reveals
- **Zero dependências externas**

---

## RESUMO

```
✅ Hero com mascote + char reveal + gotículas animadas
✅ Seção história assimétrica com linha dourada
✅ 3 tabletes artesanais + 2 ovos de Páscoa
✅ Cards com hover sofisticado + badge + botão
✅ Seção diferenciais 3 colunas
✅ CTA WhatsApp com botão verde
✅ Footer com mascote + Dancing Script
✅ Reveal on scroll em todas as seções
✅ Cursor crosshair
✅ Responsivo mobile
✅ Paleta chocolate quente + dourado
✅ Playfair Display + Lato + Dancing Script
✅ Mascote Cioccolato recorrente no site
```
