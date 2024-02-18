let Days = document.getElementById("days");
let Hrs = document.getElementById("hrs");
let Min = document.getElementById("min");
let Sec = document.getElementById("sec");

let targetDate = new Date("Apr 14 2024 06:00:00").getTime();

let x = setInterval(function() {
    let now = new Date().getTime();

    let timeDifference = targetDate - now;
    let days = Math.floor(timeDifference/(1000*60*60*24));
    let hours = Math.floor((timeDifference%(1000*60*60*24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference%(1000*60*60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference%(1000*60)) / 1000);

    Days.innerHTML = ("0"+days).slice(-2);
    Hrs.innerHTML = ("0"+hours).slice(-2);
    Min.innerHTML = ("0"+minutes).slice(-2);
    Sec.innerHTML = ("0"+seconds).slice(-2);
    

    if(timeDifference<0){
        clearInterval(x);
        document.getElementById("timer").innerHTML = "";
        document.getElementById("title").innerHTML = "Happy tamil new year";

    }
}, 1000);