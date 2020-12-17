var seconds = 0;
var minutes = 0;
var hours = 0;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var appendHours = document.getElementById("hours")
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var interval;

var stopOrStart = 1;

var displaySeconds = 0;
var displayMinutes = 0;
var displayHours = 0;


function stopWatch(){
   
    seconds++;
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    
    if(seconds/60 == 1) {
        seconds = 0;
        minutes++;
    }
    
    if(minutes/60 == 1) {
        minutes = 0;
        hours++;
    }
    
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    
    else {
        displaySeconds = seconds;
    }
    
    if(minutes < 10) {
        displaySeconds = "0" + seconds.toString();
    }
    
    else {
        displayMinutes = minutes;
    }
    
    if(hours < 10) {
        displayHours = "0" + hours.toString();
    }
    
    else {
        displayHours = hours;
    }
    
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function buttonStartt() {
    
    interval = setInterval(stopWatch, 1000);
    
}

function buttonStopp() {
    clearInterval(interval);
}

function buttonStopp() {
    clearInterval(interval);
}

function buttonResett() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    
    document.getElementById("display").innerHTML = "00:00:00";
}


