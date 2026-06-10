const score = document.querySelector("#score")
const increase = document.querySelector("#increase")
const decrease = document.querySelector("#decrease")
const upgradeBtn = document.querySelector("#upgradebtn")
const tempText = document.querySelector("#temptext")
const click = document.querySelector("#clicks")
const amountOfUpgrade = document.querySelector("#amountofupgrades")
const resetBtn = document.querySelector("#reset")
const highscore = document.querySelector("#highscore")

let highestscore = 0
let clicks = 0
let upgrades = 0
let count = 0
let upgrade = 1
let upgradeIndex = 50

resetBtn.addEventListener("click", () => {
     if (count == 0) {
        reset.style.backgroundColor = "rgba(255,0,0,0.35)"
        tempText.textContent = "You are already at  0"
        tempText.style.color = "red"
        setTimeout(() => {
            reset.style.backgroundColor = "transparent"
            tempText.textContent = ""
        },1000)
    } else {
        count = 0
        score.textContent = count
    }
})


upgradeBtn.addEventListener("click", () => {
    if (count < upgradeIndex) {
        tempText.style.color = "red"
        tempText.textContent = `You need ${upgradeIndex} score to upgrade`
        upgradeBtn.style.backgroundColor = "rgb(255,0,0,0.35)";
        setTimeout(() => {
            tempText.textContent = ""
        upgradeBtn.style.backgroundColor = "transparent"
        },1000)
    } else {
        upgrades ++
        amountOfUpgrade.textContent = `Amount of upgrades: ${upgrades}`
        upgrade *= 2
        upgradeIndex *= 2
        count = 0
        score.textContent = count
        tempText.style.color = "green"
        tempText.textContent = "UPGRADE"
        upgradeBtn.style.backgroundColor = "rgba(0,255,17,0.15)"
        
        setTimeout(() => {
            tempText.textContent = ""
            upgradeBtn.style.backgroundColor = "transparent"
        },1000)
    }
})

increase.addEventListener("click", () => {
    count += upgrade
    clicks ++
    click.textContent = `All time clicks: ${clicks}`
    score.textContent = count
    if (count > highestscore) {
        highestscore = count
        highscore.textContent = `Highest score: ${highestscore}`
    }
})

decrease.addEventListener("click", () => {
    if (count == 0) {
        count ++
        decrease.style.backgroundColor = "rgba(255,0,0,0.35)"
        tempText.textContent = "You cant go below 0"
        tempText.style.color = "red"
        setTimeout(() => {
            decrease.style.backgroundColor = "transparent"
            tempText.textContent = ""
        },1000)
    } else {
        count --
        score.textContent = count
    }
})
