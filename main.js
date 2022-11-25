const apikey = "c5f20d8ebc0a849662963132a0c09343"

let apiCall = function (city) {
    let url1=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric&lang=fr`

fetch(url1).then((response) => response.json().then((data) => {
    console.log(data);
    document.querySelector("#city").innerHTML = data.name;
document.querySelector("#temp").innerHTML ="<i class='fa-solid fa-temperature-three-quarters'></i>" + data.main.temp + "°";

document.querySelector("#humidity").innerHTML = "<i class='fa-solid fa-droplet'></i>" + data.main.humidity ;

document.querySelector("#wind").innerHTML ="<i class='fa-solid fa-wind'></i>" + data.wind.speed + "km/h";
})).catch(err => console.log('Erreur : ' + err));
};


document.querySelector('form').addEventListener('submit', (e)=> {
    e.preventDefault();

let ville = document.querySelector('#inputCity').value;
apiCall(ville);
});

