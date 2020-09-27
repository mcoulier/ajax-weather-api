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
            let weatherDesc1;
            let weatherDesc2;
            let weatherDesc3;
            let weatherDesc4;
            let weatherDesc5;


            axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=' + mykey)
                .then(response => {

                    for (x = 1; x < 6; x++){
                        let weatherTemp = response.data.list[x].main.temp
                        document.getElementById("temp"+x).innerHTML = Math.round(weatherTemp) + "°C"
                        console.log(weatherTemp)
                    }

                    cityName = response.data.city.name
                    weatherDesc1 = response.data.list[1].weather[0].description
                    weatherDesc2 = response.data.list[2].weather[0].description
                    weatherDesc3 = response.data.list[3].weather[0].description
                    weatherDesc4 = response.data.list[4].weather[0].description
                    weatherDesc5 = response.data.list[5].weather[0].description

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
