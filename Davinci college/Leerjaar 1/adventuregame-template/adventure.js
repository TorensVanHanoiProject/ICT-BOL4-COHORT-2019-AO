


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
	description.innerHTML = "<h2> Veel succes! <h3> Je wilde naar een festival in konya (stad in Turkije), maar je hebt perongeluk geboekt naar Kenia. <h4> Om te beginnen: klik op Start "

}

function start(){
	description.innerHTML = "<h2> Je komt aan bij de Gate richting Kenia. <br><h3>je hebt dit zelf nog niet door.<h5> Het vliegtuig stijt op over 1 uur"
	image.src = "5.jpg"
	button1.innerHTML = "Slapen"
	button1.setAttribute('onclick', 'Slapen()');
	button2.style.display = 'inline-block';
	button2.innerHTML = "Even eten";
	button2.setAttribute('onclick', 'Eten()');
}

function Eten(){
	description.innerHTML="<h3> Je hebt 2 keuzes<br><br> Het vliegtuig vertrekt over 55 minuten."
	image.src = "6.jpg"
	button1.innerHTML = "MCdonalds"
	button1.setAttribute('onclick','MCdonalds()');
	button2.style.display = 'inline-block';
	button2.innerHTML = "Burger king"
	button2.setAttribute('onclick', 'Burger King()');

}

function MCdonalds(){
	description.innerHTML="<h3> Je komt iemand tegen. <br><h5>Hij neemt dezelfde vlucht. <br><br> hij vraagt of je al ingeent bent voor de vlucht."
	image.src = "7.jpg"
	button1.innerHTML = "keuze1"
	button1.setAttribute('onclick','MCdonalds()');
	button2.style.display = 'inline-block';
	button2.innerHTML = "Keuze2"
	button2.setAttribute('onclick', 'Burger King()');

}


escape();
