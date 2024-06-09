// Ativar Links do menu
const links = document.querySelectorAll('.header-menu a');
function ativarLink(link) {
    const url = location.href;  //localização atual
    const href = link.href;

    if(url.includes(href)) {
        // console.log("sim");
        link.classList.add("ativo");
    }
}
links.forEach(ativarLink)

// Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if(elemento) {
        elemento.checked = true;
        console.log(elemento);
    }
}
parametros.forEach(ativarProduto);