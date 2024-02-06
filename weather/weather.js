let weather = {
    fetchWeather: function() {
        const apiKey = Config.apiKey;
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.66&lon=-86.15&exclude=hourly,daily&units=imperial&appid=" + apiKey)
            .then((response) => response.json())
            .then((data) => this.displayMSH(data));
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.07&lon=-85.13&exclude=hourly,daily&units=imperial&appid=" + apiKey)
            .then((response) => response.json())
            .then((data) => this.displayFW(data));
    },
    displayFW: function (data) {
        const { description } = data.weather[0];
        const { temp, humidity, temp_min, temp_max } = data.main;
        const { speed } = data.wind;
        console.log(description, temp, temp_min, temp_max , humidity, speed);
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".description").innerText = description;
        document.querySelector(".high").innerText = "High: " + temp_max + "°F";
        document.querySelector(".low").innerText = "Low: " + temp_min + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "mph";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?indiana')"
        document.querySelector(".weather").classList.remove("loading");
    },
    displayMSH: function (data) {
        const { description } = data.weather[0];
        const { temp, humidity, temp_min, temp_max } = data.main;
        const { speed } = data.wind;
        console.log(description, temp, temp_min, temp_max , humidity, speed);
        document.querySelector(".temp2").innerText = temp + "°F";
        document.querySelector(".description2").innerText = description;
        document.querySelector(".high2").innerText = "High: " + temp_max + "°F";
        document.querySelector(".low2").innerText = "Low: " + temp_min + "°F";
        document.querySelector(".humidity2").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind2").innerText = "Wind Speed: " + speed + "mph";
    }
}

weather.fetchWeather()