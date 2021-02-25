<?php

// Comando require para conectarse a Mysqli
require('Database/conexion.php');

// Require para conectar la clase Producto a la base de datos
require('Database/Producto.php');

// Require para conectar la clase Canasta a la base de datos
require('Database/canasta.php');

// Objeto DBController
$db = new DBController();

// Objeto Producto
$producto = new Producto($db);
$producto_lista = $producto->getData();

// Objeto canasta
$Canast = new Canasta($db);
