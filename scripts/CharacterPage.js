//Temporary character array
Characters = [
    
    Poreon = {
        name: "Poreon",
        age: 25,
        lvl: 1,
        hp: 10,
        maxHit: 1,
        image: "images/Poreon.png"
    },
    
    Zydor = {
        name: "Zydor",
        age: Number.POSITIVE_INFINITY,
        lvl: 100,
        hp: Number.MAX_VALUE,
        maxHit: 1000,
        image: "images/Zydor.png"
        
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
    }       
    else{
        document.getElementById("charTable").hidden = true;
        document.getElementById("tableStatus").innerHTML = "Empty Table";
    }
}
//Returns to index on click
function backIndex(){
    document.location.href = "index.html";
}
//Inicialization
charList();
charDisplay(Characters[charIndex]);