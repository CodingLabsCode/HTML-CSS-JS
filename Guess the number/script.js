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


number.textContent = numberIndex

yes.addEventListener("click", () => {
    if (numberFinal == numberIndex) {
        tempText.textContent = `You got it with ${triesLeft} tries Left`
        yes.disabled = true
        no.disabled = true
        tempText.textContent = `You got it with ${triesLeft} tries left`
        tempText2.textContent = "Restarting in 1 second"
        setTimeout(() => {
            location.reload()
        },1000)
    } else {
        if (triesLeft == 0) {
            yes.disabled = true
            no.disabled = true
            tempText.textContent = `You lost the number was ${numberFinal}`
            tempText2.textContent = "Restarting in 1 second"
            setTimeout(() => {
                location.reload()
            },1000)

        } else {
            triesLeft --
            numberIndex = Math.floor(Math.random() * 10)
            number.textContent = numberIndex
            tries.textContent = triesLeft
        }
    }
})

no.addEventListener("click", () => {
    if (triesLeft == 0) {
        yes.disabled = true
        no.disabled = true
        tempText.textContent = `You lost the number was ${numberFinal}`
        tempText2.textContent = "Restarting in 1 second"
        setTimeout(() => {
            location.reload()
        },1000)

    } else {
        triesLeft --
        numberIndex = Math.floor(Math.random() * 10)
        number.textContent = numberIndex
        tries.textContent = triesLeft
    }
})

submitBtn.addEventListener("click", () => {
    const finalNumber = finalnumber.value
    if (finalNumber == numberFinal) {
        yes.disabled = true
        no.disabled = true
        tempText.textContent = `You got it with ${triesLeft} tries left`
        tempText2.textContent = "Restarting in 1 second"
        setTimeout(() => {
            location.reload()
        },1000)

    } else {
        if (triesLeft == 0) {
            tempText.textContent = `You lost the number was ${numberFinal}`
            tempText2.textContent = "Restarting in 1 second"
            setTimeout(() => {
                location.reload()
            },1000)
        }
    }
})
