<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Lab 2 - Includes en require</title>
  <link rel="stylesheet" href="css/style.css">
  <link href="https://fonts.googleapis.com/css?family=Baloo+Chettan+2&display=swap" rel="stylesheet">
</head>
<body>

	<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "Databank.php";



	 ?>


	<!-- laad hier via php je header in (vanuit je includes map) -->
	<?php
	include('includes/header.php');
	?>
	<!-- laad hier via php de juiste contentpagina in (vanuit de pages map) in. Welke geselecteerd moet worden kun je uit de URL halen (URL_Params).-->

	<?php
	include('pages/client_server.php');
	?>

	
	<!-- laad hier via php je footer in (vanuit je includes map)-->
	<?php
	include('includes/footer.php');
	?>


</body>
</html>