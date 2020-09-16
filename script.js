(() => {
    var mykey = config.MY_KEY;

document.getElementById("search").addEventListener("click", getWeather)

        function getWeather() {

            let city = document.getElementById("city").value;
            let weather;

            axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + mykey)
                .then(response => {
                    weather = response.data.list[1].main.temp
                    console.log(response);
                    console.log(weather);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })


        }

})();
