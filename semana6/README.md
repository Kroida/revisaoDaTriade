## 1️⃣ Objetivo do Exemplo

Formulário que coleta:
- Nome (input text)
- Matéria escolhida (radio buttons: Front-End, Back-End, Full-Stack)

Ao enviar:
- Mostra resultado em uma caixa que estava oculta
- Salva os dados no `localStorage`
- Cria botão de reload para limpar e reiniciar

Os dados são **recuperados automaticamente** na próxima carga da página.

## 2️⃣ Estrutura HTML Relevante

```html
<form action="#">
    <input type="text" id="entryValue" required>
    
    <input type="radio" name="eRadio" value="FrontEnd" required> Front End
    <input type="radio" name="eRadio" value="BackEnd">           Back End
    <input type="radio" name="eRadio" value="FullStack">         Full Stack
    
    <button type="submit" id="submitValue">Enviar</button>
</form>

<div class="hiddenContainer" style="display: none;">
    <h1>Seu nome é</h1>     <p id="pNome"></p>
    <h1>Você escolheu</h1>  <p id="pRadio"></p>
</div>
```

📌 `required` nos campos + `name` igual nos radios → comportamento nativo do navegador já ajuda na validação

## 3️⃣ Seleção de Elementos – Padrões Modernos

```js
const entrada    = document.getElementById("entryValue");
const radios     = document.querySelectorAll('input[name="eRadio"]');
const botao      = document.getElementById("submitValue");
const pNome      = document.getElementById("pNome");
const pRadio     = document.getElementById("pRadio");
const container  = document.querySelector(".hiddenContainer");
```

| Método usado               | Quando usar                                      | Vantagem principal                     |
|----------------------------|--------------------------------------------------|----------------------------------------|
| `getElementById`           | IDs únicos (inputs, botões, saídas)              | Mais rápido                            |
| `querySelectorAll`         | Coleção de elementos (todos os radios)           | Flexível com seletores CSS             |
| `querySelector`            | Único elemento por classe ou outro seletor       | Legível e versátil                     |

## 4️⃣ Eventos Principais Utilizados

| Evento              | Elemento(s)                  | Objetivo principal                                  |
|---------------------|------------------------------|-----------------------------------------------------|
| `DOMContentLoaded`  | `document`                   | Garantir que o DOM está totalmente carregado        |
| `change`            | cada `<input type="radio">`  | Atualizar variável de controle da matéria escolhida |
| `click`             | botão submit                 | Processar formulário (com `preventDefault`)         |

**Padrão importante – Interceptar submit**

```js
botao.addEventListener("click", (event) => {
    event.preventDefault();   // ← impede envio e reload da página
    // ... resto da lógica
});
```

🧠 Alternativa moderna: ouvir `"submit"` no `<form>`

```js
form.addEventListener("submit", e => {
    e.preventDefault();
    // ...
});
```

## 5️⃣ Manipulação de Radio Buttons + Estado Compartilhado

```js
let materiaSelecionada = "";

radios.forEach(radio => {
    radio.addEventListener("change", () => {
        materiaSelecionada = radio.value;
    });
});
```

**Boa prática**  
Manter uma única fonte da verdade (`materiaSelecionada`) em vez de ler todos os radios no momento do submit.

## 6️⃣ LocalStorage – Persistência Simples no Navegador

**Fluxo completo**

```text
1. Ao carregar página
   ↓
2. localStorage.getItem("cadastro") → JSON.parse()
   ↓
3. Preenche input + marca radio correto

4. Ao clicar em Enviar
   ↓
5. Cria objeto { nome, materia }
   ↓
6. localStorage.setItem("cadastro", JSON.stringify(obj))
```

**Trecho chave – Recuperação**

```js
const dadosSalvos = localStorage.getItem("cadastro");
if (dadosSalvos) {
    const dados = JSON.parse(dadosSalvos);
    entrada.value = dados.nome;
    
    // mapeamento de exibição → value do radio
    let valorRadio = "";
    if (dados.materia === "Front-End") valorRadio = "FrontEnd";
    // ... demais casos
    
    radios.forEach(r => {
        if (r.value === valorRadio) {
            r.checked = true;
            materiaSelecionada = r.value;
        }
    });
}
```

⚠️ **Armadilha comum**  
Esquecer que `localStorage` armazena **apenas strings** → sempre usar `JSON.stringify` / `JSON.parse`

## 7️⃣ Manipulação Dinâmica de HTML e CSS via JS

```js
// Mostrar container oculto
hiddenContainer.style.display = "block";

// Criar botão dinamicamente
const resetar = document.createElement("button");
resetar.textContent = "reload";
resetar.classList.add("resetar");
resetar.onclick = () => location.reload();

hiddenContainer.appendChild(resetar);
```

**Alternativas mais modernas (recomendadas em projetos maiores)**

```js
// Toggle de classe
hiddenContainer.classList.remove("hidden");  // supondo .hidden { display: none; }

// Ou com template literal + innerHTML (cuidado com XSS)
hiddenContainer.innerHTML += `<button class="resetar">reload</button>`;
```

## Cheat-sheet Rápido – DOM + Form + LocalStorage

```js
// Seleção
const el     = document.getElementById("id");
const lista  = document.querySelectorAll(".classe");
const unico  = document.querySelector(".classe");

// Eventos
el.addEventListener("click",      fn);
form.addEventListener("submit",   e => { e.preventDefault(); ... });
input.addEventListener("input",   e => console.log(e.target.value));
radio.addEventListener("change",  () => { ... });

// LocalStorage
localStorage.setItem("chave", JSON.stringify(obj));
const salvo = JSON.parse(localStorage.getItem("chave"));

// Manipulação
elemento.textContent = "novo texto";
elemento.style.display = "block";          // ou "none"
elemento.classList.add("ativo");
elemento.classList.toggle("escondido");

// Criação dinâmica
const btn = document.createElement("button");
btn.textContent = "Clique";
btn.onclick = () => location.reload();
pai.appendChild(btn);
```

**Boas práticas destacadas**
- Sempre `event.preventDefault()` em formulários SPA
- Usar `trim()` em valores de input
- Guardar estado em variável em vez de reler o DOM repetidamente
- Evitar `innerHTML` com conteúdo do usuário (risco XSS)
- Testar comportamento sem JavaScript (form deve continuar útil)