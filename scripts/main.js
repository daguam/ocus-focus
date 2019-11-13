//Creates variables selecting the first img, button and h1
var myHeading = document.querySelector('h1');
//Creates variables selecting the first element with the specified class
var myImage = document.querySelector('.image');

//Responsive navigation function
function navFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Checks for stored username or sets a new one if there is none
if(!localStorage.getItem('name')) {
    setUsername();
} else {
    
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "Welcome Back to Ocus Focus " + storedName + "!";
}
//Changes the image and heading color on click event
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ocusFocus2.png') {
        myImage.setAttribute('src','images/ocusFocus.png');
        myHeading.style.color = "#f0e7e7";
    } else {
        myImage.setAttribute('src','images/ocusFocus2.png');
        myHeading.style.color = "black";
    }
}
//Set username using localstorage
function setUsername() {
    var myName = prompt('Please enter yoru name.');
    if (myName != null) {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome to Ocus Focus ' + myName + "!";
    } else {
        myHeading.textContent = "Please sign in";
    }
}
//Back to top function
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

//CHARACTER DEMO

//Temporary character array
Characters = [
    
    Poreon = {
        name: "Poreon",
        age: 25,
        lvl: 1,
        hp: 10,
        maxHit: 1,
        image: "images/imgOcusFocus.png"
    },
    
    Zydor = {
        name: "Zydor",
        age: Number.POSITIVE_INFINITY,
        lvl: 100,
        hp: Number.MAX_VALUE,
        maxHit: 1000,
        image: "images/imgOcusFocus2.png"
        
    }
];

charIndex = 0;

//Example of the array sort method
function sortCharAge(){
    Characters.sort(function(a,b){return a.age - b.age});
    charIndex = 0;
    charDisplay(Characters[charIndex]);
    charList();
}
//Deletes current character
function deleteChar(){
    Characters.splice(charIndex,1);
    if(charIndex > 0){
        charIndex--;
    }
    charDisplay(Characters[charIndex]);
    charList();
}
//Adds character with name from input and random stats values
function addChar(){
    if(document.getElementById("nameInput").value != "")
    {
        Characters.push(
            newChar = {
                name: document.getElementById("nameInput").value,
                age: Math.floor(Math.random()*101),
                lvl: Math.floor(Math.random()*101),
                hp : Math.floor(Math.random()*101),
                maxHit: Math.floor(Math.random()*101),
                image: "images/noImage.png"
            }
        )
        //Displays the new character
        charIndex = Characters.length-1;
        charDisplay(Characters[charIndex]);
    }
    document.getElementById("nameInput").value = "";
    charList();   
}
//Displays next char    
function nextChar(){
    if(charIndex < Characters.length-1){
        charIndex++;
        charDisplay(Characters[charIndex]);
    }
}
//Displays previous char    
function prevChar(){
    if(charIndex > 0){
        charIndex--;
        charDisplay(Characters[charIndex]);
    }
}
//Display character list with the array method for each     
function charList(){
    text = "<ul>";
    Characters.forEach(charListLoad);                
    text += "</ul>"
        document.getElementById("charList").innerHTML = text;
}
    
function charListLoad(value){
    text += "<li>" + value.name + "</li>";
}
//Displays character    
function charDisplay(value){
    if(Characters.length > 0){
        document.getElementById("tableStatus").innerHTML = "";
        document.getElementById("name").innerHTML = value.name;
        document.getElementById("age").innerHTML = value.age;
        document.getElementById("level").innerHTML = value.lvl;
        document.getElementById("hp").innerHTML = value.hp;
        document.getElementById("maxHit").innerHTML = value.maxHit;
        document.getElementById("charTable").hidden = false;
        document.getElementById("character").src = value.image;
        document.getElementById("character").style = "display:block";
    }       
    else{
        document.getElementById("charTable").hidden = true;
        document.getElementById("tableStatus").innerHTML = "Empty Table";
        document.getElementById("character").style = "display:none";
    }
}
//Returns to index on click
function backIndex(){
    document.location.href = "index.html";
}
//Inicialization
charList();
charDisplay(Characters[charIndex]);
