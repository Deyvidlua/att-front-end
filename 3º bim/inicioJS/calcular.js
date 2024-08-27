var gasolina, etanol;

function melhor() {
    etanol = parseFloat(frdados.txetanol.value.replace(",", "."));
    gasolina = parseFloat(frdados.txgasolina.value.replace(",", "."));
    if (etanol < 0.7 * gasolina) {
        document.getElementById("imagem").src = "/3º bim/inicioJS/imagens/etanol.jpg";
    }
    else {
        document.getElementById("imagem").src = "/3º bim/inicioJS/imagens/gaso.jpg";
    }

}
function limpar() {
    document.getElementById("imagem").src = "/3º bim/inicioJS/imagens/meio.jpg";
}