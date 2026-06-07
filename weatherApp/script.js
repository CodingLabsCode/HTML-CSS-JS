const city = document.querySelector("#city");
const cityInput = document.querySelector("#cityInput")
const temp = document.querySelector("#temp");
const clouds = document.querySelector("#clouds");
const searchBtn = document.querySelector("#searchBtn");
const reset = document.querySelector("#reset")
const apiKey = "API KEY HIDDEN"

function error(msg){
    return  `[ERROR] ${msg}`
};

async function getWeather() {
    const currentCity = cityInput.value

    const response = await fetch (
        `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric`
    )
    if (response.status == 404) {
        city.textContent = error("Invaild City")
        setTimeout(() => {
            city.textContent = ""
        },2000)
    } else {
        const data = await response.json()
        city.textContent = `City: ${data.name}`
        temp.textContent = `temp: ${data.main.temp}°C`
        clouds.textContent = `Cloudds: ${data.weather[0].description}`
    }
    
}

searchBtn.addEventListener("click", getWeather)
reset.addEventListener("click", () => {
    city.textContent = ""
    temp.textContent = ""
    clouds.textContent = ""
})
