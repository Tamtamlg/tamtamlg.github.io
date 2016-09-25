<?php
$post = (!empty($_POST)) ? true : false;
if($post) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$error = '';
	if(!$error) {
		$address = "tamtamlg@gmail.com";
		$mes = "Имя: ".$name."\n\nСообщение: ".$message."\n\n";
		$send = mail ($address,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
		if($send) {echo 'OK';}
	}
	else {echo '<div class="err">'.$error.'</div>';}
}
?>
