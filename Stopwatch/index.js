var milisec = 0;
var seconds = 0;
var minutes = 0;
var getHtmlmsec = document.getElementById('msec');
var getHtmlsec = document.getElementById('sec');
var getHtmlmin = document.getElementById('min');
var interval;
function start() {
    interval = setInterval(function () {
        milisec++;
        if (milisec < 10) {
            getHtmlmsec.innerHTML = "0" + milisec;
        }
        else {
            getHtmlmsec.innerHTML = milisec.toString();
        }
        if (milisec >= 100) {
            seconds++;
            if (seconds < 10) {
                getHtmlsec.innerHTML = "0" + seconds;
            }
            else {
                getHtmlsec.innerHTML = seconds.toString();
            }
            milisec = 0;
        }
        if (seconds >= 60) {
            minutes++;
            if (minutes < 10) {
                getHtmlmin.innerHTML = "0" + minutes;
            }
            else {
                getHtmlmin.innerHTML = minutes.toString();
            }
            seconds = 0;
        }
    }, 10);
    var get = document.getElementById("sss");
    get.disabled = true;
}
function stopp() {
    clearInterval(interval);
    var get = document.getElementById("sss");
    get.disabled = false;
}
function reset() {
    minutes = 0;
    seconds = 0;
    milisec = 0;
    getHtmlmin.innerHTML = minutes.toString();
    getHtmlmsec.innerHTML = milisec.toString();
    getHtmlsec.innerHTML = seconds.toString();
    var get = document.getElementById("sss");
    get.disabled = false;
}
