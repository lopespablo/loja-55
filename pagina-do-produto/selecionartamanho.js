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