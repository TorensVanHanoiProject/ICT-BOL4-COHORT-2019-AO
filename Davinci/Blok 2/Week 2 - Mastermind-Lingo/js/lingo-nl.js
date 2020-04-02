var words = [
    "appel",
    "aldus",
    "afwas",
    "aftel",
    "aarde",
    "armen",
    "actie",
    "apart",
    "adres",
    "avond",
    "aders",
    "alarm",
    "boten",
    "balen",
    "beter",
    "bomen",
    "boren",
    "boven",
    "boxen",
    "brood",
    "broek",
    "brand",
    "breed",
    "benen",
    "beeld",
    "brief",
    "beten",
    "basis",
    "blauw",
    "beren",
    "buren",
    "banen",
    "bloed",
    "broer",
    "blond",
    "boter",
    "beleg",
    "breng",
    "baken",
    "beker",
    "blind",
    "bezig",
    "baden",
    "bedel",
    "bazen",
    "bazin",
    "baren",
    "beden",
    "beken",
    "bezem",
    "baard",
    "bidet",
    "breuk",
    "conus",
    "cello",
    "creme",
    "cloud",
    "cacao",
    "cadet",
    "cavia",
    "ceder",
    "combi",
    "china",
    "clown",
    "draai",
    "deden",
    "dalen",
    "derde",
    "delen",
    "dwaas",
    "daden",
    "dader",
    "dames",
    "diner",
    "datum",
    "dozen",
    "dreun",
    "duits",
    "dagen",
    "deren",
    "dwerg",
    "dwaal",
    "dwing",
    "druil",
    "droog",
    "draad",
    "dweil",
    "drank",
    "duren",
    "dwars",
    "drugs",
    "daten",
    "daler",
    "doorn",
    "disco",
    "degen",
    "droom",
    "dient",
    "drone",
    "dadel",
    "duwen",
    "druif",
    "deken",
    "deler",
    "elven",
    "eigen",
    "enger",
    "engel",
    "elder",
    "enkel",
    "effen",
    "email",
    "egaal",
    "fiets",
    "friet",
    "files",
    "forel",
    "films",
    "feest",
    "fruit",
    "falen",
    "flora",
    "fauna",
    "feeen",
    "freak",
    "forum",
    "fusie",
    "geven",
    "gaven",
    "groen",
    "graai",
    "getal",
    "grens",
    "grond",
    "groef",
    "graal",
    "gewei",
    "games",
    "grote",
    "groet",
    "garen",
    "gebak",
    "graag",
    "genre",
    "glans",
    "geluk",
    "geeuw",
    "horen",
    "heren",
    "halen",
    "hagel",
    "haren",
    "helen",
    "harde",
    "hemel",
    "hoofd",
    "huren",
    "hamer",
    "haken",
    "heden",
    "hotel",
    "hobby",
    "heler",
    "hoger",
    "ieder",
    "index",
    "immer",
    "icoon",
    "inlog",
    "inzet",
    "innig",
    "jovel",
    "jaren",
    "jicht",
    "jabot",
    "jacht",
    "jaden",
    "jagen",
    "jager",
    "japon",
    "jarig",
    "jawel",
    "jeans",
    "jemig",
    "jeugd",
    "joint",
    "jonas",
    "joule",
    "koken",
    "kreet",
    "koker",
    "kerst",
    "kegel",
    "koude",
    "kader",
    "krent",
    "kamer",
    "kaars",
    "kaart",
    "kraan",
    "krant",
    "keren",
    "kruid",
    "kerel",
    "kubus",
    "kraal",
    "kleur",
    "kroon",
    "klein",
    "korst",
    "klopt",
    "kabel",
    "kunst",
    "kopje",
    "krans",
    "klimt",
    "kater",
    "klink",
    "kudde",
    "kruis",
    "lopen",
    "laten",
    "lepel",
    "links",
    "laden",
    "leven",
    "lezen",
    "lucht",
    "lenen",
    "laser",
    "lente",
    "licht",
    "lader",
    "leder",
    "lunch",
    "lijst",
    "leger",
    "leden",
    "legen",
    "lagen",
    "lezer",
    "lever",
    "lingo",
    "loper",
    "luier",
    "lager",
    "leeuw",
    "maand",
    "malen",
    "maken",
    "media",
    "meter",
    "motor",
    "maten",
    "markt",
    "mazen",
    "molen",
    "meest",
    "meren",
    "model",
    "meden",
    "maden",
    "macht",
    "meeuw",
    "mager",
    "magen",
    "maren",
    "manen",
    "noord",
    "nieuw",
    "negen",
    "namen",
    "neven",
    "nodig",
    "naden",
    "neder",
    "nemen",
    "onder",
    "optel",
    "ovaal",
    "ovale",
    "onwel",
    "optie",
    "orden",
    "oppas",
    "ouder",
    "ophef",
    "oases",
    "palen",
    "plein",
    "pegel",
    "paars",
    "prijs",
    "piano",
    "pixel",
    "paden",
    "pasta",
    "pizza",
    "poten",
    "paard",
    "puber",
    "pauze",
    "preek",
    "polis",
    "pater",
    "proef",
    "panda",
    "penis",
    "prins",
    "pluto",
    "polen",
    "plint",
    "quota",
    "quant",
    "quark",
    "queue",
    "quilt",
    "quote",
    "robot",
    "reken",
    "raden",
    "regen",
    "radio",
    "rente",
    "regio",
    "rugby",
    "reden",
    "roken",
    "ruzie",
    "ruist",
    "regel",
    "racen",
    "races",
    "riool",
    "ramen",
    "radar",
    "roman",
    "rokje",
    "razen",
    "roede",
    "staan",
    "staal",
    "speel",
    "steeg",
    "stoel",
    "stook",
    "steek",
    "schep",
    "spijs",
    "stoep",
    "shirt",
    "samen",
    "sites",
    "sport",
    "spalk",
    "sjaal",
    "storm",
    "staat",
    "steun",
    "strak",
    "serie",
    "shows",
    "schat",
    "snoep",
    "sfeer",
    "smeer",
    "speer",
    "scene",
    "speld",
    "smeed",
    "smaak",
    "super",
    "stand",
    "steer",
    "smelt",
    "sedan",
    "skier",
    "sluis",
    "sneer",
    "steel",
    "truck",
    "terug",
    "typen",
    "talen",
    "taboe",
    "tegel",
    "taart",
    "tafel",
    "trouw",
    "teken",
    "teren",
    "taken",
    "treur",
    "tenen",
    "titel",
    "thuis",
    "tiara",
    "teder",
    "toets",
    "tabak",
    "trein",
    "tarwe",
    "telen",
    "teler",
    "uiten",
    "uilig",
    "uitje",
    "uiver",
    "ultra",
    "uniek",
    "uppie",
    "uraan",
    "uiers",
    "velen",
    "vloer",
    "video",
    "varen",
    "vegen",
    "veren",
    "vader",
    "vaten",
    "vuren",
    "vrouw",
    "vlees",
    "vogel",
    "vroeg",
    "vezel",
    "veins",
    "vorst",
    "veder",
    "vanaf",
    "vieze",
    "veger",
    "villa",
    "veler",
    "vrede",
    "vries",
    "woord",
    "wagen",
    "wonen",
    "waren",
    "warme",
    "weten",
    "water",
    "weren",
    "wazig",
    "wegen",
    "weven",
    "wezen",
    "weken",
    "wraak",
    "wilde",
    "wreed",
    "wrede",
    "wenst",
    "woest",
    "xenon",
    "yacht",
    "yucca",
    "zwaar",
    "zware",
    "zesde",
    "zagen",
    "zalig",
    "zomer",
    "zeden",
    "zwart",
    "zeven",
    "zicht",
    "zadel",
    "zweet",
    "zenuw",
    "zweer",
    "zweef",
    "zaden",
    "zaken",
    "zeker",
    "zever",
    "zeeen"];



var raadWoord = words[Math.floor(Math.random() * words.length)];
 
    
    
 
    var currentRow = 1;
    
    setFirstLetterOnBord();
    
 
    
     function setFirstLetterOnBord(){
        raadWoord = raadWoord.toUpperCase();
         raadWoord = raadWoord.split('');
        console.log(raadWoord);
        document.getElementById("r"+currentRow+"c" + 0).innerHTML = raadWoord[0];
        
    }
    
    
    function check(){
        woord = document.getElementById('svg-wrapper').value;
        woord = woord.toUpperCase();
        woordArray = woord.split('');
        
        console.log(woordArray)
 
            for(i=0; i< woordArray.length; i++){
                document.getElementById("r"+currentRow+"c" + i).innerHTML=woordArray[i];
                
        
                         
                
            }   
            for(i=0; i< raadWoord.length; i++){
            for(a=0; a< woordArray.length; a++)
                {
                        
                    if(woordArray[a] == raadWoord[i] && a == i){
                        document.getElementById("r"+currentRow+"c" + i).style.backgroundColor='green';
                    }
                
                    else if(woordArray.includes(raadWoord[i]) && i == a){
                        document.getElementById("r"+currentRow+"c" + i).style.backgroundColor='yellow';
                }
                
                
            }
                
                
                }
                currentRow = currentRow +1;
                
                console.log(currentRow);
                        }
    
    
    
    
        //check();

        (function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
    window.requestAnimationFrame = requestAnimationFrame;
})();


var flakes = [],
    canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    flakeCount = 600,
    mX = -100,
    mY = -100

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

function snow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < flakeCount; i++) {
        var flake = flakes[i],
            x = mX,
            y = mY,
            minDist = 150,
            x2 = flake.x,
            y2 = flake.y;

        var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
            dx = x2 - x,
            dy = y2 - y;

        if (dist < minDist) {
            var force = minDist / (dist * dist),
                xcomp = (x - x2) / dist,
                ycomp = (y - y2) / dist,
                deltaV = force / 2;

            flake.velX -= deltaV * xcomp;
            flake.velY -= deltaV * ycomp;

        } else {
            flake.velX *= .98;
            if (flake.velY <= flake.speed) {
                flake.velY = flake.speed
            }
            flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
        }

        ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
        flake.y += flake.velY;
        flake.x += flake.velX;
            
        if (flake.y >= canvas.height || flake.y <= 0) {
            reset(flake);
        }


        if (flake.x >= canvas.width || flake.x <= 0) {
            reset(flake);
        }

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fill();
    }
    requestAnimationFrame(snow);
};

function reset(flake) {
    flake.x = Math.floor(Math.random() * canvas.width);
    flake.y = 0;
    flake.size = (Math.random() * 3) + 2;
    flake.speed = (Math.random() * 1) + 0.5;
    flake.velY = flake.speed;
    flake.velX = 0;
    flake.opacity = (Math.random() * 0.5) + 0.3;
}

function init() {
    for (var i = 0; i < flakeCount; i++) {
        var x = Math.floor(Math.random() * canvas.width),
            y = Math.floor(Math.random() * canvas.height),
            size = (Math.random() * 3) + 2,
            speed = (Math.random() * 1) + 0.5,
            opacity = (Math.random() * 0.5) + 0.3;

        flakes.push({
            speed: speed,
            velY: speed,
            velX: 0,
            x: x,
            y: y,
            size: size,
            stepSize: (Math.random()) / 30,
            step: 0,
            opacity: opacity
        });
    }

    snow();
};

canvas.addEventListener("mousemove", function(e) {
    mX = e.clientX,
    mY = e.clientY
});

window.addEventListener("resize",function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

init();

