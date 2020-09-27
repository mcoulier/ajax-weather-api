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
            let cityName;

            axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=' + mykey)
                .then(response => {

                    for (x = 1; x < 6; x++){
                        let weatherTemp = response.data.list[x].main.temp
                        document.getElementById("temp"+x).innerHTML = Math.round(weatherTemp) + "°C"
                        console.log(weatherTemp)
                    }

                    for (y = 1; y < 6; y++){
                        let weatherDesc = response.data.list[y].weather[0].description
                        document.getElementById("desc"+y).innerHTML = weatherDesc

                    }

                    cityName = response.data.city.name

                    document.getElementById("cityName").innerHTML = cityName

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
