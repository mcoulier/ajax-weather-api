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

            axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=' + mykey)
                .then(response => {

                    weatherTemp1 = response.data.list[1].main.temp
                    weatherTemp2 = response.data.list[2].main.temp
                    weatherTemp3 = response.data.list[3].main.temp
                    weatherTemp4 = response.data.list[4].main.temp
                    weatherTemp5 = response.data.list[5].main.temp
                    cityName = response.data.city[2]

                    document.getElementById("temp1").innerHTML = Math.round(weatherTemp1)
                    document.getElementById("temp2").innerHTML = Math.round(weatherTemp2)
                    document.getElementById("temp3").innerHTML = Math.round(weatherTemp3)
                    document.getElementById("temp4").innerHTML = Math.round(weatherTemp4)
                    document.getElementById("temp5").innerHTML = Math.round(weatherTemp5)

                    console.log(response);
                    console.log(cityName);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
})();
