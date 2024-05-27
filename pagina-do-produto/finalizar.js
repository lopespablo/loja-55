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
    } else {
        document.getElementById('product-detail').innerHTML = '<p>Produto não encontrado.</p>';
    }
}

window.onload = displayProductDetails;
    
    
    
    



