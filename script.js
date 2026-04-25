const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const result = document.getElementById("result");

const apiKey = "19e991b3d350ecb2762fc5f90e3c98ad";

searchBtn.addEventListener("click", function() {
    const city = cityInput.value;

    if (city=== "") {
        alert("Enter a city first!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            result.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>🌡️ Temperature: ${data.main.temp} °C</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>🌤️ ${data.weather[0].description}</p>
            `;
        })
        .catch(function() {
            result.innerHTML = "<p>City not found. Try again.</p>";
        });
});