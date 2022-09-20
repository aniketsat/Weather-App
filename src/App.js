import { useState, useEffect } from "react";
import { fetchWeather } from "./api/fetchWeather";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetchWeather("Bhubaneswar").then((data) => setWeather(data));
  }, []);

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(city);
      setWeather(data);
      setCity("");
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDownCapture={search}
      />

      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <p>
            Feels like:{" "}
            <strong>{Math.round(weather.main.feels_like)}&deg;C</strong>
          </p>
          <div className="info">
            <img
              className="city-icon"
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
