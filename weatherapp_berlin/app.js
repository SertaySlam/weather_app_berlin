var APPID = "a43e2ee7fbb4b9ab81b8df4452def6d5"

var loc;
var icon;
var humidity;
var wind;
var direction;

function updateById(id) {
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
        "id=" + id +
        "&APPID=" + APPID;
        sendRequest(url);
}

function sendRequest(url){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var data = JSON.parse(xmlhttp.responseText);
        var weather = {};
        weather.icon = data.weather[0].id;
        weather.humidity = data.main.humidity;
        weather.wind = data.wind.speed;
      //  weather.direction = degreesToDirection(data.wind.deg);
        weather.loc = data.name;
        weather.temp = K2C(data.main.temp);
        update(weather);
        
            }

        };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
    }


/*function degreesToDirection(degree) {
    var range = 360/16;
    var low = 360 - range/2;
    var high = (low + range) % 360;
    var angles = ["N", "NNE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW" ]; 
    for (i in angles) {
        if(degrees >= low && degrees < high)
                return angles[i];
                

        low = (low +range) & 360;
        high = (high + range) & 360;       
    } */
   
   
    //return "N";


function K2C(k) {

    return Math.round(k- 273.15);
}

function K2C(k) {

    return Math.round(k*(9/5) - 459.69);
}

function update(weather){
    wind.innerHTML = weather.wind;
    direction.innerHTML = weather.direction;
    humidity.innerHTML = weather.humidity;
    loc.innerHTML = weather.loc;
    temp.innerHTML = weather.temp;
    icon.src = "imgs/codes/" + weather.icon + ".png"; 
    console.log(icon.src);
}

window.onload = function () {
    temp = document.getElementById("temperature");
    loc = document.getElementById("location");
    icon = document.getElementById("icon");
    humidity = document.getElementById("humidity");
    wind = document.getElementById("wind");
    direction = document.getElementById("direction");

    updateById(2950157);

}
    //http://api.openweathermap.org/data/2.5/weather?id=2172797&APPID=a43e2ee7fbb4b9ab81b8df4452def6d5