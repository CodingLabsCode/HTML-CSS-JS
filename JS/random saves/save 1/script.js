const increase = document.querySelector("#increase");
const reset = document.querySelector("#reset");
const decrease = document.querySelector("#decrease");
const score = document.querySelector("#score");
let count = 0

increase.addEventListener("click", () => {
    count ++;
    score.textContent = count;
})
reset.addEventListener("click", () => {
    if (count == 0) {
        count ++;
        reset.style.background = "rgb(255,0,0,0.35)";
        setTimeout(() => {
        reset.style.backgroundColor = "transparent"
    }, 1000);
    }
    count = 0;
    score.textContent = count;
})
decrease.addEventListener("click", () => {
    if (count == 0) {
        count ++;
        decrease.style.background = "rgb(255,0,0,0.35)";
        setTimeout(() => {
        decrease.style.backgroundColor = "transparent"
    }, 1000);
    }
    count --;
    score.textContent = count;
})
