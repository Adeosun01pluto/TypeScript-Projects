import React, { useState } from 'react'
import "./weather.css"

function Weather() {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [location, setLocation] = useState<any>(null);
  const API_KEY = '48e592a712984eb8b2d183816232008';
  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );
      const data = await response.json();
      setWeatherData(data.current);
      setLocation(data.location)
      console.log(data)
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };
  return (
    <div className='weather-app'>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {!weatherData? "Loading" : (
        <div className="weather-data">
          <h2>Weather in {location.name}</h2>
          <p>Country: {location.country}</p>
          <p>Country Local Time: {location.localtime}</p>
          <p>Temperature: {weatherData.temp_c}°C</p>
          <p>Temperature: {weatherData.temp_f}°F</p>
          <img src={weatherData.condition.icon} alt="" />
          <p>Weather: {weatherData.condition.text}</p>
        </div>
      )}
    </div>
  )
}

export default Weather