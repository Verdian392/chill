let score = 0;

let nettspendnugget = new Guardian('NettspendNugget', 0.1, 15, 'buyNettspendNugget');
function incScore() {
    score += nettspendnugget.cps;
}

function scorePlusPlus( ){
    score++;
}

function updatePage() {
    incScore();
    document.getElementById('score').innerHTML = "$" + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);