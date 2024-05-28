
const products = [
    { id: 1, ref: 1234, name: "Camiseta", price: 49.99, image: "https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261749-2.jpg?w=800&h=800&v=202405021042&qs=ignoreimages/camiseta.jpg", description: "Uma linda camiseta.", otherImages: ["https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261751-3.jpg?w=605&h=605&v=202405021042&qs=ignore", "https://thugnine.fbitsstatic.net/img/p/c/camiseta-the-bite-70920/261751-4.jpg?w=605&h=605&v=202405021042&qs=ignore", "https://thugnine.fbitsstatic.net/img/p/c/camiseta-the-bite-70920/261751-5.jpg?w=605&h=605&v=202405021042&qs=ignore"], sizes: ["P", "M", "G"], cor:'blue'},

    { id: 2, ref: 1235, name: "Calça Jeans", price: 89.99, image: "https://thugnine.fbitsstatic.net/img/p/c/camiseta-the-bite-70920/261749-2.jpg?w=800&h=800&v=202405021042&qs=ignore", description: "Calça jeans de alta qualidade.", otherImages: ["https://thugnine.fbitsstatic.net/img/p/c/camiseta-the-bite-70920/261751-3.jpg?w=605&h=605&v=202405021042&qs=ignore", "https://thugnine.fbitsstatic.net/img/p/c/camiseta-the-bite-70920/261751-4.jpg?w=605&h=605&v=202405021042&qs=ignore", "https://thugnine.fbitsstatic.net/img/p/c/camiseta-the-bite-70920/261751-5.jpg?w=605&h=605&v=202405021042&qs=ignore"], sizes: ["M", "G", "GG"], cor:'black'},

    { id: 3, ref: 1236, name: "Tênis", price: 129.99, image: "https://thugnine.fbitsstatic.net/img/p/c/camiseta-the-bite-70920/261749-2.jpg?w=800&h=800&v=202405021042&qs=ignore", description: "Tênis confortável para o dia a dia.", otherImages: ["https://thugnine.fbitsstatic.net/img/p/c/camiseta-the-bite-70920/261751-3.jpg?w=605&h=605&v=202405021042&qs=ignore", "https://thugnine.fbitsstatic.net/img/p/c/camiseta-the-bite-70920/261751-4.jpg?w=605&h=605&v=202405021042&qs=ignore", "https://thugnine.fbitsstatic.net/img/p/c/camiseta-the-bite-70920/261751-5.jpg?w=605&h=605&v=202405021042&qs=ignore"], sizes: ["P", "M", "G", "GG"], cor:'white' },

    { id: 4, ref: 1237, name: "Camisa Kinbo", price: 189.99, image: "https://thugnine.fbitsstatic.net/img/p/c/camiseta-kimbo-70679/260536-1.jpg?w=1500&h=1500&v=no-value", description: "Camisa confortável para o dia a dia.", otherImages: ["https://thugnine.fbitsstatic.net/img/p/c/camiseta-the-bite-70920/261751-3.jpg?w=605&h=605&v=202405021042&qs=ignore", "https://thugnine.fbitsstatic.net/img/p/c/camiseta-the-bite-70920/261751-4.jpg?w=605&h=605&v=202405021042&qs=ignore", "https://thugnine.fbitsstatic.net/img/p/c/camiseta-the-bite-70920/261751-5.jpg?w=605&h=605&v=202405021042&qs=ignore"], sizes: ["M", "GG", "GGG"], cor:'black' }
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
        productDetail.innerHTML = `<img src="${product.image}" alt="${product.name}">`;

        const outrasimagens = document.getElementById('outras-imagens');
        outrasimagens.innerHTML = ''; // Limpa quaisquer imagens existentes
        product.otherImages.forEach((imgSrc, index) => {
            const listItem = document.createElement('li');
            listItem.id = `ft${index + 1}`;
            listItem.className = 'fts';
            listItem.innerHTML = `<img src="${imgSrc}" alt="${product.name} foto ${index + 1}">`;
            outrasimagens.appendChild(listItem);
        });

        // Adiciona a funcionalidade de navegação
        let currentIndex = 0;
        const totalImages = product.otherImages.length;
        const mainImage = document.querySelector('#ft-principal img');

        document.getElementById('prev-btn').addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
            mainImage.src = product.otherImages[currentIndex];
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
            mainImage.src = product.otherImages[currentIndex];
        });

        // Exibir tamanhos disponíveis
        const sizeBox = document.querySelector('.tm-box');
        sizeBox.innerHTML = ''; // Limpa tamanhos existentes
        product.sizes.forEach(size => {
            const sizeDiv = document.createElement('div');
            sizeDiv.className = 'tms';
            sizeDiv.setAttribute('onclick', 'selecionarTamanho(this)');
            sizeDiv.innerHTML = `<p>${size}</p>`;
            sizeBox.appendChild(sizeDiv);
        });

        // Adicionar event listeners após a criação dos elementos
        const tms = document.querySelectorAll('.tms');
        tms.forEach(sele => {
            sele.addEventListener('click', function () {
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

        // EXIBIR COR DO PRODUTO
        const cor = document.getElementById('cor');

        if (product.cor.toLowerCase().length > 0) {
             // Altera o estilo para indicar a cor disponível
            cor.style.backgroundColor = product.cor;
        }


    } else {
        document.getElementById('product-detail').innerHTML = '<p>Produto não encontrado.</p>';
    }
}

window.onload = displayProductDetails;


    
    
    
    



