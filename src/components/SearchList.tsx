import { Coordinates } from "../interfaces/Coordinates";
import { Places } from "../interfaces/CoordinatesResponse";
import "../App.css";

interface Props {
  cities: Places[];
  setCoordinates: React.Dispatch<React.SetStateAction<Coordinates>>;
  resetCities: () => void;
}

export const SearchList = ({ cities, setCoordinates, resetCities }: Props) => {
  const storeCoordinates = (coordinates: Coordinates) => {
    setCoordinates({
      lat: coordinates.lat,
      long: coordinates.long,
    });
    resetCities();
  };

  return (
    <>
      <div className="search__container">
        {cities.map((city) => (
          <div
            className="search__item"
            key={city.id}
            onClick={() => storeCoordinates({ lat: city.lat, long: city.long })}
          >
            <p>{city.display}</p>
          </div>
        ))}
      </div>
    </>
  );
};
