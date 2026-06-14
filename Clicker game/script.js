const increase = document.querySelector("#increase")
const decrease = document.querySelector("#decrease")
const reset = document.querySelector("#reset")
const score = document.querySelector("#score")
const upgradeBtn = document.querySelector("#upgradebtn")
const tempText = document.querySelector("#temptext")
const allTimeClicksText = document.querySelector("#clicksalltime")
const AllupgradesText = document.querySelector("#allupgrades")
const highestScoreText = document.querySelector("#highestscore")
const resetText = document.querySelector("#amountofreset")


let Clicks1000 = false
let highScore1m = false
let upgradeLvl20 = false


let upgrade = 1
let upgradesIndex = 50
let count = 0
let Clicks = 0
let upgradeLvl = 0
let highScore = 0
let resets = 0

function saveGame() {
    localStorage.setItem("count", count)
    localStorage.setItem("clicks", Clicks)
    localStorage.setItem("highScore", highScore)
    localStorage.setItem("upgrades", upgradeLvl)
    localStorage.setItem("upgradePower", upgrade)
    localStorage.setItem("resets", resets)
    localStorage.setItem("upgradesIndex", upgradesIndex)
    localStorage.setItem("highscore1m", highScore1m)
    localStorage.setItem("clicks1k",Clicks1000)
}

function loadGame() {
    count = Number(localStorage.getItem("count")) || 0
    Clicks = Number(localStorage.getItem("clicks")) || 0
    highScore = Number(localStorage.getItem("highScore")) || 0
    upgradeLvl = Number(localStorage.getItem("upgrades")) || 0
    upgrade = Number(localStorage.getItem("upgradePower")) || 1
    resets = Number(localStorage.getItem("resets")) || 0
    upgradesIndex = Number(localStorage.getItem("upgradesIndex")) || 50
    highScore1m = localStorage.getItem("highscore1m") || false
    Clicks1000 = localStorage.getItem("clicks1k") || false

    score.textContent = count
    allTimeClicksText.textContent = Clicks
    highestScoreText.textContent = highScore
    AllupgradesText.textContent = upgradeLvl
    resetText.textContent = resets
}

loadGame()

function text() {
    setTimeout(() => {
        tempText.textContent = ""
        tempText.style.color = "white"
        tempText.classList.add("hidden")
    },1000)
}
function removeHidden() {
    tempText.classList.remove("hidden")
}

increase.addEventListener("click", () => {
    count += upgrade
    score.textContent = count
    if (count > highScore) {
        highScore = count
        highestScoreText.textContent = highScore
    }
    if (Clicks == 1000 && Clicks1000 == false) {
        window.alert("You got to 1k clicks well done")
        Clicks1000 = true
    }
    if (highScore >= 1000000 && highScore1m == false) {
        window.alert("You got a highscore of 1m well done")
        highScore1m = true
    }
    Clicks ++
    allTimeClicksText.textContent = Clicks
    saveGame()
    
})

decrease.addEventListener("click", () => {
    if (count == 0) {
        count ++
        tempText.style.color = "red"
        removeHidden()
        tempText.style.borderColor = "white"
        tempText.textContent = "You cant go below 0"
        text()
    } else {
        count --
        score.textContent = count
    }
})

reset.addEventListener("click", () => {
    if (count == 0) {
        count ++
        tempText.style.color = "red"
        removeHidden()
        tempText.style.borderColor = "white"
        tempText.textContent = "You are already at 0"
        text()
    } else {
        resets ++ 
        resetText.textContent = resets
        saveGame()
        count = 0
        score.textContent = count
    }
})

upgradeBtn.addEventListener("click", () => {
    if (count >= upgradesIndex) {
        upgradeLvl ++
        AllupgradesText.textContent = upgradeLvl
        upgrade *= 2
        upgradesIndex *= 2
        removeHidden()
        tempText.style.color = "green"
        tempText.style.borderColor = "white"
        tempText.textContent = "UPGRADE"
        count = 0
        score.textContent = count
        if (upgradelvl20 == 20 && upgdesLvl20 == false) {
            window.alert("You got to upgrade lvl 20 well done")
            upgradelvl20 = true
        }
        text()
        saveGame()
    } else {
        removeHidden()
        tempText.style.color = "red"
        tempText.style.borderColor = "white"
        tempText.textContent = `You need ${upgradesIndex} score to upgrade`
        text()
    }
})
