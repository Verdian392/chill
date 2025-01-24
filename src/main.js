const tickRate = 1000 / 30; 
let clickStrength = 1;
let score = 0;

let nettspendnugget = new Guardian("Nettspend Nugget", 0.1, 15);
let troll = new Guardian("Troll Face", 1, 100);

let flowers1 = new Flowers("Flowers", 1);

function scorePlusPlus() {
    score += clickStrength;
}

function incScore() {
    score += nettspendnugget.cps
    score += troll.cps
}
function updateButtons() {
    nettspendnugget.buttonState();
    troll.buttonState();

    flowers1.buttonState();
}
function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML = "$" + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);