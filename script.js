async function fetchWeather() {
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=700055,in&appid=4b17c454b99629cb223d1ae103aa7696`);
    const weather = await resp.json();
    const div = document.querySelector('div');
    week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    month = ["January", "February", "March", "April", "May", "June", "July", "August", "September" , "October", "November", "December"];
    date = new Date();
    div.innerHTML = `<h3 id='lesspad'>${weather.name}, ${weather.sys.country}</h3><p class='date' id='lesspad'>${date.getHours() - 12}:${date.getMinutes()} PM, ${week[date.getDay()]}, ${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}</p><h2>${+((weather.main.temp - 273.15).toFixed(1))}°C</h2><span><p id="bold">Feels like ${+((weather.main.feels_like - 273.15).toFixed(1))}°C. ${weather.weather[0].main}. ${weather.weather[0].description[0].toUpperCase() + weather.weather[0].description.substring(1)}</p><p>Humidity: ${weather.main.humidity}%</p></span>`;
        if (date.getMinutes() < 10) {
            document.querySelector(`p.date`).textContent = `${date.getHours() - 12}:0${date.getMinutes()} PM, ${week[date.getDay()]}, ${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
              }
    if (date.getHours() <= 12) {
        document.querySelector(`p.date`).textContent = `${date.getHours()}:${date.getMinutes()} AM, ${week[date.getDay()]}, ${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        if (date.getMinutes() < 10) {
            document.querySelector(`p.date`).textContent = `${date.getHours()}:0${date.getMinutes()} AM, ${week[date.getDay()]}, ${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        }
    }
}

function main() {
    fetchWeather();
}

main();
