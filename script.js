(() => {
    var mykey = config.MY_KEY;

document.getElementById("search").addEventListener("click", getWeather)

        function getWeather() {

            let city = document.getElementById("city").value;
            let weatherTemp;

            axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=' + mykey)
                .then(response => {
                    weatherTemp = response.data.list[1].main.temp


                    document.getElementById("temp").innerHTML = weatherTemp
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })


        }

})();
