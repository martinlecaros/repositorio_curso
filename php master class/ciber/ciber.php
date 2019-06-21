<?php
$arraynuevo = array('Raul Ruiz', 'costamagna','fellini','murakami','brossa');
$n = implode("-", $arraynuevo);

echo $n;
?>

<br><br>
<?php
$cadenatexto = "Joan:Pedro:Maria:Adolfo:Martin";
$array_nombres = explode(":", $cadenatexto);
//echo $array_nombres;
echo $array_nombres[0];
echo "<pre>";
print_r ($array_nombres);
echo "</pre>";
print_r ($array_nombres);
?>

<br><br>
<?php
$cadenatexto = "El pajaro oscuro de la noche oscuro pensabamos que estaba oscuro";
$bodytag = str_replace("oscuro", "negro", $cadenatexto);
echo $bodytag;
?>


<br><br>
<?php
$array = array('Raul Ruiz', 'costamagna','fellini','murakami','brossa');
$correo = "                 micorreo@gmail.com                      ";
echo "-".trim($correo)."-"
?>



<br><br>
<?php 
for ($i = 0; $i < count($array); $i++) {
	echo $i." - ".$array[$i]. "<br>";
}
?>



<br><br>
<?php 
for ($i = 1; $i <= 10; $i++) {
	echo $i;
}
?>

<br><br>
<?php 
foreach ($array as $elemento) {
	echo $elemento.'<span> - </span>'; 
}
?>

<br><br>
<?php echo json_encode($array); ?>

<br><br>
El director <?php echo $array[0]; ?> ha ganado el palma de oro.

<br><br>
<?php echo count($array); ?>


<br><br>
<?php $is_aprobado = true; ?>
<?php if ($is_aprobado): ?> 
Genial has superado la prueba.
<?php else: ?> 
Has suspedido.
<?php endif; ?>


<br><br>
<?php
	$nota = 4;
	if ($nota>=5) echo "Genial has superado la prueba con un: (".$nota.") sobre 10";
	else echo "Has suspedido con un: (".$nota.") sobre 10";
?>

<br><br>
<?php	$nom = "Ismael";
	echo "mi nombre es ".$nom;
	// soy un comentario
?>

<br><br>
<p>Hola, mi nombre es: <?php echo $nom; ?></p>

<br><br>
HOLA <b><?php echo "MUNDO"; ?></b>

