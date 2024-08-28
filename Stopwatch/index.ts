let milisec : number = 0;
let seconds : number = 0;
let minutes : number = 0;
let getHtmlmsec = document.getElementById('msec') as HTMLSpanElement
let getHtmlsec = document.getElementById('sec') as HTMLSpanElement
let getHtmlmin = document.getElementById('min') as HTMLSpanElement
let interval : number;

function start() {
    interval = setInterval(function() {
        milisec++;
        if (milisec < 10) {
            getHtmlmsec.innerHTML = "0" + milisec;
        } else {
            getHtmlmsec.innerHTML = milisec.toString();
        }
        if (milisec >= 100) {
            seconds++;
            if (seconds < 10) {
                getHtmlsec.innerHTML = "0" + seconds;
            } else {
                getHtmlsec.innerHTML = seconds.toString();
            }
            milisec = 0;
        } 
        if (seconds >= 60) {
            minutes++;
            if (minutes < 10) {
                getHtmlmin.innerHTML = "0" + minutes;
            } else {
                getHtmlmin.innerHTML = minutes.toString();
            }
            seconds = 0;
        }
    }, 10);
   let get =  document.getElementById("sss") as HTMLButtonElement
   get.disabled = true;
}

function stopp() {
    clearInterval(interval);
    let get =  document.getElementById("sss") as HTMLButtonElement
    get.disabled = false;
}

function reset() {
    minutes = 0 ;
    seconds = 0;
    milisec = 0;
    getHtmlmin.innerHTML = minutes.toString();
    getHtmlmsec.innerHTML = milisec.toString();
    getHtmlsec.innerHTML = seconds.toString();
    let get =  document.getElementById("sss") as HTMLButtonElement
    get.disabled = false;
}