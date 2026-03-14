import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Box,
  Container,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function TodayNewsHome() {
  const news = [
    {
      description: "Audi unveils new 2026 models, and expends its electric vehicle strategy with the launch of new models and technologies.",
      image: "/Images/Home/Audi-Company.jpg",
    },
    {
      description: "Hyundai Palisade 2026. The latest addition to Hyundai's lineup of luxurious family SUVs.",
      image: "/Images/Home/Hyundai-Palisade-2026.jpeg",
    },
    {
      description: "The giant refuses to be left behind. Mercedes-Benz is expanding its lineup in a remarkable way, planning to launch 16-18 new cars in 2026",
      image: "/Images/Home/Mercedes-Logo.jpg",
    },
    {
      description: "Kia is expanding its electric vehicle lineup with models such as EV3, EV4 and EV5 as part of a strong strategy to transition toward electric vehicles.",
      image: "/Images/Home/Kia-EV.webp",
    },
    {
      description: "Alfa Romeo is developing a new generation of Stelvio and Giulia with hybird and possibly electric technology. A new SUV may also debut in 2027 with gasoline and electric options.",
      image: "/Images/Home/Alfa-Romeo.jpg",
    },
    {
      description: "BMW is preparing to launch new electric vehicles under the Neue Klasse platform, including the iX3 and i3, with plans to introduce more than 40 models by 2027.",
      image: "/Images/Home/BMW-inside.jpg",
    },
  ];
  return (
    <Container sx={{ my: 10, width: "100vw" }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", mb: 5, color: "primary.main" }}>
        Today's News
      </Typography>
      <Card
        sx={{
          height: "85vh",
        }}
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          loop={true}
          grabCursor={true}
          style={{
            width: "100%",
            height: "100%",
            transition: "all 0.5s ease-in-out",
          }}
        >
          {news.map((item, index) => (
            <SwiperSlide key={index}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={item.image}
                  alt={item.title}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.89), transparent)",
                  }}
                />
              <CardContent
                sx={{
                  position: "absolute",
                  bottom: 150,
                  textAlign: "center",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "white",
                  fontStyle: "oblique",
                  fontSize: { xs: 16, sm: 18, md: 20, lg: 25 },
                  width: "80%",
                }}
              >
                {item.description}
              </CardContent>
              <CardActions
                sx={{
                  position: "absolute",
                  bottom: 75,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Button variant="outlined" color="primary">
                  Read More
                </Button>
              </CardActions>
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
    </Container>
  );
}
