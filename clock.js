var countDownDate = new Date("Jul 25, 2025 17:37:25").getTime();

var x = setInterval(function(){
    var now = new Date().getTime(); //gets current time

    var distance = countDownDate - now; //calculates distance

    //calculations
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("clock").innerHTML = days + " : " + hours + " : " + minutes + " :  " + seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("clock").innerHTML = "EXPIRED"
    }
}, 1000);

