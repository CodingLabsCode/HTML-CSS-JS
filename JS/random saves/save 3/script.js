const text = document.querySelector("#text");
const nameInput = document.querySelector("#name");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    text.textContent = `Hello ${nameInput.value}`;
})
