## 1️⃣ Declaração de Variáveis

| Forma       | Palavra-chave | Escopo                  | Reatribuição | Uso típico                              | Observação importante                          |
|-------------|---------------|-------------------------|--------------|-----------------------------------------|------------------------------------------------|
| Variável    | `let`         | Bloco                   | Sim          | Valores que mudam                       | Preferencial desde ES6                         |
| Constante   | `const`       | Bloco                   | Não          | Valores fixos, referências imutáveis    | Não impede mutação de objetos/arrays          |
| (antigo)    | `var`         | Função ou global        | Sim          | Evitar                                  | Hoisting + problemas de escopo                 |

📌 **Boa prática moderna**  
Use `const` por padrão → mude para `let` apenas quando precisar reatribuir.

## 2️⃣ Tipos de Dados Primitivos e Estruturados

| Tipo          | Exemplo no código                                  | typeof retorna     | Imutável? | Falsy values comuns                     |
|---------------|----------------------------------------------------|--------------------|-----------|------------------------------------------|
| String        | `"Yellow"`, `"Johnson"`                            | `"string"`         | Sim       | `""` (string vazia)                      |
| Number        | `16`, `7.5`                                        | `"number"`         | Sim       | `0`, `NaN`                               |
| BigInt        | `1234567890123456789012345n`, `BigInt(...)`        | `"bigint"`         | Sim       | —                                        |
| Boolean       | `true`, `false`                                    | `"boolean"`        | Sim       | `false`                                  |
| undefined     | `let und1;`                                        | `"undefined"`      | —         | `undefined`                              |
| null          | `let nl1 = null;`                                  | `"object"` (bug histórico) | —     | `null`                                   |
| Symbol        | `Symbol()`                                         | `"symbol"`         | Sim       | —                                        |

**Estruturas não-primitivas (referência)**

- **Object** → `{ firstName: "John", lastName: "Doe" }`
- **Array**  → `["Saab", "Volvo", "BMW"]` (é um objeto especial)
- **Date**   → `new Date("2022-03-25")`

🧠 **Dica importante** — Primitivos são passados **por valor**. Objetos/arrays são passados **por referência**.

## 3️⃣ Operadores Aritméticos

| Operador | Nome                  | Exemplo     | Resultado     | Observação                               |
|----------|-----------------------|-------------|---------------|------------------------------------------|
| `+`      | Adição / Concatenação | `10 + 3`    | `13`          | `"Idade: " + 25` → `"Idade: 25"`         |
| `-`      | Subtração             | `10 - 3`    | `7`           | —                                        |
| `*`      | Multiplicação         | `10 * 3`    | `30`          | —                                        |
| `/`      | Divisão               | `10 / 3`    | `3.333...`    | —                                        |
| `%`      | Resto (módulo)        | `10 % 3`    | `1`           | Muito usado em ciclos / paridade         |
| `**`     | Exponenciação         | `10 ** 3`   | `1000`        | ES2016+                                  |

**Incremento / Decremento**

- `x++` → pós-incremento (usa valor atual, depois incrementa)
- `++x` → pré-incremento (incrementa primeiro, depois usa)
- Mesma lógica para `--`

## 4️⃣ Operadores de Atribuição Composta

| Operador | Equivalente            | Exemplo          |
|----------|------------------------|------------------|
| `+=`     | `a = a + b`            | `num += 5`       |
| `-=`     | `a = a - b`            | `num -= 3`       |
| `*=`     | `a = a * b`            | `num *= 2`       |
| `/=`     | `a = a / b`            | `num /= 4`       |
| `%=`     | `a = a % b`            | `num %= 3`       |
| `**=`    | `a = a ** b`           | `num **= 3`      |

## 5️⃣ Operadores Lógicos e Curto-circuito

| Operador | Nome     | Comportamento curto-circuito                                      | Uso comum                                      |
|----------|----------|--------------------------------------------------------------------|------------------------------------------------|
| `&&`     | AND      | Para se primeiro for **falsy** → retorna o primeiro               | Guarda de condição, validação                  |
| `||`     | OR       | Para se primeiro for **truthy** → retorna o primeiro              | Valor padrão / fallback                        |
| `!`      | NOT      | Inverte o valor booleano                                           | Negação                                        |

**Exemplos práticos de curto-circuito**

```js
let nome = "" || "Visitante";          // "Visitante"
let config = usuario && enviarEmail(); // só executa se usuario for truthy
let valor = 0 || "alguma coisa";       // "alguma coisa"
```

## 6️⃣ Estruturas de Controle Básicas

**if/else**

```js
if (idade > 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
```

**for** (clássico)

```js
for (let i = 0; i < 10; i++) {
    console.log("#".repeat(i));
}
```

**while**

```js
let condicao = 10;
while (condicao !== 0) {
    console.log(condicao);
    condicao--;
}
```

## 7️⃣ Funções – Declaração vs Arrow

| Estilo                  | Sintaxe                                      | `this` binding        | Ideal para                              |
|-------------------------|----------------------------------------------|------------------------|-----------------------------------------|
| Function Declaration    | `function nome() { ... }`                    | Dinâmico              | Métodos de objeto, construtores         |
| Function Expression     | `const fn = function() { ... }`              | Dinâmico              | —                                       |
| Arrow Function          | `(a,b) => ...` ou `() => ...`                | Léxico (herda do pai) | Callbacks, funções curtas, evitar `this` |

**Exemplos do material**

```js
// Clássica
function multiply(a, b) {
    return console.log(a * b);
}

// Arrow – corpo com 1 expressão (return implícito)
let myFunction = (a, b) => console.log(a * b);

// Arrow sem parâmetros
let hello = () => console.log("Hell Yeah!");
```

## Cheat-sheet Rápido – JavaScript Básico

```js
// Variáveis
const fixa = 100;
let mutavel = "texto";

// Tipos primitivos
let str = "abc", num = 42, big = 999n, bool = true;
let nulo = null, indefinido = undefined;
let simbolo = Symbol("id");

// Operadores úteis
x ** 3;           // potência
x % 2 === 0;      // par?
++contador;       // pré-incremento
valor || "padrão"; // fallback
cond && fazerAlgo(); // guarda

// Curto-circuito comum
const nome = input.value.trim() || "Anônimo";

// Arrow function
const soma = (a, b) => a + b;
const log = msg => console.log(msg);
```