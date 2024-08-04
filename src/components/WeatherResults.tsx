import { List } from "../interfaces/WeatherResponse";
import "../App.css";

interface Props {
  results: List[];
  citySelected: string;
}

export const WeatherResults = ({ results, citySelected }: Props) => {
  return (
    <>
      {results.length > 0 && (
        <div>
          <h3 style={{ marginBottom: "1rem" }}>
            Clima de {citySelected} de los proximos 5 dias
          </h3>
          {results.map((result) => (
            <div className="results__container">
              <p>{citySelected}</p>
              <p>{result.dt_txt}</p>
              <p>Minimo: {result.main.temp_min}</p>
              <p>Máximo: {result.main.temp_max}</p>
              <img
                src={`https://openweathermap.org/img/wn/${result.weather[0].icon}.png`}
                alt="weather icon"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
