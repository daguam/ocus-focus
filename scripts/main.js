var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myButton.onclick = function() {
    setUsername();
}

if(!localStorage.getItem('name') || localStorage.getItem('name') == "") {
    setUsername();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "Welcome Back to Ocus Focus " + storedName + "!";
}

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/imgOcusFocus.png') {
        myImage.setAttribute('src','images/imgOcusFocus2.png');
    } else {
        myImage.setAttribute('src','images/imgOcusFocus.png');
    }
}

function setUsername() {
    var myName = prompt('Please enter yoru name.');
    if (myName != null) {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome to Ocus Focus ' + myName + "!";
    } else {
        myHeading.textContent = "Please sign in";
    }
}
