//MAKE SURE YOU WAIT A COUPLE OF HOURS
//before TESTing YOUR API!!!!

const key = ""

function showTheResults(data){
    document.querySelector(".city").innerHTML = "Weather in " + data.name
    
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".weather-prediction").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"

    // just need to change the 2 last numbers...
    document.querySelector(".img-prediction").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function findCity(city) {
    
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json() )

    //console.log(data)

    showTheResults(data)
    // where is "city name" i m gonna put '${}' with my variable city -> ${city}
    // instead of "API key" it'll be my variable 'key' -> ${key}
    
    // -> '&lang=pt_br' => to translate.
    // -> '&units=metric' => to convert(°C)
}

function buttonClick() {
    const city = document.querySelector(".city-input").value
    // search for the element using its class

    //console.log(input)//test if the value has been show
    findCity(city)
}