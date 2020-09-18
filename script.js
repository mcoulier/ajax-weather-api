(() => {
    const mykey = config.MY_KEY;
    const accessKey = config.MY_ACCESSKEY;
    const usplashKey = config.MY_USPLASHKEY;

    ///const Unsplash = require('unsplash-js').default;
    //const toJson = require('unsplash-js').toJson;
    //const unsplash = new Unsplash({ accessKey: config.MY_ACCESSKEY });

document.getElementById("search").addEventListener("click", getWeather)

        function getWeather() {

            let city = document.getElementById("city").value;
            let weatherTemp1;
            let weatherTemp2;
            let weatherTemp3;
            let weatherTemp4;
            let weatherTemp5;
            let cityName;
            let weatherDesc1;
            let weatherDesc2;
            let weatherDesc3;
            let weatherDesc4;
            let weatherDesc5;


            axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=' + mykey)
                .then(response => {

                    weatherTemp1 = response.data.list[1].main.temp
                    weatherTemp2 = response.data.list[2].main.temp
                    weatherTemp3 = response.data.list[3].main.temp
                    weatherTemp4 = response.data.list[4].main.temp
                    weatherTemp5 = response.data.list[5].main.temp
                    cityName = response.data.city.name
                    weatherDesc1 = response.data.list[1].weather[0].description
                    weatherDesc2 = response.data.list[2].weather[0].description
                    weatherDesc3 = response.data.list[3].weather[0].description
                    weatherDesc4 = response.data.list[4].weather[0].description
                    weatherDesc5 = response.data.list[5].weather[0].description

                    document.getElementById("temp1").innerHTML = Math.round(weatherTemp1) + "°C"
                    document.getElementById("temp2").innerHTML = Math.round(weatherTemp2) + "°C"
                    document.getElementById("temp3").innerHTML = Math.round(weatherTemp3) + "°C"
                    document.getElementById("temp4").innerHTML = Math.round(weatherTemp4) + "°C"
                    document.getElementById("temp5").innerHTML = Math.round(weatherTemp5) + "°C"
                    document.getElementById("cityName").innerHTML = cityName
                    document.getElementById("desc1").innerHTML = weatherDesc1
                    document.getElementById("desc2").innerHTML = weatherDesc2
                    document.getElementById("desc3").innerHTML = weatherDesc3
                    document.getElementById("desc4").innerHTML = weatherDesc4
                    document.getElementById("desc5").innerHTML = weatherDesc5

                    console.log(response);
                })
                .catch(function (error) {
                    alert("Please enter the name of a city")
                    console.log(error);
                })

            axios.get('https://api.unsplash.com/search/photos?query=' + city + '&client_id=' + config.MY_ACCESSKEY)
                .then(function (response) {
                    if (!response.ok){
                        document.getElementById("cityPicture").setAttribute("src", response.data.results[1].urls.small)
                        console.log(response);
                    }
                })
        }

    document.getElementById("city").addEventListener("keyup", function(e){
        if (e.key === "Enter"){
            getWeather()

        }
    });

})();
