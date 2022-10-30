var start = new Date().getTime();

var besttime = 1000;

var audio = document.getElementById("sound");

// for random no within a range
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// for random size, position and shape
function randomStyles() {

    var top = randomNumber(0.1, 0.6) * 800;
    var left = randomNumber(0, 1.44) * 1200;
    var height = randomNumber(30, 220);
    var borderRad = randomNumber(0, 70);

    // generate random color
    var makeColorCode = '0123456789ABCDEF';
    var code = '#';
    for (var count = 0; count < 6; count++) {
        code = code + makeColorCode[Math.floor(Math.random() * 16)];
    }

    document.getElementById("square").style.top = top + "px";
    document.getElementById("square").style.left = left + "px";

    document.getElementById("square").style.height = height + "px";
    document.getElementById("square").style.width = height + "px";

    document.getElementById("square").style.borderRadius = borderRad + "%";

    document.getElementById("square").style.backgroundColor = code;

}

function makeAppear() {

    // caling random function
    randomStyles();

    document.getElementById("square").style.display = "block";
    start = new Date().getTime();
}


function appearAfterDelay() {
    setTimeout(makeAppear, Math.random() * 500);
}

appearAfterDelay();

makeAppear();

document.getElementById("square").onclick = function () {
    audio.play();
    document.getElementById("square").style.display = "none";

    var end = new Date().getTime();

    var timet = (end - start) / 1000;

    document.getElementById("insert").innerHTML = timet + "s";

    //besttime
    if (besttime > timet) {
        besttime = timet;
        document.getElementById("best").style.display = "block";
        document.getElementById("besttime").innerHTML = besttime + "s";

    }
    else {
        document.getElementById("best").style.display = "block";
        document.getElementById("besttime").innerHTML = besttime + "s";
    }


    appearAfterDelay();
}