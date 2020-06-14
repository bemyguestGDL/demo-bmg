<?php

if(isset($_POST['btn'])){
    $nombre = $_POST['nombre'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];
    $menu = $_POST['menu'];
    $bebida = $_POST['bebida'];

    $header = 'From:' . $email . " \r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";

    $mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
    $mensaje .= "Su email es: " . $email . " \r\n";
    $mensaje .= "Menú: " . $menu[0] . " \r\n";
    $mensaje .= "Bebida: " . $bebida[0] . " \r\n";

    $para = 'rene.barrera1022@gmail.com';
    $asunto = 'Be my guest: confirmación de asistencia';

    mail($para, $asunto, utf8_decode($mensaje), $header);
    header('Location:../index.html');
}