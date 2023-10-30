<?php 

    $nome = addslashes($_POST['Nome']);
    $email = addslashes($_POST['Email']);
    $telefone = addslashes($_POST['Telefone']);
    $mensagem = addslashes($_POST['Mensagem']);

    $meu_email = 'joaomoreiraalves9@gmail.com';
    $assunto = "Mensagem - Site Portifólio";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Telefone: ".$telefone."\n\n"."Mensagem: ".$mensagem;

    $cabeca = "From: joaovitorojhhio12@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if (mail($meu_email,$assunto,$corpo,$cabeca)){
        echo("E-mail Enviado com Sucesso!");
    }else{
        echo("Falha no envio do E-mail! Por favor tente novamente ou entre em contato por outra rede social!");
    }
?>