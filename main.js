const apikey = "c5f20d8ebc0a849662963132a0c09343"

let url1=`https://api.openweathermap.org/data/2.5/weather?q=Marseille&appid=${apikey}&units=metric&lang=fr`

fetch(url1).then((response) => response.json().then((data) => {
    console.log(data);
    document.querySelector("#city").innerHTML = data.name;
document.querySelector("#temp").innerHTML = data.main.temp + "°";
document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
document.querySelector("#wind").innerHTML = data.wind.speed + "km/h";
}))

