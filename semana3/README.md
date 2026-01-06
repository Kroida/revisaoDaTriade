## 1️⃣ Seletores CSS

Servem para **definir quais elementos receberão estilo**.

### 🔹 Seletor de elemento

Aplica estilo a **todas as tags daquele tipo**.

```css
p {
    color: blue;
}
```

*✔ Todos os `<p>` ficam azuis
*❌ Pouco específico (difícil de manter em projetos médios/grandes)

---

### 🔹 Seletor de classe (`.class`)

Reutilizável, flexível e **padrão para estilização moderna**.

```css
.destaque {
    font-weight: bold;
}
```

```html
<p class="destaque">Texto importante</p>
```

✔ Boa prática
✔ Reutilizável
✔ Facilmente sobrescrevível

---

### 🔹 Seletor de id (`#id`)

Identifica **um único elemento na página**.

```css
#titulo {
    color: red;
}
```

```html
<h1 id="titulo">Título</h1>
```

*⚠️ Alta especificidade
*⚠️ Dificulta manutenção e reuso
*📌 Evite usar para layout ou estilos globais

---

## 2️⃣ Cores, Fontes e Backgrounds

### 🎨 Cores

Definidas por nome, HEX, RGB ou HSL.

```css
p {
    color: #333;
}
```

*📌 HEX e HSL são os mais usados em projetos profissionais

---

### 🔤 Fontes

Controlam legibilidade e identidade visual.

```css
body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
}
```

🧠 Boas práticas:

* Sempre defina **fontes de fallback**
* Prefira `rem` para escalabilidade

---

### 🖼 Background

```css
.box {
    background-color: #f5f5f5;
    background-image: url("img.png");
    background-size: cover;
}
```

📌 `cover` ajusta a imagem para cobrir todo o elemento

---

## 3️⃣ Box Model (conceito fundamental)

Todo elemento HTML é uma **caixa** composta por:

```
┌───────────────┐
│    margin     │  ← espaço externo
│ ┌───────────┐ │
│ │  border   │ │
│ │ ┌───────┐ │ │
│ │ │padding│ │ │
│ │ │content│ │ │
│ │ └───────┘ │ │
│ └───────────┘ │
└───────────────┘
```

### Exemplo prático

```css
.card {
    width: 200px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
}
```

*📌 O tamanho final **não é só o `width`**
*📌 `padding` e `border` aumentam a caixa

---

### 🔧 `box-sizing: border-box`

Resolve o problema clássico de cálculo de tamanho.

```css
* {
    box-sizing: border-box;
}
```

🧠 Com `border-box`:

```
[ conteúdo + padding + border ] = tamanho total fixo
```

✔ Layout previsível
✔ Menos bugs visuais
✔ Padrão em frameworks modernos

---

## 4️⃣ Display

Define **como o elemento se comporta no fluxo do layout**.

### 🔹 `block`

Ocupa a linha inteira.

```css
div {
    display: block;
}
```

✔ Aceita `width`, `height`, `margin`, `padding`

---

### 🔹 `inline`

Fica na mesma linha, como texto.

```css
span {
    display: inline;
}
```

*❌ Não aceita `width` e `height`
*✔ Ideal para texto e destaques pequenos

---

### 🔹 `inline-block`

Combina comportamento inline com controle de tamanho.

```css
.button {
    display: inline-block;
    width: 120px;
    padding: 10px;
}
```

✔ Fica na linha
✔ Aceita dimensões
✔ Muito usado em botões simples

---

## 🧠 Comparação rápida

| Display      | Quebra linha | Width / Height |
| ------------ | ------------ | -------------- |
| block        | Sim          | Sim            |
| inline       | Não          | Não            |
| inline-block | Não          | Sim            |

---

## 📌 Cheat-sheet final

```css
/* Padrão moderno */
* { box-sizing: border-box; }

/* Classe > id */
.container { }

/* Texto */
span { display: inline; }

/* Botões simples */
.button { display: inline-block; }
```

---

## 🧠 Perguntas para reflexão

* Quando **classe é melhor que id**?
* Por que `box-sizing: border-box` virou padrão?
* Quando `inline-block` ainda faz sentido vs `flex`?
* Como o `display` impacta responsividade e acessibilidade?
