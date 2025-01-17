const tickRate = 1000 / 30; 
let score = 0;

let nettspendnugget = new Guardian("NettspendNugget", 0.1, 15);
function incScore() {
    score += nettspendnugget.cps;
}
let troll = new Guardian("TrollFace", 1, 100);
function incScore() {
    score += troll.cps;
}
function scorePlusPlus() {
    score++;
}
function updateButtons() {
    nettspendnugget.buttonState();
    troll.buttonState();
}
function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML = "$" + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);