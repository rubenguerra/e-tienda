<?php
ob_start();
// Incluir cabecera
include('cabecera.php');

?>

<?php

// Incluir area banner
include('./plantillas/_banner-area.php');

// Incluir más vendidos
include('./plantillas/_mas-vendidos.php');

// Incluir precios especiales
include('./plantillas/_precios.php');

// Incluir banner extras
include('./plantillas/_banner-extras.php');

// Incluir nuevos teléfonos
include('./plantillas/_nuevos-telefonos.php');

// Incluir Blogs
include('./plantillas/_blogs.php');
?>

<?php
// Incluir pie de página
include('pie.php')

?>