const apiKey = "8dfc2c49504af46c2b3f2c9286a198c4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    //checking city name is valid or not
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        //for displaying the weather if searched
        var data = await response.json();

        // console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./weather_img/images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./weather_img/images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./weather_img/images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./weather_img/images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./weather_img/images/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "./weather_img/images/snow.png";
        }


        document.querySelector(".weather").style.display = "block"; //for displaying the weather if searched
        document.querySelector(".error").style.display = "none";
    }
}



searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value); //give the city name as an argument
});


checkWeather();