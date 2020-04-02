
// Yilmaz Kuru
// Applicatie ontwikkeling niveau 4
// pizzacalculator 

var small = prompt("$6.50 - Hoeveel small pizza's wil je?"); //de vraag die je als eerst krijgt.
var prijs = 6.50 //dit is wat je betaald voor een small pizza.
document.write("Small: $",small*prijs+"<br>") //rekent de prijs uit op aantal.


var medium = prompt("$8.50 - Hoeveel medium pizza's wil je?"); //de vraag die je als eerst krijgt.
var prijs2 = 8.50 //dit is wat je betaald voor een medium pizza.
document.write("Medium: $",medium*prijs2+"<br>"); //rekent de prijs uit op aantal.

var large = prompt("$11.50 - Hoeveel large pizza's wil je?"); //de vraag die je als eerst krijgt.
var prijs3 = 11.50 //dit is wat je betaald voor een large pizza.
document.write("Large: $",large*prijs3+"<br>"); //rekent de prijs uit op aantal.

var totaalsmall = small*prijs;
var totaalmedium = medium*prijs2;
var totaallarge = large*prijs3;

document.write("Totaal Prijs: $s",(totaallarge+totaalmedium+totaalsmall).toFixed(2)); // rekent het totale bedrag uit.

