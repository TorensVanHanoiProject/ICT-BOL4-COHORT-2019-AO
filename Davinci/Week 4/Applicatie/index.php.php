<?php
require("connect.php.php");

$table = $pdo->prepare('SELECT * FROM characters ORDER BY name');
$table->execute();


$count = $table->rowCount();


$pdo = null;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include('assets/includes/head.php')?>
    <title>Characters</title>
</head>
<body>

    <div id='center-page'>

        <!-- hoeveel karakters er zijn. -->
        <header>
        <h1>Alle <?php echo $count ?> characters uit de database</h1>
        </header>

    <div id='all-characters'>
        <?php
        
        // karakter informatie
            foreach ($table as $row) {
                echo "<div class='characters'>
                <img class='pic' src='assets/images/$row[2]' alt=''>
                <div class='info'>
                <div class='title'>$row[1]</div>
                <div class='stats'>
                <div class='healt'><i class='fas fa-heart'></i> $row[3]</div>
                <div class='attack'><i class='fas fa-fist-raised'></i> $row[6]</div>
                <div class='defense'><i class='fas fa-shield-alt'></i> $row[7]</div>
                </div>
                </div>
                <a href='characters.php.php?id=$row[0]' class='bekijk'><i class='fas fa-search'></i> bekijk</a>
                <hr>
                </div>";
            }
        ?>
        </div>

        <?php include('assets/includes/footer.php') ?>
    </div>
</body>
</html>