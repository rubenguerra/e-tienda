<?php
ob_start();
// Incluir cabecera
include('cabecera.php');
?>


<?php
// Incluir Canasta de compras
include('./plantillas/_canasta.php');

// Incluir productos
include('./plantillas/_nuevos-telefonos.php');

?>


<?php
// Incluir pie de página
include('pie.php')

?>