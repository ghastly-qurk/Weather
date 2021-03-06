`use strict`;

async function fetchWeather() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=700055,in&appid=4b17c454b99629cb223d1ae103aa7696`
  );
}

async function weatherJSON() {
  return (await fetchWeather()).json();
}

async function main() {
  const weather = await weatherJSON();
  const div = document.querySelector(`div#weather`);

  const date = new Date();
  const week = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`
  ];
  const month = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`
  ];

  div.innerHTML =
    `<h3 class='mb-0 pb-0'>
      ${weather.name}, ${weather.sys.country}
    </h3>
    <p class='my-0 py-0 text-secondary'>
      ${date.getHours() - 12}:${date.getMinutes()} PM, ${week[date.getDay()]}, ${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}
    </p>
    
    <h1 class='inline-flex center-y my-3 py-3'>
        <img src='http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png' height='50' width='50' />
        ${+(weather.main.temp - 273.15).toFixed(1)}°C
    </h1>

    <div class='bold'>
      <p class='my-0 py-0'>
        Feels like ${+(weather.main.feels_like - 273.15).toFixed(1)}°C. ${weather.weather[0].main}. ${weather.weather[0].description[0].toUpperCase() + weather.weather[0].description.substring(1)}
      </p>
      <p class='my-0 py-0'>
        Humidity: ${weather.main.humidity}%
      </p>
    </div>`;

  if (date.getHours() <= 12) {
    document.querySelector(
      `p.text-secondary`
    ).textContent = `${date.getHours()}:${date.getMinutes()} AM, ${
      week[date.getDay()]
    }, ${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    if (date.getMinutes() < 10) {
      document.querySelector(
        `p.text-secondary`
      ).textContent = `${date.getHours()}:0${date.getMinutes()} AM, ${
        week[date.getDay()]
      }, ${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }
  } else {
    if (date.getMinutes() < 10) {
      document.querySelector(`p.text-secondary`).textContent = `${
        date.getHours() - 12
      }:0${date.getMinutes()} PM, ${week[date.getDay()]}, ${
        month[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`;
    }
  }
}

main();
