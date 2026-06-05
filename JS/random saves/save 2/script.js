const increase = document.querySelector("#increase");
const reset = document.querySelector("#reset");
const decrease = document.querySelector("#decrease");
const score = document.querySelector("#score");
const upgradeID = document.querySelector("#upgrade");
const temp = document.querySelector("#temptext");
let count = 0;
let upgrade = 1;
let upgradeindex = 1;

upgradeID.addEventListener("click", () => {
    if (count >= upgradeindex) {
        upgrade *= 2;
        upgradeindex *= 2;
        count = 0;
        score.textContent = count;
        upgradeID.style.background = "rgb(0,255,17,0.15)";
        setTimeout(() => {
           upgradeID.style.background = "transparent";
        }, 600);
    } else {
        upgradeID.style.backgroundColor = "rgb(255,0,0,0.35)";
        temp.textContent = `You Need ${upgradeindex}`;
        setTimeout(() => {
            upgradeID.style.backgroundColor = "transparent"
            temp.textContent = ""
        },1000)
    }
});

increase.addEventListener("click", () => {
    count += upgrade;
    score.textContent = count;
});
reset.addEventListener("click", () => {
    if (count == 0) {
        reset.style.backgroundColor = "rgb(255,0,0,0.35)";
        temp.textContent = "You Are Already At 0"
        setTimeout(() => {
        reset.style.backgroundColor = "transparent"
        temp.textContent = ""
    }, 1000);
    }
    count = 0;
    score.textContent = count;
});
decrease.addEventListener("click", () => {
    if (count == 0) {
        count ++;
        decrease.style.backgroundColor = "rgb(255,0,0,0.35)";
        temp.textContent = "You Cant Go Below 0"
        setTimeout(() => {
        decrease.style.backgroundColor = "transparent"
        temp.textContent = ""
    }, 1000);
    }
    count --;
    score.textContent = count;
});
