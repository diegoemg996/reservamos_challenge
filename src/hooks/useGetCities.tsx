import axios from "axios";
import { Places } from "../interfaces/CoordinatesResponse";
import { useEffect, useState } from "react";

export const useGetCities = (locationName: string) => {
  const URL_LOCATIONS = "https://search.reservamos.mx/api/v2/places";
  const [cities, setCities] = useState<Places[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!locationName) {
      setCities([]);
      return;
    }
    const delayDebounceFn = setTimeout(() => {
      getCoordinates();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [locationName]);

  const getCoordinates = async () => {
    if (!locationName) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<Places[]>(
        `${URL_LOCATIONS}?q=${locationName}`
      );
      const filteredCities = response.data.filter(
        (location) => location.result_type === "city"
      );
      setCities(filteredCities);
    } catch (err) {
      console.error("Error fetching cities:", err);
      setError("Error a obtener los resultados");
    } finally {
      setLoading(false);
    }
  };

  const resetCities = () => setCities([]);

  return {
    cities,
    error,
    loading,
    resetCities,
  };
};
