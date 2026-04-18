import { useEffect, useState } from "react";

export const useCarData = () => {
  const [data, setData] = useState({
    carData: [],
    brands: []
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/finalCars.json")
      .then((response) => response.json())
      .then((data) => {
        setData({
          carData: data.cars,
          brands: data.brands
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
      });
  }, []);

  return { ...data, loading };
};