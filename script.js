document.addEventListener('DOMContentLoaded', function () {
    let slideCounter = 1;

    // Ouvinte de eventos para os botões de rádio
    document.querySelectorAll('.input').forEach(function (radio) {
        radio.addEventListener('change', function () {
            updateLabelStyles(); // Atualiza os estilos dos labels quando um botão de rádio é clicado manualmente
            updateRespostaVisibility(); // Mostra ou esconde a resposta com base na seleção
        });
    });

    setInterval(function () {
        document.getElementById("radio" + slideCounter).checked = true;
        updateLabelStyles(); // Chamando a função para atualizar os estilos dos labels
        slideCounter++;

        if (slideCounter > 8) {
            slideCounter = 1;
        }
    }, 2500);

    // Função para atualizar os estilos dos labels
    function updateLabelStyles() {
        for (let i = 1; i <= 8; i++) {
            const label = document.querySelector(`.manual-btn.radio${i}`);
            const radio = document.querySelector(`#radio${i}`);

            label.classList.remove("checked"); // Remove a classe "checked" de todos os labels
            if (radio.checked) {
                label.classList.add("checked");
            }
        }
    }

    // Função para mostrar ou esconder a resposta com base na seleção
    function updateRespostaVisibility() {
        const simPedido = document.getElementById("sim-pedido");
        const respostaAceitou = document.querySelector(".resposta .aceitou");
        const respostaRejeitou = document.querySelector(".resposta .rejeitou");

        if (simPedido.checked) {
            respostaAceitou.style.transform = "translateX(0)";
            respostaRejeitou.style.transform = "translateX(320px)";
        } else {
            respostaAceitou.style.transform = "translateX(-320px)";
            respostaRejeitou.style.transform = "translateX(0)";
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Ouvinte de eventos para os botões de rádio
    document.querySelector('#sim-pedido').addEventListener('change', function () {
        const iframeAceitou = document.querySelector('#iframe-aceitou');
        const iframeRejeitou = document.querySelector('#iframe-rejeitou');
        
        iframeAceitou.style.marginLeft = '640px';
        iframeAceitou.style.transition = '.8s';
        iframeRejeitou.style.marginLeft = '0';
    });

    document.querySelector('.não').addEventListener('change', function () {
        const iframeAceitou = document.querySelector('#iframe-aceitou');
        const iframeRejeitou = document.querySelector('#iframe-rejeitou');
    
        iframeAceitou.style.marginLeft = '-640px';
        iframeRejeitou.style.marginLeft = '-320px';
        iframeAceitou.style.transition = '.8s';
        iframeRejeitou.style.transition = '.8s';
    });
});
