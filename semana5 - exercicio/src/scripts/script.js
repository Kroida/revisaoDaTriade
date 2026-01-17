const input = document.getElementById("entrada");
const input2 = document.getElementById("entrada2");
const botao = document.getElementById("botao");
const aparecer = document.getElementById("aparecer");

botao.addEventListener("click", () => {
    const mensagem = input.value;
    const mensagem2 = input2.value;

    aparecer.innerHTML = "";

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