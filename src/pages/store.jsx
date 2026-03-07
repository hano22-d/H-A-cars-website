import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, InputAdornment } from "@mui/material";
import { Grid } from "@mui/material";
import CarCard from "../components/UiComponents/CarCard-store";
import { Chip } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";
import { TextField, Box, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

import "../App.css";

const carsGallery = [
  {
    name: "Toyota Camry 2022",
    price: "$25,000",
    image: "/Images/Toyota Camry 2022.avif",
    engine: "V4 2.5L",
    transmission: "Automatic",
    mileage: "20,000 km",
    status: "Used",
  },
  {
    name: "BMW X5 2021",
    price: "$58,000",
    image: "/Images/BMW X5 2021.jpg",
    engine: "V6 3.0L",
    transmission: "Automatic",
    mileage: "20,000 km",
    status: "Used",
  },
  {
    name: "Mercedes C300 2020",
    price: "$45,000",
    image: "/Images/Mercedes C300 2020.jpg",
    engine: "V4 2.0L",
    transmission: "Automatic",
    mileage: "10,000 km",
    status: "Used",
  },
  {
    name: "Audi A4 2020",
    price: "$37,000",
    image: "/Images/Audi A4 2020.jpg",
    engine: "V4 2.0L",
    transmission: "Automatic",
    mileage: "25,000 km",
    status: "Used",
  },
  {
    name: "Honda Accord 2021",
    price: "$28,000",
    image: "/Images/Honda Accord 2021.webp",
    engine: "V4 1.5L",
    transmission: "Automatic",
    mileage: "15,000 km",
    status: "Used",
  },
  {
    name: "Ford Mustang 2022",
    price: "$35,000",
    image: "/Images/Ford Mustang 2022.jpg",
    engine: "V8 5.0L",
    transmission: "Automatic",
    mileage: "8,000 km",
    status: "Used",
  },
  {
    name: "Tesla Model 3 2022",
    price: "$40,000",
    image: "/Images/Tesla Model 3 2022.jpg",
    engine: "Electric",
    transmission: "Automatic",
    mileage: "570 km",
    status: "New",
  },
  {
    name: "Chevrolet Malibu 2021",
    price: "$22,000",
    image: "/Images/Chevrolet Malibu 2021.jpg",
    engine: "V4 1.5L",
    transmission: "Automatic",
    mileage: "20,000 km",
    status: "Used",
  },
  {
    name: "Nissan Altima 2020",
    price: "$24,000",
    image: "/Images/Nissan Altima 2020.avif",
    engine: "V4 2.5L",
    transmission: "Automatic",
    mileage: "30,000 km",
    status: "Used",
  },
  {
    name: "Volkswagen Passat 2021",
    price: "$27,000",
    image: "/Images/Volkswagen Passat 2021.jpg",
    engine: "V4 2.0L",
    transmission: "Automatic",
    mileage: "20,000 km",
    status: "Used",
  },
];

function Store() {
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [year, setYear] = useState("");

  const cars = [
    {
      name: "Audi A8",
      price: "$61,000",
      image: "/Images/Audi A8 2021.jpg",
      year: "2021",
      engine: "V6 3.0L",
      transmission: "Automatic",
      mileage: "15,000 km",
      status: "Used",
    },
    {
      name: "BMW M4",
      price: "$65,000",
      image: "/Images/BMW M4 2018.avif",
      year: "2018",
      engine: "V6 4.0L",
      transmission: "Automatic",
      mileage: "20,000 km",
      status: "Used",
    },
    {
      name: "Hyundai Tucson",
      price: "$25,000",
      image: "/Images/Hyundai Tucson 2019.jpg",
      year: "2019",
      engine: "V4 2.0L",
      transmission: "Automatic",
      mileage: "20,000 km",
      status: "Used",
    },
    {
      name: "Hyundai Palisade",
      price: "$45,000",
      image: "/Images/Hyundai Palisade 2023.webp",
      year: "2023",
      engine: "V6 3.8L",
      transmission: "Automatic",
      mileage: "1,000 km",
      status: "New",
    },
    {
      name: "Kia Seltos",
      price: "$19,000",
      image: "/Images/Kia Seltos 2020.avif",
      year: "2020",
      engine: "V4 2.0L",
      transmission: "Automatic",
      mileage: "20,000 km",
      status: "Used",
    },
    {
      name: "Mercedes CLS",
      price: "$70,000",
      image: "/Images/Mercedes CLS 2020.jpg",
      year: "2020",
      engine: "V6 3.0L",
      transmission: "Automatic",
      mileage: "10,000 km",
      status: "Used",
    },
  ];

  const filteredCars = cars.filter(
    (car) =>
      car.name.toLowerCase().includes(search.toLowerCase()) &&
      (maxPrice === "" ||
        parseInt(car.price.replace(/[$,]/g, "")) <= parseInt(maxPrice)) &&
      (year === "" || car.year === year),
  );

  return (
    <>
      {/* Carousel Section */}
      <Container sx={{ mt: 15 }} align="center">
        <Typography
          width={300}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "primary.main",
            fontWeight: "bold",
            fontSize: "45px",
            fontFamily: "ui-serif",
          }}
          gutterBottom
        >
          Suggestions
        </Typography>
      </Container>

      <Container
        sx={{
          maxWidth: { xs: "100%", sm: "90%", md: "850px", lg: "1200px" },
          width: "100%",
          height: "auto",
          mx: "auto",
          mt: { xs: 10, sm: 10, md: 7, lg: 0.1 },
          mb: { xs: 10, sm: 10, md: 7, lg: 20 },
          p: { xs: 2, md: 5, lg: 2 },
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
            depth: 300,
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
                  transition: "all 0.3s ease",
                  boxShadow: "none",
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
                <Chip
                  label={car.status}
                  color="warning"
                  size="small"
                  sx={{ position: "absolute", top: 10, left: 10 }}
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

      <Container sx={{ mt: 4 }}>
        <Container sx={{ my: 10 }} align="center">
          <Typography
            width={350}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "primary.main",
              fontWeight: "bold",
              fontSize: "45px",
              fontFamily: "ui-serif",
            }}
            gutterBottom
          >
            Find Your Car
          </Typography>
        </Container>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Search Bar Section */}

          <TextField
            label="Search Cars"
            variant="outlined"
            value={search}
            fullWidth
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="text.primary" />
                </InputAdornment>
              ),
            }}
            sx={{
              width: "820px",
            }}
          />
          {/* End of Search Bar Section */}

          {/* Max Price Filter */}
          <TextField
            label="Max Price"
            variant="outlined"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            sx={{
              width: "150px",
            }}
            inputProps={{
              inputMode: "numeric",
              lang: "en",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
            }}
          />
          {/* End of Max Price Filter */}

          {/* Year Filter */}
          <TextField
            label="Year"
            variant="outlined"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            sx={{
              width: "150px",
            }}
            inputProps={{
              inputMode: "numeric",
              lang: "en",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          {/* End of Year Filter */}
        </Box>
      </Container>

      {/* Cars Grid Section */}

      <Container sx={{ mt: 4, padding: 5 }}>
        <Grid container spacing={4}>
          {filteredCars.map((car, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <CarCard car={car}/>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* End of Cars Grid Section */}


    </>
  );
}
export default Store;
