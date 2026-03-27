import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, InputAdornment } from "@mui/material";
import { Grid } from "@mui/material";
import CarCard from "../components/UiComponents/CarCardStore";
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
import { cars } from "../components/UiComponents/CarsDataStore";
import "../App.css";
import { useTranslation } from "react-i18next";
import DynamicTitle from "../components/layout/titleDynamic";

function Store() {
  const { t } = useTranslation();

  const carsGallery = [
    {
      name: "main.carsGallery.camry2022.name",
      price: "$25,000",
      image: "/Images/Store/Toyota Camry 2022.avif",
      engine: "main.carsGallery.camry2022.engine",
      transmission: "main.carsGallery.camry2022.transmission",
      mileage: "main.carsGallery.camry2022.mileage",
      status: "main.carsGallery.camry2022.status",
    },
    {
      name: "main.carsGallery.bmwX52021.name",
      price: "$58,000",
      image: "/Images/Store/BMW X5 2021.jpg",
      engine: "main.carsGallery.bmwX52021.engine",
      transmission: "main.carsGallery.bmwX52021.transmission",
      mileage: "main.carsGallery.bmwX52021.mileage",
      status: "main.carsGallery.bmwX52021.status",
    },
    {
      name: "main.carsGallery.mercedesC300.name",
      price: "$45,000",
      image: "/Images/Store/Mercedes C300 2020.jpg",
      engine: "main.carsGallery.mercedesC300.engine",
      transmission: "main.carsGallery.mercedesC300.transmission",
      mileage: "main.carsGallery.mercedesC300.mileage",
      status: "main.carsGallery.mercedesC300.status",
    },
    {
      name: "main.carsGallery.mercedesCLS.name",
      price: "$54,000",
      image: "/Images/Store/Mercedes-Benz CLS 2020.jpg",
      engine: "main.carsGallery.mercedesCLS.engine",
      transmission: "main.carsGallery.mercedesCLS.transmission",
      mileage: "main.carsGallery.mercedesCLS.mileage",
      status: "main.carsGallery.mercedesCLS.status",
    },
    {
      name: "main.carsGallery.accord2021.name",
      price: "$28,000",
      image: "/Images/Store/Honda Accord 2021.webp",
      engine: "main.carsGallery.accord2021.engine",
      transmission: "main.carsGallery.accord2021.transmission",
      mileage: "main.carsGallery.accord2021.mileage",
      status: "main.carsGallery.accord2021.status",
    },
    {
      name: "main.carsGallery.mustang2022.name",
      price: "$35,000",
      image: "/Images/Store/Ford Mustang 2022.jpg",
      engine: "main.carsGallery.mustang2022.engine",
      transmission: "main.carsGallery.mustang2022.transmission",
      mileage: "main.carsGallery.mustang2022.mileage",
      status: "main.carsGallery.mustang2022.status",
    },
    {
      name: "main.carsGallery.teslaModel3.name",
      price: "$40,000",
      image: "/Images/Store/Tesla Model 3 2022.jpg",
      engine: "main.carsGallery.teslaModel3.engine",
      transmission: "main.carsGallery.teslaModel3.transmission",
      mileage: "main.carsGallery.teslaModel3.mileage",
      status: "main.carsGallery.teslaModel3.status",
    },
    {
      name: "main.carsGallery.malibu2021.name",
      price: "$22,000",
      image: "/Images/Store/Chevrolet Malibu 2021.jpg",
      engine: "main.carsGallery.malibu2021.engine",
      transmission: "main.carsGallery.malibu2021.transmission",
      mileage: "main.carsGallery.malibu2021.mileage",
      status: "main.carsGallery.malibu2021.status",
    },
    {
      name: "main.carsGallery.altima2020.name",
      price: "$24,000",
      image: "/Images/Store/Nissan Altima 2020.avif",
      engine: "main.carsGallery.altima2020.engine",
      transmission: "main.carsGallery.altima2020.transmission",
      mileage: "main.carsGallery.altima2020.mileage",
      status: "main.carsGallery.altima2020.status",
    },
    {
      name: "main.carsGallery.passat2021.name",
      price: "$27,000",
      image: "/Images/Store/Volkswagen Passat 2021.jpg",
      engine: "main.carsGallery.passat2021.engine",
      transmission: "main.carsGallery.passat2021.transmission",
      mileage: "main.carsGallery.passat2021.mileage",
      status: "main.carsGallery.passat2021.status",
    },
  ];

  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [year, setYear] = useState("");

  const filteredCars = cars.filter(
    (car) =>
      car.name.toLowerCase().includes(search.toLowerCase()) &&
      (maxPrice === "" ||
        parseInt(car.price.replace(/[$,]/g, "")) <= parseInt(maxPrice)) &&
      (year === "" || car.year === year)
  );

  return (
    <>
    <DynamicTitle title={'H & A Cars - Store Page'} />
      {/* Carousel Section */}
      <Container sx={{ mt: 15 }}>
        <Typography
          variant="h3"
          fontSize={{ lg: 45, xs: 40 }}
          textAlign={"center"}
          gutterBottom
        >
          {t("main.Suggestions")}
        </Typography>
      </Container>

      <Container
        sx={{
          maxWidth: { xs: "100%", sm: "90%", md: "850px", lg: "1200px" },
          width: "100%",
          height: "auto",
          mx: "auto",
          mt: { xs: 5, sm: 10, md: 7, lg: 0.1 },
          mb: { xs: 7, sm: 10, md: 7, lg: 20 },
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
          breakpoints={{
            640: { slidesPerView: 1 },
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
                  alt={t(car.name)}
                />

                <Chip
                  label={t(car.status)}
                  color="warning"
                  size="small"
                  sx={{ position: "absolute", top: 10, left: 10 }}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {t(car.name)}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {car.price}
                  </Typography>

                  <Typography>
                    {t(car.engine)} | {t(car.transmission)} | {t(car.mileage)} |{" "}
                    {t(car.status)}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      {/* End of Carousel Section */}

      <Container sx={{ mt: 4 }}>
        <Container sx={{ my: 5 }}>
          <Typography
            textAlign={"center"}
            variant="h3"
            fontSize={{ lg: 45, xs: 40 }}
            gutterBottom
          >
            {t("main.findCar")}
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
            label={t("main.SearchCars")}
            variant="outlined"
            value={search}
            fullWidth
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ color: "text.primary" }}>
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
            label={t("main.MaxPrice")}
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
                <InputAdornment position="start" sx={{ color: "text.primary" }}>
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
            }}
          />
          {/* End of Max Price Filter */}

          {/* Year Filter */}
          <TextField
            label={t("main.Year")}
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
                <InputAdornment position="start" sx={{ color: "text.primary" }}>
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
