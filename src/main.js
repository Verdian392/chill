const tickRate = 1000 / 30; 
let score = 0;

let nettspendnugget = new Guardian("Nettspend Nugget", 0.1, 15, "buyNettspendNugget");
function incScore() {
    score += nettspendnugget.cps;
}

function scorePlusPlus() {
    score++;
}
function updateButtons() {
    nettspendnugget.buttonState();
}
function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML = "$" + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);