import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { Grid } from "@mui/material";
import CarCard from "./CarCard-store";

const carsGallery = [
  {
    name: "Toyota Camry 2022",
    price: "$25,000",
    image: "/cars/camry.jpg",
  },
  {
    name: "BMW X5 2021",
    price: "$45,000",
    image: "/cars/bmw.jpg",
  },
  {
    name: "Mercedes C300",
    price: "$40,000",
    image: "/cars/mercedes.jpg",
  },
];

function Store() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoChange = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % carsGallery.length);
    }, 15000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % carsGallery.length);
    }, 10000); // 10 ثانية

    return () => clearInterval(interval);
  }, []);

  const nextCar = () => {
    clearInterval(intervalRef.current);
    setIndex((prev) => (prev + 1) % carsGallery.length);
    startAutoChange();
  };

  const prevCar = () => {
    clearInterval(intervalRef.current);
    setIndex((prev) => (prev - 1 + carsGallery.length) % carsGallery.length);
    startAutoChange();
  };

  const car = carsGallery[index];

  const cars = [
    {
      name: "Toyota Camry 2022",
      price: "$25,000",
      image: "/cars/camry.jpg",
      year: "2022",
      engine: "2.5L",
      transmission: "Automatic",
      mileage: "20,000 km",
      status: "New"
    },
    {
      name: "BMW X5 2021",
      price: "$45,000",
      image: "/cars/bmw.jpg",
      year: "2021",
      engine: "3.0L",
      transmission: "Automatic",
      mileage: "15,000 km",
      status: "Used"
    },
    {
      name: "Mercedes C300",
      price: "$40,000",
      image: "/cars/mercedes.jpg",
      year: "2022",
      engine: "2.0L",
      transmission: "Automatic",
      mileage: "10,000 km",
      status: "New"
    },
    {
      name: "Audi A4 2020",
      price: "$30,000",
      image: "/cars/audi.jpg",
      year: "2020",
      engine: "2.0L",
      transmission: "Automatic",
      mileage: "25,000 km",
      status: "Used"
    },
    {
      name: "Honda Accord 2021",
      price: "$28,000",
      image: "/cars/accord.jpg",
      year: "2021",
      engine: "1.5L",
      transmission: "Automatic",
      mileage: "20,000 km",
      status: "Used"
    },
    {
      name: "Ford Mustang 2022",
      price: "$35,000",
      image: "/cars/mustang.jpg",
      year: "2022",
      engine: "5.0L",
      transmission: "Automatic",
      mileage: "15,000 km",
      status: "New"
    }
  ];

  return (
    <>
      {/* Carousel Section */}
      <Container
        sx={{
          maxWidth: { xs: 0.8, lg: 0.55 },
          height: "auto",
          mx: "auto",
          my: 20,
          p: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        <button
          onClick={prevCar}
          style={{
            backgroundColor: "#ff4c29",
            color: "white",
            border: "none",
            borderRadius: "5px",
            width: "50px",
            height: "50px",
          }}
        >
          <SkipPreviousIcon />
        </button>

        <Card sx={{ maxWidth: 400, width: "100%", margin: "0" }}>
          <CardMedia
            component="img"
            height="250"
            image={car.image}
            alt={car.name}
          />
          <CardContent>
            <Typography variant="h6">{car.name}</Typography>
            <Typography variant="h5" color="primary">
              {car.price}
            </Typography>
          </CardContent>
        </Card>

        <button
          onClick={nextCar}
          style={{
            backgroundColor: "#ff4c29",
            color: "white",
            border: "none",
            borderRadius: "5px",
            width: "50px",
            height: "50px",
          }}
        >
          <SkipNextIcon />
        </button>
      </Container>
      {/* End of Carousel Section */}

      {/* Cars Grid Section */}

      <Container sx={{ mt: 4, padding: 5 }}>
        <Grid container spacing={4}>
          {cars.map((car, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <CarCard car={car} />
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* End of Cars Grid Section */}
    </>
  );
}
export default Store;
