const apikey = "c5f20d8ebc0a849662963132a0c09343"

let url1=`https://api.openweathermap.org/data/2.5/weather?q=Marseille&appid=${apikey}`

fetch(url1).then(response => response.json())