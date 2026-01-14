## 1️⃣ CSS Grid – Layout bidimensional básico

**O que é**  
Sistema de layout bidimensional (linhas **e** colunas) mais poderoso e preciso que Flexbox para disposições complexas.

**Para que serve**  
Criar grades de imagens, galerias, dashboards, layouts de página inteira, card grids, etc.

**HTML base do exemplo**  
```html
<div class="container">
    <img src="src/background2.jpg"  alt="Caveira">
    <img src="src/background3.jpg"  alt="Frieren">
    <img src="src/background4.jpg"  alt="Queen Marika">
    <img src="src/background5.jpg"  alt="Reze">
</div>
```

**Propriedades principais no `.container` (esperado em `styleGrid.css`)**

| Propriedade              | Valor comum no exemplo               | Efeito principal                              | Observação importante                              |
|--------------------------|---------------------------------------|-----------------------------------------------|----------------------------------------------------|
| `display`                | `grid`                               | Ativa o Grid                                  | Obrigatório                                        |
| `grid-template-columns`  | `repeat(2, 1fr)` ou `200px 1fr` etc. | Define número e tamanho das colunas           | `fr`, `px`, `%`, `auto`, `minmax()` são comuns     |
| `grid-template-rows`     | `auto` / `repeat(2, 250px)`          | Define altura das linhas                      | Muitas vezes `auto` com imagens                    |
| `gap`                    | `16px` ou `1rem 2rem`                | Espaçamento entre itens (row-gap + column-gap)| Substitui `margin` na maioria dos casos            |
| `justify-items`          | `center` / `stretch`                 | Alinhamento horizontal dentro da célula       | Afeta todos os itens                               |
| `align-items`            | `center` / `start`                   | Alinhamento vertical dentro da célula         | Muito usado com imagens                            |
| `place-items`            | `center`                             | Shorthand de `align-items` + `justify-items`  | Ótimo para centralizar tudo                        |

**Exemplo mínimo moderno de galeria 2×2**

```css
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 2rem;
}

.container img {
  width: 100%;
  height: 100%;
  object-fit: cover;       /* ou contain */
  border-radius: 8px;
}
```

📌 **Boa prática** — sempre defina `width: 100%` + `object-fit` em imagens dentro de grid cells

## 2️⃣ Pseudo-classes em links e interatividade

**Contexto do segundo arquivo**  
Demonstra efeito visual ativado ao clicar em `<a href="#id">`

**HTML relevante**

```html
<div id="aEffect">
    <p>Você clicou no botão</p>
</div>

<a href="#aEffect">Clique em mim</a>
```

**Pseudo-classes mais usadas em links / elementos interativos**

| Pseudo-classe     | Quando ativada                          | Uso típico                                      | Exemplo comum                                      |
|-------------------|-----------------------------------------|--------------------------------------------------|----------------------------------------------------|
| `:hover`          | mouse sobre o elemento                  | Mudar cor, escala, sombra                        | `a:hover { color: #00f; }`                         |
| `:active`         | elemento sendo pressionado (clique)     | Efeito de "pressionado"                          | `a:active { transform: scale(0.97); }`             |
| `:focus`          | elemento recebe foco (teclado ou clique)| Estilo de acessibilidade (outline customizado)   | `a:focus { outline: 3px solid #f90; }`             |
| `:focus-visible`  | foco visível (teclado, não mouse)       | Melhora acessibilidade sem poluir clique         | Preferir sobre `:focus` em muitos casos            |
| `:target`         | elemento é o destino de um link `#id`   | Destacar seção ao clicar em âncora               | `#aEffect:target { background: #ff0; }`            |

**Padrão comum – efeito de clique com :target**

```css
#aEffect {
  padding: 2rem;
  border: 2px dashed transparent;
  transition: all 0.4s ease;
}

#aEffect:target {
  border-color: #f00;
  background: #fff3cd;
  transform: scale(1.03);
}
```

🧠 **Dica prática** — `:target` não depende de JavaScript → ótimo para protótipos e acessibilidade

⚠️ **Armadilha comum** — `:target` só funciona com âncoras que mudam a URL (`#id`). Botões sem `href` ou SPA sem hash não ativam.

## 3️⃣ Boas práticas gerais vistas nos exemplos

- Uso consistente de classes semânticas (`container`)
- Imagens com `alt` descritivo
- Estrutura HTML limpa antes de estilizar
- Preferência por unidades relativas (`rem`, `fr`)
- Evitar tamanhos fixos em imagens responsivas
- Pensar em acessibilidade desde o HTML (`id` + `href` + `:focus`)

## Cheat-sheet Rápido – CSS Grid + Interatividade

```text
/* Grid básico */
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 1.5rem;

/* Imagens em grid */
img {
  width: 100%;
  aspect-ratio: 4 / 3;      /* ou 16/9, 1/1 */
  object-fit: cover;
}

/* Link + efeito target */
a { transition: 0.2s; }
a:hover  { color: royalblue; }
a:active { transform: translateY(2px); }

/* Destaque ao pular para ID */
#meuId:target {
  animation: highlight 1.5s;
  outline: 4px solid orange;
}
```