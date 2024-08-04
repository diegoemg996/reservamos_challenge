import { Input } from "antd";
import "./App.css";
import { useState } from "react";
import { useGetCities } from "./hooks/useGetCities";
import { SearchList } from "./components/SearchList";
import { Coordinates } from "./interfaces/Coordinates";
import { useGetWeather } from "./hooks/useGetWeather";
import { WeatherResults } from "./components/WeatherResults";
import { Navbar } from "./components/Navbar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    cities,
    loading,
    resetCities,
    error: errorCities,
  } = useGetCities(searchTerm);
  const [coordinates, setCoordinates] = useState<Coordinates>({
    lat: "",
    long: "",
  });
  const {
    weatherData,
    loading: loadingWeather,
    citySelected,
    error: errorWeather,
  } = useGetWeather(coordinates);

  return (
    <>
      <Navbar />
      <div className="app__container">
        <h2 style={{ marginTop: "1rem" }}>Pronóstico del clima</h2>
        <div className="app__search">
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Ingrese ciudad"
          />
          {loading ? (
            <p>Cargando...</p>
          ) : (
            <SearchList
              cities={cities}
              setCoordinates={setCoordinates}
              resetCities={resetCities}
            />
          )}
        </div>

        {loadingWeather ? (
          <p>Cargando...</p>
        ) : (
          <WeatherResults results={weatherData} citySelected={citySelected} />
        )}

        {(errorCities || errorWeather) && (
          <div>Ha habido un error obteniendo los datos</div>
        )}
      </div>
    </>
  );
}

export default App;
