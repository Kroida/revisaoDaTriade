// script.js
document.addEventListener("DOMContentLoaded", () => {

    // ===== 1. ELEMENTOS DO DOM =====
    const entrada = document.getElementById("entryValue");
    const radios = document.querySelectorAll('input[name="eRadio"]');
    const botao = document.getElementById("submitValue");
    const pNome = document.getElementById("pNome");
    const pRadio = document.getElementById("pRadio");
    const hiddenContainer = document.querySelector(".hiddenContainer");

    let materiaSelecionada = "";

    // ===== 2. RECUPERA DADOS DO LOCALSTORAGE =====
    const dadosSalvos = localStorage.getItem("cadastro");
    
    if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);
        entrada.value = dados.nome;
        let valorRadio = "";
        if (dados.materia === "Front-End") valorRadio = "FrontEnd";
        if (dados.materia === "Back-End") valorRadio = "BackEnd";
        if (dados.materia === "Full-Stack") valorRadio = "FullStack";
        radios.forEach(radio => {
            if (radio.value === valorRadio) {
                radio.checked = true;
                materiaSelecionada = radio.value;
            }
        });
    }

    // ===== 3. CONTROLE DOS RADIOS =====
    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            materiaSelecionada = radio.value;
        });
    });

    // ===== 4. BOTÃO SUBMIT =====
    botao.addEventListener("click", (event) => {
        event.preventDefault();

        const nome = entrada.value.trim();

        let textoMateria = materiaSelecionada;
        if (materiaSelecionada === "FrontEnd") textoMateria = "Front-End";
        if (materiaSelecionada === "BackEnd") textoMateria = "Back-End";
        if (materiaSelecionada === "FullStack") textoMateria = "Full-Stack";

        pNome.textContent = nome;
        pRadio.textContent = textoMateria;
        hiddenContainer.style.display = "block";

        // ===== 5. SALVA NO LOCALSTORAGE =====
        const dadosS = {
            nome: nome,
            materia: textoMateria
        };

        localStorage.setItem("cadastro", JSON.stringify(dadosS));

        // ===== 6. BOTÃO RELOAD =====
        const resetar = document.createElement("button");
        resetar.textContent = "reload";
        resetar.classList.add("resetar");
        resetar.onclick = () => location.reload();
        hiddenContainer.appendChild(resetar);
    });
});