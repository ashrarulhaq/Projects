document.getElementById('get-weather-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'ae0dafe20b5743ac8dffcfcda9618ac4'; // Replace with your Weatherbit API key
    const apiUrl = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherResult = document.getElementById('weather-result');
            if (data.data && data.data.length > 0) {
                const weatherData = data.data[0];
                weatherResult.innerHTML = `
                    <h2>${weatherData.city_name}</h2>
                    <p>${weatherData.weather.description}</p>
                    <p>Temperature: ${weatherData.temp}°C</p>
                    <p>Humidity: ${weatherData.rh}%</p>
                    <p>Wind Speed: ${weatherData.wind_spd} m/s</p>
                `;
            } else {
                weatherResult.innerHTML = `<p>City not found</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
});
