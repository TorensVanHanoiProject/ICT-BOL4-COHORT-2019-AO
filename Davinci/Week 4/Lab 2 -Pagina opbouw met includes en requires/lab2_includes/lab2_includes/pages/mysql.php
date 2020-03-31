<!DOCTYPE html>
<html>
<head>
	<title> Second Page</title>
</head>
<body>
<?php

if (isset($_GET['subject'])){
	$subject = $_GET['subject'];
} else {
	$subject = 'mezelf1';
}

iclude("$subject.php");
?>

<?php iclude("pages/mysql.php");?>
</body>
</html>


<!-- jouw HTML met de inhoud over MYSql komt hier... -->


