<?php 
if( $_REQUEST["name"] )
{
   $name = $_REQUEST['name'];
   $mail = $_REQUEST['email'];
   $message = $_REQUEST['message'];
   $data = date("F j, Y, g:i a"); 
   $header = "From: geral@ssantos.pt\r\n";
   $header.= "MIME-Version: 1.0\r\n";
   $header.= "Content-Type: text/html; charset=ISO-8859-1\r\n";
   $header.= "X-Priority: 1\r\n";
   mail($mail,"Contacto ssantos.pt","Obrigado pelo seu contacto ".$name,$header);
   mail("silviodanielpt@gmail.com","Novo Contacto","Recebes-te um contacto de: ".$name."<br>E-mail: ".$mail."<br>Com a seguinte mensagem:<br>".$message,$header);
   echo "Mensagem enviada com sucesso.";
}
?>