//Defines Variables
let tapC = 0; //Tap Counter
let tapT = 0;  //Get Seconds Active
let tapS = 0; //Average Tapping Speed per Second
let tapTemp = 0; //Tapping per Second Timer
let tapTempC = 0; //Tapping per Second Timer Count
let tapCT = 0; //Temporary Tap Timer
let hightT = 0; //Highest Taps per Second
let e = "e";//Allows First Execution of Start

//Defines Arrays
let tapPSArr =[];

//Sets Timers
window.setInterval(tapTempTimer, 100);//Starts tapTemp Timer

//First Execution of Interval Start Timer
function firstExecT(){
    if(e==="e"){
        console.log("Seconds Timer Executed");
        window.setInterval(Seconds, 1000);//Starts Timer
    }
}

//Defines Constants
const tap = document.getElementById("Tap");
const oTap = document.getElementById("OTaps");
const tapPSA = document.getElementById("TapSA");
const tapPS = document.getElementById("TapS");
const timerD = document.getElementById("Timer1");
const timerD2 = document.getElementById("Timer2");
const highT1 = document.getElementById("HighT");

//Tap Functions
function tapE(){
    tapC++;
    tapCT++;
    console.log(tapCT);
    tap.style.transition = "0.2s linear";
    document.getElementById('StartHead').style.opacity = "0";
    tap.style.transform = "scale(1.25)";
    oTap.innerHTML = tapC;
    window.setTimeout(TapShrink, 100);
    tap.innerHTML = "<h2>" + tapC + "<br/>" + " Taps" + "<h2/>";
    console.log(tapS);
    firstExecT();
     e = "f";
}

function TapShrink(){
    tap.style.transition = "0.25s linear";
    tap.style.transform = "scale(1.00)";
    tap.style.transition = "0.5s linear";
}

//Calculates Clicks per Second Average
function Seconds(){
    tapT++;
    tapS = tapC/tapT;
    tapPSA.innerHTML = Math.round(tapS);
    timerD.innerHTML = tapT;
}

//Calculates Click per second
function tapTempTimer(){
    if(tapTemp <= 10){
        tapTemp++;
        tapTempC = tapCT/tapTemp;
    }
    else{
        tapTemp = 0;
        tapTempC = 0;
        tapCT = 0;
    }
    //Stores Values for Highest Taps per Second
    tapPSArr.push(tapCT);
    let maxArr = Math.max.apply(Math, tapPSArr);
    highT1.innerHTML = Math.max(maxArr);

    tapPS.innerHTML = Math.floor(tapCT);
    timerD2.innerHTML = "0." + tapTemp + "s"; //Displays tapTemp
    hightT = Math.floor(tapCT);
}
