let birinciScore = 0
let ikinciScore = 0
let hedefScore = 0

// Elementlerim
const birinciScoreElement = document.querySelector(".birinciScore")
const ikinciScoreElement = document.querySelector(".ikinciScore")
const inputElement = document.querySelector(".input")
const button1 = document.querySelector(".b1")
const button2 = document.querySelector(".b2")
const resetButton = document.querySelector(".b3")

button1.onclick = function(){
    if (hedefScore > 0) {
        birinciScore += 1;
        birinciScoreElement.textContent = birinciScore;

        if(birinciScore === hedefScore){
            birinciScoreElement.style.color = "green";
            ikinciScoreElement.style.color = "red";
            button1.disabled = true;
            button2.disabled = true;
            // birinciScoreElement.classList.add("kazanan")
            // ikinciScoreElement.classList.remove("kazanan")
        }
    }
}

button2.onclick = function(){
    if (hedefScore > 0) {
        ikinciScore += 1;
        ikinciScoreElement.textContent = ikinciScore;

        if(ikinciScore === hedefScore){
            ikinciScoreElement.style.color = "green";
            birinciScoreElement.style.color = "red";
            button1.disabled = true;
            button2.disabled = true;
            // ikinciScoreElement.classList.add("kazanan")
            // birinciScoreElement.classList.remove("kazanan")
        }
    }
}

resetButton.onclick = function() {
    birinciScore = 0;
    ikinciScore = 0;
    hedefScore = 0;

    birinciScoreElement.textContent = birinciScore;
    ikinciScoreElement.textContent = ikinciScore;
    inputElement.value = " "

    button1.disabled = false;
    button2.disabled = false;

    birinciScoreElement.style.color = "black"
    ikinciScoreElement.style.color = "black"
}

inputElement.oninput = function() {
    hedefScore = parseInt(inputElement.value)
    if(isNaN(hedefScore) || hedefScore <= 0) {
        hedefScore = 0
    }
}