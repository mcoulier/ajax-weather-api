(() => {
    var mykey = config.MY_KEY;

document.getElementById("search").addEventListener("click", getWeather)
    {
        function getWeather() {
            let city = document.getElementById("city")
            const axios = require('axios');
            axios.get('api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + mykey)
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })


        }
}
})()
