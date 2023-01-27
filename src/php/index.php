<?php
$name = $_POST['user_name'];
$email = $_POST['email'];
$request = $_POST['request'];
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$name = urldecode($name);
$name = trim($name);
$email = trim($email);

$message =  "Name: ".$name.". Email.: ".$email.". Request: ".$request;

if(mail("vyssotskaya.yulia@gmail.com", "Заявка с сайта", $message,"From: admin@bubnova-psy.ru \r\n")){
    echo "Сообщение успешно отправлено";
}
else{
    echo "Произошла ошибка!";
}