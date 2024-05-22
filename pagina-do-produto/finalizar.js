const products = [
    { id: 1, ref:1234, name: "Camiseta", price: 49.99, image: "https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261749-2.jpg?w=800&h=800&v=202405021042&qs=ignoreimages/camiseta.jpg", description: "Uma linda camiseta.", otherImages: ["https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261751-3.jpg?w=605&h=605&v=202405021042&qs=ignore", "https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261751-4.jpg?w=605&h=605&v=202405021042&qs=ignore", "https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261751-5.jpg?w=605&h=605&v=202405021042&qs=ignore"] },

    { id: 2, ref:1234, name: "Calça Jeans", price: 89.99, image: "https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261749-2.jpg?w=800&h=800&v=202405021042&qs=ignore", description: "Calça jeans de alta qualidade.", otherImages: ["https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261751-3.jpg?w=605&h=605&v=202405021042&qs=ignore", "https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261751-4.jpg?w=605&h=605&v=202405021042&qs=ignore", "https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261751-5.jpg?w=605&h=605&v=202405021042&qs=ignore"] },

    { id: 3, ref:1234, name: "Tênis", price: 129.99, image: "https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261749-2.jpg?w=800&h=800&v=202405021042&qs=ignore", description: "Tênis confortável para o dia a dia.", otherImages: ["https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261751-3.jpg?w=605&h=605&v=202405021042&qs=ignore", "https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261751-4.jpg?w=605&h=605&v=202405021042&qs=ignore", "https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261751-5.jpg?w=605&h=605&v=202405021042&qs=ignore"] },

    { id: 4, ref:1234, name: "Camisa Kinbo", price: 189.99, image: "https://thugnine.fbitsstatic.net/img/p/camiseta-kimbo-70679/260536-1.jpg?w=1500&h=1500&v=no-value", description: "Camisa confortável para o dia a dia.", otherImages: ["https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261751-3.jpg?w=605&h=605&v=202405021042&qs=ignore", "https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261751-4.jpg?w=605&h=605&v=202405021042&qs=ignore", "https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261751-5.jpg?w=605&h=605&v=202405021042&qs=ignore"] },
];

function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

function displayProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = getProductById(productId);

    if (product) {
        document.getElementById('nome-produto').textContent = product.name;
        document.getElementById('ref-produto').textContent = `ref: ${product.ref}`;
        document.getElementById('valor-produto').textContent = `R$ ${product.price.toFixed(2)}`;

        const productDetail = document.getElementById('ft-principal');
        productDetail.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
        `;

        const outrasimagens = document.getElementById('outras-imagens');
        outrasimagens.innerHTML = ''; // Limpa quaisquer imagens existentes
        product.otherImages.forEach((imgSrc, index) => {
            const listItem = document.createElement('li');
            listItem.id = `ft${index + 1}`;
            listItem.className = 'fts';
            listItem.innerHTML = `<img src="${imgSrc}" alt="${product.name} foto ${index + 1}">`;
            outrasimagens.appendChild(listItem);
        });
    } else {
        document.getElementById('product-detail').innerHTML = '<p>Produto não encontrado.</p>';
    }
}

window.onload = displayProductDetails;

// enviar msg
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



    // SELECIONAR TAMANHO
var tms = document.querySelectorAll('.tms');

tms.forEach(sele => {
    sele.addEventListener('click', function() {
        if (this.style.backgroundColor === 'black') {
            // Retorna ao estado original
            this.style.backgroundColor = 'white';
            this.style.color = 'black';
        } else {
            // Altera para o estado clicado
            this.style.backgroundColor = 'black';
            this.style.color = 'white';
        }
    });
});
    // SELECIONAR TAMANHO



