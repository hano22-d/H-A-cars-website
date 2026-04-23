import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Box,
  Button,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
export default function Offers() {
  const carOffer = [
    {
      id: 1,
      name: "Hyundai",
      model: "Palisade",
      year: "2023",
      oldPrice: "$40,000",
      newPrice: "$32,000",
      image:
        "https://www.hdcarwallpapers.com/download/hyundai_palisade_2023_5k-1920x1080.jpg",
      specifications: {
        Engine: "3.8L V6",
        Horsepower: "291 hp",
        Torque: "262 lb-ft",
        Transmission: "8-speed automatic",
        Drivetrain: "All-wheel drive",
        "Fuel Economy": "19 mpg city / 26 mpg highway",
      },
    },
    {
      id: 2,
      name: "BMW",
      model: "M4",
      year: "2018",
      oldPrice: "$60,000",
      newPrice: "$50,000",
      image:
        "https://images.caricos.com/b/bmw/2018_bmw_m4_cs/images/2560x1440/2018_bmw_m4_cs_89_2560x1440.jpg",
      specifications: {
        Engine: "3.0L I6",
        Horsepower: "335 hp",
        Torque: "332 lb-ft",
        Transmission: "8-speed automatic",
        Drivetrain: "All-wheel drive",
        "Fuel Economy": "20 mpg city / 28 mpg highway",
      },
    },
    {
      id: 3,
      name: "Audi",
      model: "A8",
      year: "2022",
      oldPrice: "$80,000",
      newPrice: "$70,000",
      image: "https://nextcar.ua/images/blog/484/audi-a8-2022__9_.jpg",
      specifications: {
        Engine: "3.0L TDI",
        Horsepower: "335 hp",
        Torque: "369 lb-ft",
        Transmission: "8-speed automatic",
        Drivetrain: "All-wheel drive",
        "Fuel Economy": "22 mpg city / 31 mpg highway",
      },
    },
    {
      id: 4,
      name: "Mercedes",
      model: "S-Class",
      year: "2021",
      oldPrice: "$90,000",
      newPrice: "$75,000",
      image: "https://wallpapercave.com/wp/wp8575742.jpg",
      specifications: {
        Engine: "3.0L V6",
        Horsepower: "335 hp",
        Torque: "369 lb-ft",
        Transmission: "8-speed automatic",
        Drivetrain: "All-wheel drive",
        "Fuel Economy": "22 mpg city / 31 mpg highway",
      },
    },
    {
      id: 5,
      name: "Lexus",
      model: "RX 350",
      year: "2020",
      oldPrice: "$45,000",
      newPrice: "$38,000",
      image: "https://images.hgmsites.net/hug/2020-lexus-rx_100702430_h.jpg",
      specifications: {
        Engine: "2.5L I4",
        Horsepower: "241 hp",
        Torque: "186 lb-ft",
        Transmission: "Continuously variable",
        Drivetrain: "All-wheel drive",
        "Fuel Economy": "24 mpg city / 30 mpg highway",
      },
    },
    {
      id: 6,
      name: "Tesla",
      model: "Model S",
      year: "2021",
      oldPrice: "$85,000",
      newPrice: "$78,000",
      image: "",
      specifications: {
        Engine: "Electric",
        Horsepower: "1,020 hp",
        Torque: "1,050 lb-ft",
        Transmission: "Single-speed",
        Drivetrain: "All-wheel drive",
        "Fuel Economy": "120 MPGe",
      },
    },
    {
      id: 7,
      name: "Ford",
      model: "Mustang",
      year: "2019",
      oldPrice: "$55,000",
      newPrice: "$45,000",
      image: "",
      specifications: {
        Engine: "5.0L V8",
        Horsepower: "435 hp",
        Torque: "400 lb-ft",
        Transmission: "10-speed automatic",
        Drivetrain: "Rear-wheel drive",
        "Fuel Economy": "17 mpg city / 26 mpg highway",
      },
    },
    {
      id: 8,
      name: "Chevrolet",
      model: "Camaro",
      year: "2018",
      oldPrice: "$50,000",
      newPrice: "$40,000",
      image: "",
      specifications: {
        Engine: "5.0L V8",
        Horsepower: "435 hp",
        Torque: "400 lb-ft",
        Transmission: "10-speed automatic",
        Drivetrain: "Rear-wheel drive",
        "Fuel Economy": "17 mpg city / 26 mpg highway",
      },
    },
    {
      id: 9,
      name: "Porsche",
      model: "911",
      year: "2020",
      oldPrice: "$120,000",
      newPrice: "$100,000",
      image: "",
      specifications: {
        Engine: "3.0L I6",
        Horsepower: "335 hp",
        Torque: "332 lb-ft",
        Transmission: "8-speed automatic",
        Drivetrain: "All-wheel drive",
        "Fuel Economy": "20 mpg city / 28 mpg highway",
      },
    },
    {
      id: 10,
      name: "Kia",
      model: "Sorento",
      year: "2022",
      oldPrice: "$30,000",
      newPrice: "$25,000",
      image: "",
      specifications: {
        Engine: "2.5L I4",
        Horsepower: "241 hp",
        Torque: "186 lb-ft",
        Transmission: "Continuously variable",
        Drivetrain: "All-wheel drive",
        "Fuel Economy": "24 mpg city / 30 mpg highway",
      },
    },
  ];
  return (
    <Container
      sx={{
        width: { xs: "100%", md: "100%", lg: "60%" },
      }}
    >
      <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }}>
        {carOffer.map((car, index) => (
          <SwiperSlide key={index}>
            <Container
              sx={{
                maxWidth: 750,
                margin: "0 auto",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                textAlign: { xs: "center", md: "left" },
                justifyContent: "center",
              }}
            >
              <Box sx={{ maxWidth: 300, mx: 4 }}>
                <Typography
                  variant="h3"
                  component="div"
                  fontFamily="ui-sans-serif"
                >
                  Specifications
                </Typography>
                {Object.entries(car.specifications).map(([key, value]) => (
                  <Typography
                    key={key}
                    variant="h6"
                    color="red"
                    fontFamily="ui-sans-serif"
                  >
                    {key}:
                    <Typography
                      sx={{
                        fontSize: "11px",
                        color: "text.primary",
                        fontWeight: "bold",
                        fontFamily: "ui-sans-serif",
                      }}
                    >
                      {value}
                    </Typography>
                  </Typography>
                ))}
              </Box>
              <Box>
                <CardMedia component="img" height="200" image={car.image} />
                <CardContent>
                  <Typography
                    variant="h3"
                    component="div"
                    fontFamily="ui-sans-serif"
                  >
                    {car.name} {car.model} ({car.year})
                  </Typography>
                  <Typography
                    variant="body2"
                    color="red"
                    fontWeight="bold"
                    fontFamily="ui-sans-serif"
                  >
                    Old Price: <s>{car.oldPrice}</s>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="green"
                    fontWeight="bold"
                    fontFamily="ui-sans-serif"
                  >
                    New Price: {car.newPrice}
                  </Typography>
                </CardContent>
                <Button
                  variant="outlined"
                  color="primary"
                  fontFamily="ui-sans-serif"
                >
                  Buy Now
                </Button>
              </Box>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
