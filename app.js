var ID ="00";
var seconds ="00";

function printime(){
    document.getElementById("second").innerHTML=doubleDigit(seconds%60)
    // document.getElementById("second").innerHTML=seconds%60;
    document.getElementById("minute").innerHTML=doubleDigit(Math.floor(seconds/60));
    seconds++;

}

function doubleDigit(num) {
    if(num<10){
        return "0"+num;
    }else{
        return num;
    }
}

function start(){
    ID = window.setInterval(printime, 1000);
    document.getElementById("pausebtn").style.display="inline"
    document.getElementById("startbtn").style.display="none"
    document.getElementById("second-div").style.backgroundColor="#c21e56"
    document.getElementById("heading").style.color="wheat"


}


function pause(){
    window.clearInterval(ID);
    document.getElementById("pausebtn").style.display="none"
    document.getElementById("resumebtn").style.display="inline"
    document.getElementById("second-div").style.backgroundColor="#89CFF0"
    document.getElementById("heading").style.color="Black"




}

function resume(){
    ID = window.setInterval(printime, 1000);
    document.getElementById("resumebtn").style.display="none"
    document.getElementById("pausebtn").style.display="inline"
    document.getElementById("second-div").style.backgroundColor="#c21e56"
    document.getElementById("heading").style.color="wheat"

}


function resett (){
    pause();
    minutes="00";
    seconds="00";
    document.getElementById("startbtn").style.display="inline"
    document.getElementById("pausebtn").style.display="none"
    document.getElementById("resumebtn").style.display="none"
    document.getElementById("second").textContent="00"
    document.getElementById("minute").textContent="00"
    document.getElementById("second-div").style.backgroundColor="bisque"

}











// SINGLE VARIABLE--------------------------------------------------------------
// var ID = 0;
// // var ED = 0;
// var seconds = 0;
// // var minutes = 0;

// function printime(){
//     document.getElementById("second").innerHTML=seconds%60;
//     document.getElementById("minute").innerHTML=Math.floor(seconds/60);
    
//     seconds++;
// }

// function start(){
//     ID = window.setInterval(printime, 1000);
// }
// function stop(){
//     window.clearInterval(ID);
// }

// function resett (){
//     stop();
//     minutes=0;
//     seconds=0;
//     document.getElementById("second").textContent="00"
//     document.getElementById("minute").textContent="00"
// }




















// triple variable------------------------


// var ID = 0;
// // var ED = 0;
// var seconds = 0;
// var minutes = 0;
// var hours = 0;

// function printime(){
//     document.getElementById("second").innerHTML=seconds
//     document.getElementById("minute").innerHTML=minutes
//     document.getElementById("hour").innerHTML=hours
//     if(seconds==60){
//         minutes++;
//         seconds=0;
//     }

//     if(minutes==60){
//         hours++;
//         minutes=0;

//     }


//     seconds++;
// }


// function start(){
//     ID = window.setInterval(printime, 1000);
// }
// function stop(){
//     window.clearInterval(ID);
// }

// function resett (){
//     stop();
//     minutes=0;
//     seconds=0;
//     hours=0;
//     document.getElementById("hour").textContent="00"
//     document.getElementById("second").textContent="00"
//     document.getElementById("minute").textContent="00"
// }