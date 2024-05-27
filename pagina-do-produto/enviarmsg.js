// Código adicional para enviar mensagem e selecionar tamanhos
document.querySelectorAll('.tms').forEach(function(div) {
    div.addEventListener('click', function() {
        this.classList.toggle('selecionado');
    });
});

function enviarmsg() {
    var camisasSelecionadas = [];
    var informacoes = document.querySelector('.informacoes');
    var camisa = informacoes.querySelector('h1').textContent;
    var referencia = informacoes.querySelector('h2').textContent;
    var tamanhosSelecionados = document.querySelectorAll('.tms.selecionado p');

    tamanhosSelecionados.forEach(function(tam) {
        var tamanho = tam.textContent;
        camisasSelecionadas.push(camisa + ' (Ref: ' + referencia + ') ' + 'Tamanho: ' + tamanho);
    });

    var mensagem = "Olá! Estou interessado nas seguintes roupas: " + camisasSelecionadas.join(", ");
    var numeroWhatsApp = "24999161001";
    var linkWhatsApp = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensagem);

    window.open(linkWhatsApp);
}
