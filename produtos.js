const products = [
    {
        id:1,
        name: "Camiseta",
        price: 49.99,
        valor: '4x de 19,99',
        image: "https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261749-2.jpg?w=800&h=800&v=202405021042&qs=ignore"
    },
    {
        id:2,
        name: "Calça Jeans",
        price: 89.99,
        valor: '4x de 19,99',
        image: "https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261749-2.jpg?w=800&h=800&v=202405021042&qs=ignore"
    },
    {
        id:3,
        name: "Tênis",
        price: 129.99,
        valor: '4x de 19,99',
        image: "https://thugnine.fbitsstatic.net/img/p/camiseta-the-bite-70920/261749-2.jpg?w=800&h=800&v=202405021042&qs=ignore"
    },
    {
        id:4,
        name: "Camiseta Kinbo",
        price: 189.99,
        valor: '2x de 94,99',
        image: "https://thugnine.fbitsstatic.net/img/p/camiseta-kimbo-70679/260536-1.jpg?w=1500&h=1500&v=no-value"
    },
    // Adicione mais produtos aqui
];

function displayProducts() {
    const productList = document.getElementById('lista-produtos');
    products.forEach(product => {
        const productDiv = document.createElement('li');
        productDiv.className = '.produtos';
        
        productDiv.innerHTML = `
        <a href="pagina-do-produto/paginafinal.html?id=${product.id}" target="_blank">
                <img src="${product.image}" alt="${product.name}">
                <h1 id="nome-p">${product.name}</h1>
                <p id="valor">R$ ${product.price}</p>
                <p id="valo-p">${product.valor}</p>
        </a>
        `;
        
        productList.appendChild(productDiv);
    });
}

window.onload = displayProducts;