const city = document.querySelector("#city")
const btn = document.querySelector("#btn")
const resetBtn = document.querySelector("#resetbtn")
const condtions = document.querySelector("#condtions")
const temp = document.querySelector("#temp")
const userinput = document.querySelector("#userinput")
const errorText = document.querySelector("#errorText")
const apiKey = "e969fa1f1d33e02j1214f85b41e8937"

function reset() {location.reload()}

const errorCodes = {
    400: "No city data",
    401: "Invalid API key",
    404: "City not found",
    429: "API limit reached",
    500: "Internal server error",
    502: "Bad gateway",
    503: "Service unavailable",
    504: "Gateway timeout"
}

async function getWeather() {
     const currentCity = userinput.value 

     const response =  await fetch (
          `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric`
     )

     if (!response.ok) {
        errorText.textContent = `${response.status}  ${errorCodes[response.status]}`
        settimeout(() => {
            city.textContent = ""
        },1000)
     }else {

     
        const data = await response.json()
        city.textContent = `City: ${data.name}`
        temp.textContent = `Temp: ${data.main.temp}`
        condtions.textContent = `Condtions: ${data.weather[0].description}`
     }
}

btn.addEventListener("click", getWeather)
resetBtn.addEventListener("click", reset)
