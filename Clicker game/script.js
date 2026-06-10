const score = document.querySelector("#score")
const increase = document.querySelector("#increase")
const decrease = document.querySelector("#decrease")
const upgradeBtn = document.querySelector("#upgradebtn")
const tempText = document.querySelector("#temptext")
const click = document.querySelector("#clicks")
const amountOfUpgrade = document.querySelector("#amountofupgrades")

let clicks = 0
let upgrades = 0
let count = 0
let upgrade = 1
let upgradeIndex = 50

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
    click.textContent = `Amount of clicks: ${clicks}`
    score.textContent = count 
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
