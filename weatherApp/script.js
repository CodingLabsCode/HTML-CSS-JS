const city = document.querySelector("#city");
const cityInput = document.querySelector("#cityInput")
const temp = document.querySelector("#temp");
const clouds = document.querySelector("#clouds");
const btn = document.querySelector("#searchBtn");
const apiKey = "API KEY HIDDEN"

async function getWeather() {
    const currentCity = cityInput.value

    const response = await fetch (
        `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric`
    )
        const data = await response.json()
        city.textContent = `City: ${data.name}`
        temp.textContent = `temp: ${data.main.temp}°C`
        clouds.textContent = `Cloudds: ${data.weather[0].description}`
    
}

btn.addEventListener("click", getWeather)
