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
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";



const carsGallery = [
  {
    name: "Toyota Camry 2022",
    price: "$25,000",
    image: "/Images/Toyota Camry 2022.avif",
  },
  {
    name: "BMW X5 2021",
    price: "$45,000",
    image: "/Images/BMW X5 2021.jpg",
  },
  {
    name: "Mercedes C300",
    price: "$40,000",
    image: "/Images/Mercedes C300.jpg",
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
        }}
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={true}
          modules={[EffectCoverflow, Navigation]}
        >
          <SwiperSlide>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="/Images/Toyota Camry 2022.avif"
                alt="Toyota Camry 2022"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Toyota Camry 2022
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  $25,000
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="/Images/BMW X5 2021.jpg"
                alt="BMW X5 2021"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  BMW X5 2021
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  $45,000
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="/Images/Mercedes C300.jpg"
                alt="Mercedes C300"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mercedes C300
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  $40,000
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
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

