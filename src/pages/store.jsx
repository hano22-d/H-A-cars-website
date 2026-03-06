import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import CarCard from "../components/UiComponents/CarCard-store";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import "../App.css";

const carsGallery = [
  {
    name: "Toyota Camry 2022",
    price: "$25,000",
    image: "/Images/Toyota Camry 2022.avif",
    engine: "2.5L",
    transmission: "Automatic",
    mileage: "20,000 km",
    status: "New",
  },
  {
    name: "BMW X5 2021",
    price: "$45,000",
    image: "/Images/BMW X5 2021.jpg",
    engine: "3.0L",
    transmission: "Automatic",
    mileage: "15,000 km",
    status: "Used",
  },
  {
    name: "Mercedes C300",
    price: "$40,000",
    image: "/Images/Mercedes C300.jpg",
    engine: "2.0L",
    transmission: "Automatic",
    mileage: "10,000 km",
    status: "New",
  },
  {
    name: "Audi A4 2020",
    price: "$30,000",
    image: "/Images/Audi A4 2020.jpg",
    engine: "2.0L",
    transmission: "Automatic",
    mileage: "25,000 km",
    status: "Used",
  },
  {
    name: "Honda Accord 2021",
    price: "$28,000",
    image: "/Images/Honda Accord 2021.webp",
    engine: "1.5L",
    transmission: "Automatic",
    mileage: "20,000 km",
    status: "Used",
  },
  {
    name: "Ford Mustang 2022",
    price: "$35,000",
    image: "/Images/Ford Mustang 2022.jpg",
    engine: "5.0L",
    transmission: "Automatic",
    mileage: "15,000 km",
    status: "New",
  },
  {
    name: "Tesla Model 3 2022",
    price: "$40,000",
    image: "/Images/Tesla Model 3 2022.jpg",
    engine: "Electric",
    transmission: "Automatic",
    mileage: "5,000 km",
    status: "New",
  },
  {
    name: "Chevrolet Malibu 2021",
    price: "$22,000",
    image: "/Images/Chevrolet Malibu 2021.jpg",
    engine: "1.5L",
    transmission: "Automatic",
    mileage: "20,000 km",
    status: "Used",
  },
  {
    name: "Nissan Altima 2020",
    price: "$24,000",
    image: "/Images/Nissan Altima 2020.avif",
    engine: "2.0L",
    transmission: "Automatic",
    mileage: "30,000 km",
    status: "Used",
  },
  {
    name: "Volkswagen Passat 2021",
    price: "$27,000",
    image: "/Images/Volkswagen Passat 2021.jpg",
    engine: "2.0L",
    transmission: "Automatic",
    mileage: "20,000 km",
    status: "Used",
  },
];

function Store() {
  const cars = [
    {
      name: "Toyota Camry 2022",
      price: "$25,000",
      image: "/cars/camry.jpg",
      year: "2022",
      engine: "2.5L",
      transmission: "Automatic",
      mileage: "20,000 km",
      status: "New",
    },
    {
      name: "BMW X5 2021",
      price: "$45,000",
      image: "/cars/bmw.jpg",
      year: "2021",
      engine: "3.0L",
      transmission: "Automatic",
      mileage: "15,000 km",
      status: "Used",
    },
    {
      name: "Mercedes C300",
      price: "$40,000",
      image: "/cars/mercedes.jpg",
      year: "2022",
      engine: "2.0L",
      transmission: "Automatic",
      mileage: "10,000 km",
      status: "New",
    },
    {
      name: "Audi A4 2020",
      price: "$30,000",
      image: "/cars/audi.jpg",
      year: "2020",
      engine: "2.0L",
      transmission: "Automatic",
      mileage: "25,000 km",
      status: "Used",
    },
    {
      name: "Honda Accord 2021",
      price: "$28,000",
      image: "/cars/accord.jpg",
      year: "2021",
      engine: "1.5L",
      transmission: "Automatic",
      mileage: "20,000 km",
      status: "Used",
    },
    {
      name: "Ford Mustang 2022",
      price: "$35,000",
      image: "/cars/mustang.jpg",
      year: "2022",
      engine: "5.0L",
      transmission: "Automatic",
      mileage: "15,000 km",
      status: "New",
    },
  ];

  return (
    <>
      {/* Carousel Section */}
      <Container
        sx={{
          maxWidth: { xs: "100%", sm: "90%", md: "850px", lg: "1200px" },
          width: "100%",
          height: "auto",
          mx: "auto",
          my: { xs: 20, sm: 20, md: 10, lg: 15 },
          p: { xs: 2, md: 5, lg: 10 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 400,
            modifier: 1,
            slideShadows: true,
            scale: 0.95,
          }}
          navigation={true}
          modules={[EffectCoverflow, Navigation, Autoplay]}
        >
          {carsGallery.map((car, idx) => (
            <SwiperSlide key={idx} sx={{ width: "100%", height: "100%" }}>
              <Card
                sx={{
                  maxWidth: "100%",
                  mx: "auto",
                  borderRadius: 1,
                  transition: "all 0.3s ease",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                  }}
                  image={car.image}
                  alt={car.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {car.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {car.price}
                  </Typography>
                  <Typography>
                    {car.engine} | {car.transmission} | {car.mileage} |{" "}
                    {car.status}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
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
