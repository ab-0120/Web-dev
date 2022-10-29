document.getElementById('click').onclick = function () {

    let text = document.getElementById('input').value;

    if (text == "")
        alert("Please guess a number first");

    else if (text > 6 || text < 1) {
        alert("Please enter a no between range 1 to 6");
        location.reload();
    }

    else {

        let randonNum = randomNumber(1, 6);

        if (text == randonNum) {

            document.getElementById("message").innerHTML = "YAY!! You are an expert of guess...";
            document.getElementById("message").style.visibility = "visible";
            document.getElementById("tryagain").style.visibility = "visible";
        }

        else {
            document.getElementById("message").innerHTML = "Hmm!!! Better luck next time...";
            document.getElementById("message").style.visibility = "visible";
            document.getElementById("tryagain").style.visibility = "visible";
        }

    }
}

document.getElementById('tryagain').onclick = function () {

    location.reload();
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
} 