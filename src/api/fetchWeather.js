import axios from "axios";

export const fetchWeather = async (city) => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );
  return data;
};
