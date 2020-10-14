<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: DELETE, POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$cellphone = $_POST['cellphone'];
$category = $_POST['category'];
$nominee = $_POST['nominee'];

if(!is_numeric($cellphone) || strlen ($cellphone) !== 8 ){
	echo "Wrong Cellphone Number";
} else if(strlen ($nominee) < 3 ){
	echo "Check Your Nominee";
}
else {
	echo "Succefully Nominated ".$nominee;
}


?>