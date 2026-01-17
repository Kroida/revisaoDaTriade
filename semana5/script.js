// ========== Declarando variável ==========
let variavel = "eludelu";
console.log(variavel);

// ========== Declarando constante ==========
const constante = "elxdelx";
console.log(constante);

// ========== Tipos de dados ==========
// String
let color = "Yellow";
let lastName = "Johnson";

// Number
let length = 16;
let weight = 7.5;

// BigInt
let bg1 = 1234567890123456789012345n;
let bg2 = BigInt(1234567890123456789012345)

// Boolean
let vdd = true;
let fls = false;

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
let und1;
let und2;

// Null
let nl1 = null;
let nl2 = null;

// Symbol
const s1 = Symbol();
const s2 = Symbol();

// ========== Operadores aritméticos ==========

let a = 10;
let b = 3;

// Exemplos básicos
console.log(a + b);     // 13     (adição)
console.log(a - b);     // 7      (subtração)
console.log(a * b);     // 30     (multiplicação)
console.log(a / b);     // 3.333... (divisão)
console.log(a % b);     // 1      (resto da divisão - módulo)
console.log(a ** b);    // 1000   (exponenciação = 10³)

// Incremento e decremento
let x = 5;
x++;                    // x agora é 6 (pós-incremento)
console.log(x);         // 6

let y = 5;
++y;                    // y agora é 6 (pré-incremento)
console.log(y);         // 6

let z = 10;
z--;                    // z agora é 9
console.log(z);         // 9

// Concatenação com +
let texto = "Idade: " + 25;  
console.log(texto);     // "Idade: 25"

// ========== Operadores com atribuição ==========

let num = 10;

// Atribuição simples
num = 20;
console.log(num);       // 20

// Composto (aritmético + atribuição)
num += 5;               // num = num + 5 → 25
console.log(num);

num -= 3;               // num = num - 3 → 22
console.log(num);

num *= 2;               // num = num * 2 → 44
console.log(num);

num /= 4;               // num = num / 4 → 11
console.log(num);

num %= 3;               // num = num % 3 → 2
console.log(num);

num **= 3;              // num = num ** 3 → 8
console.log(num);

// ========== Operadores Lógicos ==========

let idade = 20;
let temCarteira = true;
let estaChovendo = false;

// &&  → AND (E) - verdadeiro só se AMBOS forem verdadeiros
console.log(idade >= 18 && temCarteira);       // true  (pode dirigir?)
console.log(idade >= 18 && estaChovendo);      // false

// ||  → OR (OU) - verdadeiro se PELO MENOS UM for verdadeiro
console.log(idade < 18 || temCarteira);        // true
console.log(idade < 18 || estaChovendo);       // false

// !   → NOT (NÃO) - inverte o valor
console.log(!temCarteira);                     // false
console.log(!estaChovendo);                    // true  (não está chovendo)

// Exemplos combinados
let podeEntrar = (idade >= 18 && temCarteira) || (idade >= 16 && !estaChovendo);
console.log(podeEntrar);                       // true

// Curto-circuito (muito usado)
let nome = "";
let usuario = nome || "Visitante";             // "Visitante" (porque "" é falsy)
console.log(usuario);

// Com valores não-booleanos
let valor = 0;
console.log(valor && "alguma coisa");          // 0     (para no primeiro falsy)
console.log(valor || "alguma coisa");          // "alguma coisa" (usa o segundo se primeiro falsy)

// ========== If e Else ==========

if (idade > 18){
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// ========== For e While ==========

for (let i = 0; i < 10; i++) {
    console.log("#".repeat(i));
}

let condicao = 10

while (condicao != 0) {
    console.log(condicao);
    condicao--;
}

// ========== Functions e Arrow Function ==========

function sayHello() {
  return console.log("Hello World");
}

sayHello();

function multiply(a, b) {
  return console.log(a * b);
}

multiply(10, 2);

// You can skip the function keyword, the return keyword, and the curly brackets

let myFunction = (a, b) => console.log(a * b);

let hello = () => console.log("Hell Yeah!");

myFunction(5,3);
hello();