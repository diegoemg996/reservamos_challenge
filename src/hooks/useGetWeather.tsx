import axios from "axios";
import { useEffect, useState } from "react";
import { List, WeatherResponse } from "../interfaces/WeatherResponse";
import { Coordinates } from "../interfaces/Coordinates";

export const useGetWeather = (coordinates: Coordinates) => {
  const { lat, long } = coordinates;
  const URL_WEATHER =
    "https://api.openweathermap.org/data/2.5/forecast/?appid=0eebd1fcf852d29ca0340c5c451d4c9a";
  const [weatherData, setWeatherData] = useState<List[]>([]);
  const [citySelected, setCitySelected] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!lat || !long) return;
    getWeatherData();
  }, [coordinates]);

  const getWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<WeatherResponse>(
        `${URL_WEATHER}&lat=${lat}&lon=${long}&units=metric`
      );
      setWeatherData(response.data.list);
      setCitySelected(response.data.city.name);
    } catch (err) {
      console.error("Error fetching cities:", err);
      setError("Error a obtener los resultados");
    } finally {
      setLoading(false);
    }
  };

  return {
    weatherData,
    error,
    loading,
    citySelected,
  };
};
