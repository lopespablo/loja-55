    // BARRA DE PESQUISA
    function digitar() {
        var NomeDigitado = document.getElementById('brpesquisa').value.toLowerCase();
        var produtos = document.querySelectorAll('.produtos li');
        
        produtos.forEach((el) => {
            var NomesProdutos = el.querySelector('h1').textContent.trim().toLowerCase();
            if (NomeDigitado === '' || NomesProdutos.includes(NomeDigitado)) {
                el.style.display = 'block'; // Mostra os itens que correspondem à pesquisa ou todos se a pesquisa estiver vazia
            } else {
                el.style.display = 'none'; // Oculta os itens que não correspondem à pesquisa
            }
        });
    }
        // BARRA DE PESQUISA
    
    
        // BARRA DE PEQUISA ITEMS
    document.addEventListener('DOMContentLoaded', function () {
        var nomesItems = document.querySelectorAll('.nomesitems li');
    
        nomesItems.forEach(function (item) {
            item.addEventListener('click', function () {
                var nomeItem = item.querySelector('p').textContent.toLowerCase();
                document.getElementById('brpesquisa').value = nomeItem;
                digitar(); // Chama a função de pesquisa para filtrar os produtos com base no novo valor da barra de pesquisa
            });
        });
    });
        // BARRA DE PEQUISA ITEMS