var play = false;
var name = "Player " + String(Math.round(Math.random()*2000000));
var hp = 25;
var xp = 0;
var lvl = 1;
function intro() {
    function n() {
        name = document.getElementById("name").value;
        game("Ok, so your name is "+name+". Got it!")
    }
    function no() {
        document.getElementById("game").innerHTML = "Fine. I guess this game is too good for you.";
        play = false;
    }
    function ok() {
        document.getElementById("game").innerHTML = "OK! Let's get Started.";
        play = true;
        game("<input type=\"text\" id=\"name\" placeholder=\"What is your name?\"/><button onclick=\"n()\">Enter</button>");
    }
    stat();
}
function game(st) {
    String(st);
    document.getElementById("game").innerHTML = document.getElementById("game").innerHTML + "<p>" + st + "</p>";
}
function stat() {
    document.getElementById("stats").innerHTML = document.getElementById("stats").innerHTML + "<h3>Player Stats:</h3><p>Health: " + String(hp) + "  </p><p>Experience: " + String(xp) + "</p><p>Level: " + String(lvl) + "</p>";
}
game("Welcome to scoutchorton's online RPG!");
game("Want to play?");
game("<button onclick=\"intro.no\">No</button><button onclick=\"intro.ok\">Yes</button>");
intro();