import { Card, Container, Grid, Typography, Box, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { TbEngineFilled } from "react-icons/tb";
import { GiPowerLightning } from "react-icons/gi";
import { SiTransmission } from "react-icons/si";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaChevronCircleDown } from "react-icons/fa";

import GalleryDetailsSkeleton from "../skeletons/galleryDetailsSkeleton";

const icons = {
  engine: <TbEngineFilled />,
  horsepower: <GiPowerLightning />,
  transmission: <SiTransmission />,
  fuel: <BsFillFuelPumpFill />,
};

function CarsDetailsGallery() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [imgShow, setImgShow] = useState(0);

  useEffect(() => {
    fetch("/data/finalCars.json")
      .then((res) => res.json())
      .then((data) => {
        const filData = data.carData.find((car) => {
          return car.id == id;
        });
        setData(filData);
      });
  }, [id]);

  const [loaded, setLoaded] = useState(0);
  const totalImages = Object.values(data?.mainImages || {}).length;

  const handleImageLoad = () => {
    setLoaded((prev) => prev + 1);
  };

  if (!data) return <p>Loading...</p>;

  return (
    <>
      {loaded < totalImages && <GalleryDetailsSkeleton />}
      <Box sx={{ background: "rgba(15, 23, 42, 0.21)", width: "100%" }}>
        <Container
          sx={{
            width: "100%",
            my: 2,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            p: 3,
          }}
        >
          <Typography
            variant="h4"
            color={"primary.main"}
            fontWeight={600}
            textAlign={"center"}
          >
            {data.brand}
          </Typography>
          <Stack
            sx={{ flexDirection: { lg: "row", xs: "column" } }}
            justifySelf={"center"}
          >
            <Typography
              textAlign={"center"}
              variant="h1"
              sx={{
                color: "#fff",
                textShadow: `0px 1px 2px rgb(0, 0, 0),
                           0px 6px 12px rgba(0, 0, 0, 0.92);`,
              }}
              mb={5}
            >{`${data.model} - ${data.year}`}</Typography>
            <a href="#Specifications" className="spec-link">
              Specifications
              <FaChevronCircleDown />
            </a>
          </Stack>

          {Object.values(data.mainImages).map((img, index) => (
            <Card
              key={index}
              sx={{
                display: { lg: "block", xs: "none" },
                justifySelf: "center",
                height: 400,
                width: "60vw",
                position: "absolute",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: index === imgShow ? 1 : 0,
              }}
            />
          ))}
          {/*عنصر وهمي لحجز مساحة الصورة الكبيرة*/}
          <Box
            sx={{
              display: { lg: "block", xs: "none" },
              height: 400,
              width: "60vw",
              justifySelf: "center",
            }}
          />

          <Box
            sx={{
              width: { lg: "50%", xs: "90vw" },
              justifySelf: "center",
              my: { lg: 2, xs: 4 },
            }}
          >
            <Swiper
              modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                960: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={20}
              loop={true}
              speed={500}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 0,
                slideShadows: false,
              }}
              onSlideChange={(swiper) => setImgShow(swiper.realIndex)}
            >
              {Object.values(data.mainImages || {}).map((img, index) => (
                <SwiperSlide key={index}>
                  <Card
                    component={"img"}
                    onLoad={handleImageLoad}
                    src={img}
                    width={"100%"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Typography id="Specifications" variant="h2" mt={5} mb={2}>
            Specifications
          </Typography>
          <Grid width={{ lg: "80%", xs: "100%" }} spacing={2} container>
            {Object.entries(data.specs).map(([key, value], index) => (
              <Grid key={index} item lg={3} xs={6}>
                <Card
                  sx={{
                    p: 2,
                    borderRadius: 1,
                    background:
                      "linear-gradient(145deg,rgb(15, 23, 42), #1e293b)",
                    color: "#fff",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
                    },
                  }}
                >
                  <Box display="flex" flexDirection="column" gap={1}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background:
                          "linear-gradient(135deg,rgb(255, 81, 0), #ff3c00)",
                      }}
                    >
                      {icons[key]}
                    </Box>

                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                      {[key]}
                    </Typography>

                    <Typography variant="h6" fontWeight="bold">
                      {value}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
export default CarsDetailsGallery;
