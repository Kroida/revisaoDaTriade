## 1️⃣ Estrutura do Projeto e Conceitos Centrais

**Objetivo do exemplo**  
Criar um formulário simples que captura nome e idade do usuário, e ao clicar no botão exibe as informações formatadas em um `<div>` abaixo.

**Arquivos envolvidos**
- `index.html` → estrutura HTML
- `style.css` → estilo básico e centralização
- `script.js` → lógica JavaScript (manipulação do DOM e eventos)

**Fluxo de execução (diagrama simples)**

```
Usuário digita nome e idade
    ↓
Clica no botão "Enviar"
    ↓
Evento "click" é disparado
    ↓
Função anônima captura valores dos inputs
    ↓
Limpa conteúdo anterior do <div id="aparecer">
    ↓
Cria elementos <label> + <p> dinamicamente
    ↓
Anexa os novos elementos ao DOM
```

## 2️⃣ Seleção de Elementos do DOM

**Método usado**  
`document.getElementById("id")` – retorna o elemento com o ID especificado.

**Exemplo do código**

```js
const input    = document.getElementById("entrada");   // input nome
const input2   = document.getElementById("entrada2");  // input idade
const botao    = document.getElementById("botao");
const aparecer = document.getElementById("aparecer");  // div de saída
```

📌 **Boa prática** — Armazenar referências em constantes no início do script evita chamadas repetidas ao DOM (melhor performance).

## 3️⃣ Adição de Event Listeners

**Método principal**  
`elemento.addEventListener("evento", callback)`

**Exemplo**

```js
botao.addEventListener("click", () => {
    // código executado ao clicar
});
```

🧠 **Vantagem** — Permite múltiplos listeners no mesmo elemento e não sobrescreve funções anteriores (diferente de `onclick`).

## 4️⃣ Manipulação do DOM – Criação e Inserção de Elementos

**Passos realizados no exemplo**

| Etapa                          | Método/Código utilizado                              | Efeito principal                              |
|--------------------------------|------------------------------------------------------|-----------------------------------------------|
| Limpar conteúdo anterior       | `aparecer.innerHTML = "";`                           | Remove tudo que já estava dentro do div       |
| Capturar valores dos inputs    | `const mensagem = input.value;`                      | Lê o texto digitado pelo usuário              |
| Criar novos elementos          | `document.createElement("p")` / `document.createElement("label")` | Cria elementos vazios no DOM                  |
| Definir conteúdo de texto      | `nome.textContent = mensagem;`                       | Insere o valor do input no elemento           |
| Anexar filho ao pai            | `labelNome.appendChild(nome);`                       | Monta a estrutura label + p                   |
| Inserir no DOM final           | `aparecer.appendChild(labelNome);`                   | Adiciona ao div visível na página             |

**Código completo da função (extraído)**

```js
botao.addEventListener("click", () => {
    const mensagem = input.value;
    const mensagem2 = input2.value;

    aparecer.innerHTML = "";  // limpa conteúdo anterior

    const nome = document.createElement("p");
    const labelNome = document.createElement("label");
    const idade = document.createElement("p");
    const labelIdade = document.createElement("label");

    nome.textContent = mensagem;
    labelNome.textContent = "Nome:";

    idade.textContent = mensagem2;
    labelIdade.textContent = "idade:";

    labelNome.appendChild(nome);
    labelIdade.appendChild(idade);

    aparecer.appendChild(labelNome);
    aparecer.appendChild(labelIdade);
});
```

⚠️ **Armadilha comum** — Usar `innerHTML` para inserir conteúdo dinâmico pode abrir brechas de XSS. Aqui é seguro porque o conteúdo vem do usuário e não de fontes externas, mas em projetos reais prefira `textContent` ou `createElement`.

## 5️⃣ Estilização Complementar (CSS) – Pontos Relevantes

**Regras aplicadas ao `#aparecer`**

```css
#aparecer {
    width: 177px;
    text-align: left;
}

#aparecer label {
    font-style: normal;
    color: black;
    text-align: left;
}

#aparecer label p {
    font-style: italic;
    color: red;
    text-align: center;
}
```

Isso cria o visual de:
- Label normal em preto
- Texto do nome/idade em itálico vermelho e centralizado

## Cheat-sheet Rápido – DOM + Eventos (JavaScript Básico)

```js
// Selecionar elementos
const el = document.getElementById("id");
const el = document.querySelector(".classe"); // ou "tag"

// Adicionar evento
el.addEventListener("click", () => { ... });

// Ler valor de input
const valor = input.value;

// Limpar elemento
elemento.innerHTML = "";
// ou elemento.textContent = "";

// Criar elemento
const novo = document.createElement("p");

// Definir texto
novo.textContent = "Olá";

// Anexar
pai.appendChild(novo);

// Alternativa moderna (mais limpa)
const fragment = document.createDocumentFragment();
fragment.appendChild(novo);
pai.appendChild(fragment); // apenas 1 reflow
```