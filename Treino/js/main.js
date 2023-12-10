
    // Função para ser executada quando o botão é clicado
    function acaoBotao() {
        // Selecione o elemento onde o resultado será exibido
        
            var resultado = document.getElementById('resultado');

            // Altere o conteúdo desse elemento
           resultado.innerHTML = 'Você clicou no botão!';
        } 


    // Selecione o botão {
    var botao = document.getElementById('meuBotao');

    // Adicione um ouvinte de evento para o botão
    botao.addEventListener('click', acaoBotao);

