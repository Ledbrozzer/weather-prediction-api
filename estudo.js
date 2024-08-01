//API -> OpenWeather:
// Login
// Profile name -> My API keys
// Copy your key
// put it on: ' const key = "" '

//API-Key:
// "Current weather data"
// "API doc"
// "Built-in API request by city name"

//////MAKE SURE YOU WAITED A COUPLE OF HOURS TO TEST YOUR API!!!!


const key = ""
// input information -> function -> to search

function showTheResults(data){
    document.querySelector(".city").innerHTML = "Weather in" + data.name
    //change the information on the HTML
    // on the class ".city" it'll format the .city
    // value on innerHTML(text) -> will be what it´s shown on the 'name'
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + "°F"
    document.querySelector(".weather-prediction").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"

    // -> 'Math.floor()' => evitar N°s quebrados (45.08 °C)=>{45 °C}

    // it has (console) the ' icons: "02d" '
    // if u wanna change the icon:
    // just need to change the 2 last numbers...
    document.querySelector(".img-prediction").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

//functon to search the information on the server
// async to tell JS you're going to access a server
// infos assincronas
async function findCity(city) {
    //call findCity inside the buttonClick
    //when t user click the button -> send the information that was on the input
    //so buttonClick will call for the function findCity
    //sending the value from the input('city') 
    //with that info, gonna send it to the server

    //create variable and pass the 'await'
    //to tell him to wait until the server responses to keep executing/processing the code
    //use fetch to access the server with an address
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then( response => response.json() )

     //const values = fetch(`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`)

    // can use ' `` ' (template literals)
    // to allow u to include variables on ur text
    // gonna use the $ to tell that im gonna put js code in it
    // where is "city name" i m gonna put '${}' with my variable city -> ${city}
    // instead of "API key" it'll be my variable 'key' -> ${key}

    //.then -> after consulting the value, will respond in json(format)

    //console.log(data)//-> show the value inside the variable on the console
    
    // -> '&lang=pt_br' => to translate.
    // -> '&units=metric' => to convert(°C)

    //NEED TO reference the function that will take the server response and show it on the screen!!
    showTheResults(data)
}

function buttonClick() {
    const city = document.querySelector(".city-input").value
    // catch the value
    // search for the element using it class
    // document to access something on the HTML
    // querySelector -> search for something
    // '.' will indicate it's a class, then, put the class name
    // don't want the whole input -> just the value in it
    // -> .value

    //console.log(input)//test if the value has been show
    findCity(city)
}