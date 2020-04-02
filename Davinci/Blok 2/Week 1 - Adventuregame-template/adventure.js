


var description = document.getElementById("description");
var image = document.getElementById("image")
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var inventoryItem = document.getElementById("inventoryItem")


function escape(){
	inventoryItem.style.display = 'none';
	button1.innerHTML = "Start";
	button1.setAttribute('onclick','start()');
	button2.style.display = 'none';
	button3.style.display = 'none';
	description.innerHTML = "<h3><br><br> Je wilde naar een festival in konya (stad in Turkije), maar je hebt perongeluk geboekt naar Kenia.<h2> Veel succes!  "

}

function start(){
	description.innerHTML = "<br><br><h3> Tijdens de vlucht kom je erachter dat je verkeerd hebt geboekt."
	image.src = "5.jpg"
	button1.innerHTML = "Ga verder"
	button1.setAttribute('onclick', 'Ga()');
	button2.style.display = 'inline-block';
	button2.innerHTML = "Probeer de vlucht te stoppen";
	button2.setAttribute('onclick', 'Probeer()');
}

function Probeer(){

	description.innerHTML = "<br><br><h3> Je hebt de mogelijkheid om de vlucht te stoppen"
	image.src = "5.jpg"
	button1.innerHTML = "Doe alsof je naar het ziekenhuis moet"
	button1.setAttribute('onclick', 'Ziekenhuis()');
	button2.style.display = 'none';

}

function Ziekenhuis(){
	description.innerHTML = "<br><br><h3> Helaas... Er vliegt een dokter mee. Hij ziet dat er niks aan de hand is. "
	image.src = "9.jpg"
	button1.innerHTML = "Ga Terug"
	button1.setAttribute('onclick', 'start()');
	button2.style.display = 'none';

}


function Ga (){
	description.innerHTML = "<br><br><h3> Je Komt aan in Kenia. Je hebt niet genoeg geld om terug te boeken, het geld is net genoeg voor 2 dagen verblijf. "
	image.src = "8.jpg"
	button1.innerHTML = "Boek terug en ga naar Konya"
	button1.setAttribute('onclick', 'Boek()');
	button2.style.display = 'inline-block';
	button2.innerHTML = "Regel onderdak";
	button2.setAttribute('onclick', 'Onderdak()');
}

function Boek(){
	description.innerHTML = "<br><br><h3> Helaas... je hebt niet genoeg geld bij de hand. "
	image.src = "10.jpg"
	button1.innerHTML = "Ga terug"
	button1.setAttribute('onclick', 'Ga()');
	button2.style.display = 'none';
	
}


function Onderdak(){
	description.innerHTML = "<br><br><h3> Je hebt nu 2 dagen onderdak kunnen regelen."
	button1.innerHTML = "Werken voor geld"
	image.src = "11.jpg"
	button1.setAttribute('onclick', 'Werken()');
	button2.style.display = 'inline-block';
	button2.innerHTML = "Ga bedelen";
	button2.setAttribute('onclick', 'Bedelen()');
}

function Werken(){
	description.innerHTML = "<br><br><h3> Je hebt ervoor gekozen om te werken. Waar wil je werken?"
	button1.innerHTML = "In een restaurant"
	image.src = "12.jpg"
	button1.setAttribute('onclick', 'Restaurant()');
	button2.style.display = 'inline-block';
	button2.innerHTML = "als Safari-Gids";
	button2.setAttribute('onclick', 'Gids()');
}

function Restaurant(){
	description.innerHTML = "<br><br><h3> Je hebt ervoor gekozen om te werken in een restaurant. je hebt op 1 dag 200 euro kunnen verdienen"
	button1.innerHTML = "In een restaurant"
	image.src = "13.jpg"
	button1.setAttribute('onclick', 'Restaurant()');
	button2.style.display = 'inline-block';
	button2.innerHTML = "als Safari-Gids";
	button2.setAttribute('onclick', 'Gids()');
}









function Bedelen(){
	description.innerHTML = "<br><br><h3> Je hebt ervoor gekozen om te bedelen. Waar wil je bedelen"
	button1.innerHTML = "in de stad"
	button1.setAttribute('onclick', 'stad()');
	button2.style.display = 'inline-block';
	button2.innerHTML = "op het platteland";
	button2.setAttribute('onclick', 'platteland()');
}

function platteland(){
	description.innerHTML = "<br><br><h3> Je hebt 8 uur lang gebedelt, maar je hebt 2 euro gekregen. dit is niet genoeg"
	button1.innerHTML = "Ga werken"
	button1.setAttribute('onclick', 'Werken()');
	button2.style.display = 'inline-block';
	button2.innerHTML = "Ga verder met bedelen.";
	button2.setAttribute('onclick', 'Bedelen2()');
}

function Bedelen2(){
	description.innerHTML = "<br><br><h3> Je hebt niet genoeg geld kunnen krijgen. je hebt nog 1 dag voor onderdak."
	button1.innerHTML = "Ga werken"
	button1.setAttribute('onclick', 'Werken()');
	button2.style.display = 'inline-block';
	button2.innerHTML = "Ga verder met bedelen.";
	button2.setAttribute('onclick', 'Bedelen3()');
}

function Bedelen3(){
	description.innerHTML = "<br><br><h3> Je hebt ervoor gekozen om door te gaan met bedelen. hierdoor heb je geen onderdak meer kunnen regelen. Game over."
	button1.innerHTML = "Begin opnieuw"
	button1.setAttribute('onclick', 'escape()');
	button2.style.display = 'none';
	
}


function stad(){
	description.innerHTML = "<br><br><h3> Je hebt 5 uur lang gebedelt, maar je hebt 10 euro gekregen. dit is niet genoeg"
	button1.innerHTML = "Ga werken"
	button1.setAttribute('onclick', 'Werken()');
	button2.style.display = 'inline-block';
	button2.innerHTML = "Ga verder met bedelen.";
	button2.setAttribute('onclick', 'Bedelen2()');
}

function Bedelen2(){
	description.innerHTML = "<br><br><h3> Je hebt niet genoeg geld kunnen krijgen. je hebt nog 1 dag voor onderdak."
	button1.innerHTML = "Ga werken"
	button1.setAttribute('onclick', 'Werken()');
	button2.style.display = 'inline-block';
	button2.innerHTML = "Ga verder met bedelen.";
	button2.setAttribute('onclick', 'Bedelen3()');
}

function Bedelen3(){
	description.innerHTML = "<br><br><h3> Je hebt ervoor gekozen om door te gaan met bedelen. hierdoor heb je geen onderdak meer kunnen regelen. Game over."
	button1.innerHTML = "Begin opnieuw"
	button1.setAttribute('onclick', 'escape()');
	button2.style.display = 'none';
	
}




escape();
