import React, { useState } from "react";
import { Box, Typography, Button, Card } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Cars",
    image: "/Images/Mercedes-S-Class.jpg",
    buttonTitle: "Explore Cars",
  },
  {
    title: "Compare",
    image: "/Images/Mercedes-S-Class-1.jpg",
    buttonTitle: "Compare Cars",

  },
  {
    title: "Store",
    image: "/Images/Mercedes-S-Class-2.jpg",
    buttonTitle: "Visit Store",
  },
  {
    title: "News",
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
            width: { xs: "100%", sm: "100%", md: "50%", lg: "400px" },
            zIndex: 2,
          }}
        >
          <Typography variant="h2" fontWeight="bold">
            {slides[activeIndex].title}
          </Typography>

          <Typography sx={{ mt: 2, mb: 3 }}>
            Discover beautiful destinations around the world.
          </Typography>

          <Button variant="outlined" onClick={() => navigate(`/${slides[activeIndex].title.toLowerCase()}`)}>
            { slides[activeIndex].buttonTitle}
          </Button>
        </Box>

        {/* السلايدر */}
        <Box
          sx={{
            width: "45vw",
            zIndex: 2,
            position: "relative",
            left: { xs: "0", md: "6%" },
          }}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={3}
            spaceBetween={5}
            navigation
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    height: 250,
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

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      p: 3,
                      width: "100%",
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.9))",
                    }}
                  >
                    <Typography variant="h6">{item.title}</Typography>
                  </Box>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}
