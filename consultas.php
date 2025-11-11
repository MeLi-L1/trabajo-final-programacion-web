<?php 
$host="sql105.infinityfree.com";
$usuario="if0_40161339";
$clave="09fFpoLXVuJWYv";
$base="if0_40161339_final_web";

//conexion.
$conexion=mysqli_connect("$host","$usuario","$clave","$base");

//verificar la conexion.
if(!$conexion){
die('ERROR DE CONEXION AL HOSTING.'.mysqli_connect_error());

}


if($conexion->connect_error){
    die("Error en la conexion".$conexion->connect_error);
}


$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$sql="INSERT INTO contactos (nombre, email, mensaje) VALUES('$nombre', '$email', '$mensaje')";

if($conexion->query($sql)===TRUE){
    echo"El contacto fue agregado";}
else{
    echo"Error en la carga ".$conexion->error;
};
$conexion->close();
?>
