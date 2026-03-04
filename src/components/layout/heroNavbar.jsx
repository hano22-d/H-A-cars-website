import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { UseHeroContext } from "../../context/heroContext";
import "@fontsource/black-ops-one";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function HeroContent() {
  const { progress } = UseHeroContext();

// Mobile Hero show Images
  const imagesHeroMobile = [
    'public/CarHeroMobileImg/pexels-barczakshoots-8830048.jpg',
    'public/CarHeroMobileImg/pexels-highervibration-10215508.jpg',
    'public/CarHeroMobileImg/pexels-maxavans-5058350.jpg',
    'public/CarHeroMobileImg/pexels-odobesku-9018708.jpg',
    'public/CarHeroMobileImg/pexels-saimon-6070046.jpg'
  ] 

  const [heroImgMobile,setHeroImgMobile] = useState(
    'public/CarHeroMobileImg/pexels-barczakshoots-8830048.jpg',
  )

let countMobile = 0
 
  useEffect(() => {
    let intervalMobile = setInterval(() => {
        countMobile = (countMobile + 1) % imagesHeroMobile.length;
        const img = new Image();
        img.src = imagesHeroMobile[countMobile];
        img.onload = () => setHeroImgMobile(imagesHeroMobile[countMobile]);
    }, 10000);

    return () => clearInterval(intervalMobile);
  }, []);


// Laptop Hero show Images
  const images = [
    "/imgHero/pexels-alex-amorales-321095-909907.jpg",
    "/imgHero/pexels-lalesh-168938.jpg",
    "/imgHero/pexels-maria-geller-801267-2127037.jpg",
    "/imgHero/pexels-srkportraits-8911015.jpg",
    "/imgHero/pexels-szymon-shields-1503561-6152812.jpg",
   
  ];

  const [heroBackgroundImage, setHeroBackgroundImage] = useState(
    "/imgHero/pexels-vladalex94-1402787.jpg",
  );

let count = 0

  useEffect(() => {
    let interval = setInterval(() => {
        count = (count + 1) % images.length;
        const img = new Image();
        img.src = images[count];
        img.onload = () => setHeroBackgroundImage(images[count]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);


  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: {
          lg : `url(${heroBackgroundImage})`,
          xs : `url(${heroImgMobile})`
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          "&::after": {
            pointerEvents: "none",
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.93) 0%, rgba(0, 0, 0, 0.78) 40%, rgba(0, 0, 0, 0.67) 70%, rgb(10, 10, 10) 100%)",
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          left: { xs: 16, md: 38 },
          top: "15%",
          bottom: "15%",
          width: 2,
          background:
            "linear-gradient(180deg, transparent 0%, #E65100 30%, #E65100 70%, transparent 100%)",
          opacity: 0.5,
          display: { xs: "none", md: "block" },
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          pt: { xs: 12, md: 10 },
          pb: { xs: 6, md: 8 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "2.5rem",
              sm: "3.5rem",
              md: "4.5rem",
              lg: "5.2rem",
            },
            fontFamily: "Black Ops One, system-ui",
            maxWidth: 900,
            textShadow: `
      0 2px 4px rgb(0, 0, 0),
      0 6px 12px rgb(0, 0, 0),
      0 12px 30px rgba(0, 0, 0, 0.55),
      0 20px 60px rgba(255, 77, 41, 0.14)
    `,
            transform: `translateY(-${progress * 100}px)`,
          }}
        >
          H & A CARS
        </Typography>
        <Typography
        color={'#fff'}
          variant="h3"
          sx={{
            transform: `translateY(-${progress * 100}px)`,
          }}
        >
          وجهتك لعالم السيارات
        </Typography>

        <TextField
          sx={{
            width: {lg:"50%",xs: '75%'},
            my: 4,
            "& .MuiOutlinedInput-input": {
              color: "#fff",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#fff",
              },
              "&:hover fieldset": {
                borderColor: "#ff4c29",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#ff4c29",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#fff",
            },
          }}
          label="ابحث  عما تريد استكشافه"
          dir="rtl"
        />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mb: { xs: 6, md: 8 } }}
        >
          <Button
            variant="contained"
            endIcon={<ArrowIcon />}
            sx={{
              bgcolor: "primary.main",
              fontWeight: 700,
              px: 5,
              py: 1.8,
              borderRadius: 2,
              boxShadow: "0 8px 32px rgba(230, 81, 0, 0.35)",
              transform: `translateY(-${progress * 100}px)`,
              "&:hover": {
                bgcolor: "#ff6333",
                boxShadow: "0 12px 48px rgba(230, 81, 0, 0.5)",
                transform: "translateY(-2px)",
              },
            }}
          >
            الانتقال للمعرض
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "rgba(255,255,255,0.25)",
              color: "white",
              fontWeight: 600,
              px: 5,
              py: 1.8,
              borderRadius: 2,
              backdropFilter: "blur(8px)",
              bgcolor: "rgba(255,255,255,0.04)",
              transform: `translateY(-${progress * 100}px)`,
              "&:hover": {
                borderColor: "#ff6333",
                bgcolor: "rgba(230, 81, 0, 0.08)",
                color: "#ff6333",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 24px rgba(230, 81, 0, 0.15)",
              },
            }}
          >
            أخبار السيارات
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default function CarHero() {
  const { progress } = UseHeroContext();
  const heroprogess = 1 - progress;
  return (
    <Box
      component="main"
      sx={{
        opacity: heroprogess,
        minHeight: "100vh",
        bgcolor: "#0A0A0A",
        overflow: "hidden",
        inset: 0,
        zIndex: -1,
        pointerEvents: progress >= 1 ? "none" : "auto",
      }}
    >
      <HeroContent />
    </Box>
  );
}
