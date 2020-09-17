(() => {
    var mykey = config.MY_KEY;

document.getElementById("search").addEventListener("click", getWeather)

        function getWeather() {

            let city = document.getElementById("city").value;
            let weatherTemp1;
            let weatherTemp2;
            let weatherTemp3;
            let weatherTemp4;
            let weatherTemp5;
            let cityName;
            let feelsLike1;



            axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=' + mykey)
                .then(response => {

                    weatherTemp1 = response.data.list[1].main.temp
                    weatherTemp2 = response.data.list[2].main.temp
                    weatherTemp3 = response.data.list[3].main.temp
                    weatherTemp4 = response.data.list[4].main.temp
                    weatherTemp5 = response.data.list[5].main.temp
                    cityName = response.data.city.name
                    feelsLike1 = response.data.list[1].main.feels_like


                    document.getElementById("temp1").innerHTML = Math.round(weatherTemp1)
                    document.getElementById("temp2").innerHTML = Math.round(weatherTemp2)
                    document.getElementById("temp3").innerHTML = Math.round(weatherTemp3)
                    document.getElementById("temp4").innerHTML = Math.round(weatherTemp4)
                    document.getElementById("temp5").innerHTML = Math.round(weatherTemp5)
                    document.getElementById("cityName").innerHTML = cityName
                    document.getElementById("feels1").innerHTML = feelsLike1


                    console.log(response);
                })
                .catch(function (error) {
                    alert("Please enter the name of a city")
                    console.log(error);
                })
        }
})();
