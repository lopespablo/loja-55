const products = [
    {
        id:1,
        ref:115298,
        sizes: ["GG", "GGG",],
        cor: 'black',
        name: "Camiseta High",
        price: 89.99,
        valor: '1x de 89,99',
        image: "https://images.tcdn.com.br/img/img_prod/871975/camiseta_manga_longa_high_company_jurassic_black_ls105_02_4169_1_0d210cb29026179590c93907e93c446b.jpg",
        otherImages: ["https://images.tcdn.com.br/img/img_prod/871975/camiseta_manga_longa_high_company_jurassic_black_ls105_02_4169_3_50d547bd214c7f73f05b8d9be20809e5.jpg",
    
        "https://images.tcdn.com.br/img/img_prod/871975/camiseta_manga_longa_high_company_jurassic_black_ls105_02_4169_2_b0e98790554dcf567e48c300787bc651.jpg",
    
        "https://images.tcdn.com.br/img/img_prod/871975/camiseta_manga_longa_high_company_jurassic_black_ls105_02_4169_1_0d210cb29026179590c93907e93c446b.jpg"],
        description: "Camiseta manga longa 100% algodão, estampa em silk na frente - REVENDEDOR OFICIAL HIGH COMPANY.",
    },
    {
        id:2,
        ref:119991,
        sizes: ["G", "GG",],
        cor: 'black',
        name: "Camiseta Adidas",
        price: 79.99,
        valor: '1x de 79,99',
        image: "https://marketplace.bancointer.com.br/ecommerce/catalog/images/trilhaesportes/H06642105G/trilhaesportes-H06642105G-2370165256-3846749895.png",
        otherImages: ["https://marketplace.bancointer.com.br/ecommerce/catalog/images/trilhaesportes/H06642105G/trilhaesportes-H06642105G-4059801315-4214522893.png",
    
        "https://marketplace.bancointer.com.br/ecommerce/catalog/images/trilhaesportes/H06642105G/trilhaesportes-H06642105G-2746699165-248757851.png",
    
        "https://marketplace.bancointer.com.br/ecommerce/catalog/images/trilhaesportes/H06642105G/trilhaesportes-H06642105G-2370165256-3846749895.png"],
    },
    {
        id:3,
        ref:113637,
        sizes: ["GGG",],
        cor: 'black',
        name: "Camiseta Puma",
        price: 79.90,
        valor: '1x de 79,99',
        image: "https://www.mundodasbotas.com.br/cdn/imagens/produtos/det/camiseta-puma-neymar-jr-casuals-tee-masculina-03db2b56e7b2c6382da5e21c602fe924.jpg",
        otherImages: ["https://a-static.mlcdn.com.br/800x560/camiseta-puma-neymar-jr-goal-casuals-masculina/courovestsport/1047338-1047362/0837ba7780551cec8a79215b8530f07b.jpeg",
    
        "https://static.netshoes.com.br/produtos/camiseta-puma-neymar-jr-goal-casuals-masculina/06/2I3-4162-006/2I3-4162-006_zoom1.jpg?ts=1695701138&ims=544x",
    
        "https://www.mundodasbotas.com.br/cdn/imagens/produtos/det/camiseta-puma-neymar-jr-casuals-tee-masculina-03db2b56e7b2c6382da5e21c602fe924.jpg"],
    },
    {
        id:4,
        ref:127455,
        sizes: ["M",],
        cor: 'purple',
        name: "Camiseta Baw",
        price: 139.99,
        valor: '1x de 139,99',
        image: "https://www.lojahip.com.br/images/Produtos/Site/Camiseta_Baw_Selfie_Logo_Lilas2.jpg",
        otherImages: ["https://www.lojahip.com.br/images/Produtos/Fotos/Camiseta_Baw_Selfie_Logo_Lilas.jpg",
    
        "https://www.lojahip.com.br/images/Produtos/Fotos/Camiseta_Baw_Selfie_Logo_Lilas3.jpg",
    
        "https://www.lojahip.com.br/images/Produtos/Fotos/Camiseta_Baw_Selfie_Logo_Lilas7.jpg"],
    },
    {
        id:5,
        ref:115297,
        sizes: ["G","GGG"],
        cor: 'white',
        name: "Camiseta High",
        price: 89.99,
        valor: '1x de 89,99',
        image: "https://th.bing.com/th/id/OIP.LRHQgHZeqqGLsyKeQYadvAHaHa?rs=1&pid=ImgDetMain",
        otherImages: ["https://images.tcdn.com.br/img/img_prod/690339/longsleeve_high_jurassic_white_12441_2_7e8e5a9a3bb048988977a2418490c30a.jpg",
    
        "https://th.bing.com/th/id/OIP.LRHQgHZeqqGLsyKeQYadvAHaHa?rs=1&pid=ImgDetMain",
    
        "https://th.bing.com/th/id/OIP.LRHQgHZeqqGLsyKeQYadvAHaHa?rs=1&pid=ImgDetMain"],
    },
    {
        id:6,
        ref:119672,
        sizes: ["GGG"],
        cor: 'white',
        name: "Camiseta High",
        price: 129.99,
        valor: '1x de 129,99',
        image: "https://www.copclub.com.br/cdn/shop/products/Tee_Karate_White.jpg?v=1670447373",
        otherImages: ["https://www.copclub.com.br/cdn/shop/products/Tee_Karate_White_Detail.jpg?v=1670447373",
    
        "https://th.bing.com/th/id/OIP.Dxtm5cr5URWM_b-gTczRFwHaHa?rs=1&pid=ImgDetMain",
    
        "https://www.copclub.com.br/cdn/shop/products/Tee_Karate_White.jpg?v=1670447373"],
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
                <img class="ftlistap" src="${product.image}" alt="${product.name}">
                <h1 id="nome-p">${product.name}</h1>
                <p id="valor">R$ ${product.price}</p>
                <p id="valo-p">${product.valor}</p>
        </a>
        `;
        
        productList.appendChild(productDiv);
    });
}

window.onload = displayProducts;