$(document).ready(function() {
    $('button').click(function(e) {
        e.preventDefault();

        const task = $('#tarefa').val(); // Pega o valor da tarefa
        if (task) { // Verifica se o campo de tarefa não está vazio
            const tarefa = $('<li></li>').text(task); // Cria um novo item de lista com o texto da tarefa

            const tarefaCount = $('#lista-tarefas li').length;
            if (tarefaCount % 2 === 0) {
                tarefa.css('background-color', '#ecc656'); // Exemplo de cor clara para o fundo
            }else{
                tarefa.css('background-color', '#f8efcf'); // Exemplo de cor clara para o fundo

            }

            $('#lista-tarefas').append(tarefa); // Adiciona o item à lista de tarefas
            $('#tarefa').val(''); // Limpa o campo de entrada

            tarefa.on('click', function() {
                $(this).toggleClass('line-through');
            });

        }
    });
});
