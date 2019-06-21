//Creates variables selecting the first img, button and h1
var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

//Checks for stored username or sets a new one if there is none
if(!localStorage.getItem('name')) {
    setUsername();
} else {
    
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "Welcome Back to Ocus Focus " + storedName + "!";
}
//Sets new username
myButton.onclick = function() {
    setUsername();
}
//Changes de color of the image on click event
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/imgOcusFocus.png') {
        myImage.setAttribute('src','images/imgOcusFocus2.png');
    } else {
        myImage.setAttribute('src','images/imgOcusFocus.png');
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
