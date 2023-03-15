const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c907d8a570msh678b65ca042228fp19b161jsnf7973e384337',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
	const getWeather = (city)=> {
		cityName.innerHTML = city
		fetch ('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
	 console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity_two.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed_two.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		temp_two.innerHTML = response.temp
	})


	.catch(err => console.error(err));
}

	submit.addEventListener("click", (e)=> {
	e.preventDefault()
	getWeather(city.value);
})

getWeather("karachi");


// for lahore //
const getWeatherLahore = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lahore', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        document.getElementById("lahore_cloud_pct").innerHTML = response.cloud_pct
        document.getElementById("lahore_feels_like").innerHTML = response.feels_like
        document.getElementById("lahore_humidity").innerHTML = response.humidity
        document.getElementById("lahore_max_temp").innerHTML = response.max_temp
        document.getElementById("lahore_min_temp").innerHTML = response.min_temp
        document.getElementById("lahore_sunrise").innerHTML = response.sunrise
        document.getElementById("lahore_sunset").innerHTML = response.sunset
        document.getElementById("lahore_temp").innerHTML = response.temp
        document.getElementById("lahore_wind_degrees").innerHTML = response.wind_degrees
        document.getElementById("lahore_wind_speed").innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}

getWeatherLahore();

// for Islambad //
const getWeatherislamabad = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=islamabad', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        document.getElementById("islamabad_cloud_pct").innerHTML = response.cloud_pct
        document.getElementById("islamabad_feels_like").innerHTML = response.feels_like
        document.getElementById("islamabad_humidity").innerHTML = response.humidity
        document.getElementById("islamabad_max_temp").innerHTML = response.max_temp
        document.getElementById("islamabad_min_temp").innerHTML = response.min_temp
        document.getElementById("islamabad_sunrise").innerHTML = response.sunrise
        document.getElementById("islamabad_sunset").innerHTML = response.sunset
        document.getElementById("islamabad_temp").innerHTML = response.temp
        document.getElementById("islamabad_wind_degrees").innerHTML = response.wind_degrees
        document.getElementById("islamabad_wind_speed").innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}

getWeatherislamabad();

// for Murree //
const getWeathermurree = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=murree', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        document.getElementById("murree_cloud_pct").innerHTML = response.cloud_pct
        document.getElementById("murree_feels_like").innerHTML = response.feels_like
        document.getElementById("murree_humidity").innerHTML = response.humidity
        document.getElementById("murree_max_temp").innerHTML = response.max_temp
        document.getElementById("murree_min_temp").innerHTML = response.min_temp
        document.getElementById("murree_sunrise").innerHTML = response.sunrise
        document.getElementById("murree_sunset").innerHTML = response.sunset
        document.getElementById("murree_temp").innerHTML = response.temp
        document.getElementById("murree_wind_degrees").innerHTML = response.wind_degrees
        document.getElementById("murree_wind_speed").innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}

getWeathermurree();


// for Mardan //
const getWeathermardan = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mardan', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        document.getElementById("mardan_cloud_pct").innerHTML = response.cloud_pct
        document.getElementById("mardan_feels_like").innerHTML = response.feels_like
        document.getElementById("mardan_humidity").innerHTML = response.humidity
        document.getElementById("mardan_max_temp").innerHTML = response.max_temp
        document.getElementById("mardan_min_temp").innerHTML = response.min_temp
        document.getElementById("mardan_sunrise").innerHTML = response.sunrise
        document.getElementById("mardan_sunset").innerHTML = response.sunset
        document.getElementById("mardan_temp").innerHTML = response.temp
        document.getElementById("mardan_wind_degrees").innerHTML = response.wind_degrees
        document.getElementById("mardan_wind_speed").innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}

getWeathermardan();


// for Peshawar //
const getWeatherpeshawar= () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=peshawar', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        document.getElementById("peshawar_cloud_pct").innerHTML = response.cloud_pct
        document.getElementById("peshawar_feels_like").innerHTML = response.feels_like
        document.getElementById("peshawar_humidity").innerHTML = response.humidity
        document.getElementById("peshawar_max_temp").innerHTML = response.max_temp
        document.getElementById("peshawar_min_temp").innerHTML = response.min_temp
        document.getElementById("peshawar_sunrise").innerHTML = response.sunrise
        document.getElementById("peshawar_sunset").innerHTML = response.sunset
        document.getElementById("peshawar_temp").innerHTML = response.temp
        document.getElementById("peshawar_wind_degrees").innerHTML = response.wind_degrees
        document.getElementById("peshawar_wind_speed").innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}

getWeatherpeshawar();


// for Quetta //
const getWeatherquetta= () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=quetta', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        document.getElementById("quetta_cloud_pct").innerHTML = response.cloud_pct
        document.getElementById("quetta_feels_like").innerHTML = response.feels_like
        document.getElementById("quetta_humidity").innerHTML = response.humidity
        document.getElementById("quetta_max_temp").innerHTML = response.max_temp
        document.getElementById("quetta_min_temp").innerHTML = response.min_temp
        document.getElementById("quetta_sunrise").innerHTML = response.sunrise
        document.getElementById("quetta_sunset").innerHTML = response.sunset
        document.getElementById("quetta_temp").innerHTML = response.temp
        document.getElementById("quetta_wind_degrees").innerHTML = response.wind_degrees
        document.getElementById("quetta_wind_speed").innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}

getWeatherquetta();


