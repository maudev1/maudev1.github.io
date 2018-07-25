$(function($){

    $("form").submit(function(envent){
        event.preventDefault();
        
        $.ajax({
            url: "https://formspree.io/mauriciojr.dev@gmail.com",
            method: "POST",
            data: { 
                name: $("#name").val(),
                email: $("#email").val(),
                message: $("#message!").val()
            
        },
        dataType: "json"
    }).done(function(){
        $("#name").val();
        $("#email").val();
        $("#message").val();
        alert('Menssagem enviada com sucesso!')

    }).fail(function(){
        alert('Erro ao enviar menssagem')

    
    });
    });
});

