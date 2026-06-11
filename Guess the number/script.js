const yes = document.querySelector("#lower")
const no = document.querySelector("#higher")
const submitBtn = document.querySelector("#submit-btn")
const tempText = document.querySelector("#temp")
const tempText2 = document.querySelector("#tempText2")
const tries = document.querySelector("#tries")
const finalnumber = document.querySelector("#final-number")
const number = document.querySelector("#number")

let triesLeft = 3
const numberFinal = Math.floor(Math.random() * 10)
let numberIndex = Math.floor(Math.random() * 10)

submitBtn.disabled = true
number.textContent = numberIndex


function restartGame() {
    yes.disabled = true;
    no.disabled = true;
    tempText2.textContent = "Restarting in 1 second";

    setTimeout(() => {
        location.reload();
    }, 1000);
}


yes.addEventListener("click", () => {
    if (numberFinal == numberIndex) {
        yes.disabled = true
        no.disabled = true
        tempText.textContent = `You got it with ${triesLeft} tries left`
        restartGame()
    } else {
        if (triesLeft <= 0) {
            yes.disabled = true
            no.disabled = true
            tempText.textContent = `You lost the number was ${numberFinal}`
            restartGame()

        } else {
            if (numberFinal > numberIndex) {
                tempText2.textContent = `The number his higher than ${numberIndex}`
                triesLeft --
                if (triesLeft == 1) {
                    submitBtn.disabled = false
                }
                numberIndex = Math.floor(Math.random() * 10)
                number.textContent = numberIndex
                tries.textContent = triesLeft
            } else {
                if (triesLeft == 1) {
                    submitBtn.disabled = false
                }
                tempText2.textContent = `The number is lower than ${numberIndex}`
                triesLeft --
                numberIndex = Math.floor(Math.random() * 10)
                number.textContent = numberIndex
                tries.textContent = triesLeft
            }
        }
    }
})

no.addEventListener("click", () => {
    if (triesLeft <= 0) {
        yes.disabled = true
        no.disabled = true
        tempText.textContent = `You lost the number was ${numberFinal}`
        restartGame()

    } else {
        if (numberFinal > numberIndex) {
                tempText2.textContent = `The number his higher than ${numberIndex}`
                triesLeft --
                if (triesLeft == 1) {
                    submitBtn.disabled = false
                }
                numberIndex = Math.floor(Math.random() * 10)
                number.textContent = numberIndex
                tries.textContent = triesLeft
            } else {
                tempText2.textContent = `The number is lower than ${numberIndex}`
                triesLeft --
                if (triesLeft == 1) {
                    submitBtn.disabled = false
                }
                numberIndex = Math.floor(Math.random() * 10)
                number.textContent = numberIndex
                tries.textContent = triesLeft
            }
    }
})

submitBtn.addEventListener("click", () => {
    const finalNumber = finalnumber.value
    if (finalNumber == numberFinal) {
        yes.disabled = true
        no.disabled = true
        tempText.textContent = `You got it with ${triesLeft} tries left`
        restartGame()

    } else {
        if (triesLeft == 0) {
            tempText.textContent = `You lost the number was ${numberFinal}`
            restartGame()
        } else {
            if (numberFinal > finalNumber) {
                tempText2.textContent = `The number his higher than ${finalNumber}`
                triesLeft --
                numberIndex = Math.floor(Math.random() * 10)
                number.textContent = numberIndex
                tries.textContent = triesLeft
            } else {
                tempText2.textContent = `The number is lower than ${finalNumber}`
                triesLeft --
                numberIndex = Math.floor(Math.random() * 10)
                number.textContent = numberIndex
                tries.textContent = triesLeft
            }
        }
    }
})
