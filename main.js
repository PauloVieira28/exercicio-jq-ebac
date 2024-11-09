$(document).ready(function() {
    $('button').click(function(e) {
        e.preventDefault();

        const task = $('#tarefa').val(); 
        if (task) { 
            const tarefa = $('<li></li>').text(task);

            const tarefaCount = $('#lista-tarefas li').length;
            if (tarefaCount % 2 === 0) {
                tarefa.css('background-color', '#ecc656');
            }else{
                tarefa.css('background-color', '#f8efcf');

            }

            $('#lista-tarefas').append(tarefa);
            $('#tarefa').val(''); 

            tarefa.on('click', function() {
                $(this).toggleClass('line-through');
            });

        }
    });
});
