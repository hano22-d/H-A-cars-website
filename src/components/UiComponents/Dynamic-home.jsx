import React, { useState } from "react";
import { Box, Typography, Button, Card } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "../../App.css";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Cars",
    description:
      "Explore our wide range of cars from leading global brands such as Mercedes, BMW, Audi, and more. Find the perfect car that suits your style and needs.",
    image: "/Images/Mercedes-S-Class.jpg",
    buttonTitle: "Explore Cars",
  },
  {
    title: "Compare",
    description:
      "Compare different car easily to see the differences in performance, features, and prices. Make an informed decision before making your purchase.",
    image: "/Images/Mercedes-S-Class-1.jpg",
    buttonTitle: "Compare Cars",
  },
  {
    title: "Store",
    description:
      "Visit our store to find the best deals on cars, accessories, and services. We offer competitive prices and excellent customer service to ensure you have a great shopping experience.",
    image: "/Images/Mercedes-S-Class-2.jpg",
    buttonTitle: "Visit Store",
  },
  {
    title: "News",
    description:
      "Stay updated with the latest news and trends in the automotive world.",
    image: "/Images/Mercedes-S-Class-3.webp",
    buttonTitle: "Read News",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        my: 10,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "85vh",
          position: "relative",
          display: "flex",
          flexDirection: { lg: "row", xs: "column" },
          justifyContent: "space-between",
          alignItems: "center",
          px: 8,
          color: "white",
          overflow: "hidden",
        }}
      >
        {/* الخلفية المتغيرة */}
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "all 0.7s ease",
              opacity: index === activeIndex ? 1 : 0,
              zIndex: -2,
              transform: index === activeIndex ? "scale(1)" : "scale(1.25)",
            }}
          />
        ))}

        {/* overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: -1,
          }}
        />

        {/* النص */}
        <Box
          sx={{
            textAlign: { lg: "left", xs: "center" },
            width: { xs: "100%", sm: "100%", md: "50%", lg: "400px" },
            zIndex: 2,
            position: 'relative',
            top: {xs: 25,lg: 0}
          }}
        >
          <Typography variant="h1" fontWeight="bold">
            {slides[activeIndex].title}
          </Typography>

          <Typography sx={{ mt: 2, mb: { lg: 3, xs: 2 } }}>
            {slides[activeIndex].description}
          </Typography>

          <Button
            variant="contained"
            onClick={() =>
              navigate(`/${slides[activeIndex].title.toLowerCase()}`)
            }
          >
            {slides[activeIndex].buttonTitle}
          </Button>
        </Box>

        {/* السلايدر */}
        <Box
          sx={{
            width: { lg: "45vw", xs: "95vw" },
            zIndex: 2,
            position: "relative",
            left: { xs: "0", md: "6%" },
            bottom: { lg: 0, xs: "6%" },
          }}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={3}
            spaceBetween={5}
            navigation
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              0: {
                centeredSlides: true,
              },
              600: {
                centeredSlides: true,
              },
              960: {
                centeredSlides: false,
              },
            }}
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    height: { lg: 250, xs: 150 },
                    backgroundColor: "transparent",
                    overflow: "hidden",
                    position: "relative",
                    transform: "scale(0.8)",
                    transition: "all 0.9s ease",
                    textDecoration: "none",
                    ".swiper-slide-active &": {
                      transform: "scale(1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}
