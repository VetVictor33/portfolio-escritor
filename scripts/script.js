const textos = document.getElementsByClassName("selected-text");

function exibe(textoSelecionado) {

    for (const texto of textos) {
        texto.classList.add("hidden")
    }

    const texto = document.getElementById(textoSelecionado)
    texto.classList.remove("hidden")
}
