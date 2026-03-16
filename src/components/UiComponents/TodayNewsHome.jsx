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

import { useTranslation } from "react-i18next";

export default function TodayNewsHome() {

  const {t} = useTranslation()

  const news = [
    {
      description: "home.day.audi.description",
      image: "/Images/Home/Audi-Company.jpg",
    },
    {
      description: "home.day.palisade.description",
      image: "/Images/Home/Hyundai-Palisade-2026.jpeg",
    },
    {
      description: "home.day.mercedes.description",
      image: "/Images/Home/Mercedes-Logo.jpg",
    },
    {
      description: "home.day.kia.description",
      image: "/Images/Home/Kia-EV.webp",
    },
    {
      description: "home.day.alfaRomeo.description",
      image: "/Images/Home/Alfa-Romeo.jpg",
    },
    {
      description: "home.day.bmw.description",
      image: "/Images/Home/BMW-inside.jpg",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        my: 10,
      }}
    >
      <Typography
        variant="h1"
        gutterBottom
        sx={{
          margin: "0 auto",
          width: "fit-content",
        }}
      >
        {t("home.day.title")}
      </Typography>
      <Card
        sx={{
          width: "95vw",
          height: "85vh",
        }}
      >
        <Swiper
        slidesPerView={1}
        loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
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
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.89), transparent)",
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
               {t(item.description)}
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
                  {t("home.day.readMoreBtn")}
                </Button>
              </CardActions>
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
    </Box>
  );
}
