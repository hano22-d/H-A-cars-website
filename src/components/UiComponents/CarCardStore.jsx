import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  Grid,
  Stack,
} from "@mui/material";
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Autoplay,
  Pagination,
} from "swiper/modules";
import ForwardIcon from "@mui/icons-material/Forward";
import { useTranslation } from "react-i18next";

import "swiper/css";

const info = [
  { key: "main.carsInfo.price", text: "main.carsInfo.price" },
  { key: "main.carsInfo.engine", text: "main.carsInfo.engine" },
  { key: "main.carsInfo.transmission", text: "main.carsInfo.transmission" },
  { key: "main.carsInfo.mileage", text: "main.carsInfo.mileage" },
  { key: "main.carsInfo.status", text: "main.carsInfo.status" },
];
const info2 = ["price", "engine", "transmission", "mileage", "status"];

function CarCard({ car }) {
  const { t } = useTranslation();

  const [fullImages, setFullImages] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleOpen = (car) => {
    setSelectedCar(car);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [openConfirm, setOpenConfirm] = useState(false);
  const handleConfirmClose = () => setOpenConfirm(false);

  const handleBuyClick = () => {
    setOpenConfirm(true);
  };
  const handleConfirmBuy = () => {
    setOpenConfirm(false);
    setOpen(false);
    alert("Successfuly Operation!");
  };

  // Replace with actual image URLs

  return (
    <Card>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            height: 200,
            objectFit: "cover",
            borderBottom: "3px double",
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
      </Box>

      <CardContent sx={{ marginTop: 1 }}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          align="center"
          fontSize={25}
          fontFamily="ui-serif"
        >
          {t(car.name)}
        </Typography>

        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary"
          sx={{ mt: 1 }}
          align="center"
        >
          {car.price}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            color: "gray",
            textAlign: "center",
          }}
        >
          <Stack gap={1}>
            <Typography>{car.year}</Typography>
            <Typography>{t(car.engine)}</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography>{t(car.transmission)}</Typography>
            <Typography>{t(car.mileage)}</Typography>
          </Stack>
        </Box>
      </CardContent>

      <Button
        sx={{
          margin: 2,
        }}
        onClick={() => handleOpen(car)}
        variant="outlined"
      >
        {t("main.Details")}
      </Button>
      {/* Details Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          variant="h3"
          sx={{
            color: "primary.text",
            textAlign: "center",
            backgroundColor: "background.default",
          }}
        >
          {t("main.CarDetails")}
        </DialogTitle>
        <Box bgcolor={"background.default"}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={-100}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
              scale: 0.8,
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 0 },
              768: { slidesPerView: 2, spaceBetween: -50 },
              1024: { slidesPerView: 3, spaceBetween: -100 },
            }}
            modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
          >
            {car.images &&
              Object.values(car.images).map((img, index) => (
                <SwiperSlide key={index} style={{ width: "200px" }}>
                  <CardMedia
                    onClick={() => setFullImages(img)}
                    component="img"
                    image={img}
                    alt="car"
                    sx={{
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </Box>
        <DialogContent
          sx={{
            backgroundColor: "background.default",
          }}
        >
          <Grid container spacing={1}>
            <Grid item lg={12} xs={12}>
              <Typography
                variant="h6"
                color="primary"
                align="center"
                fontWeight="bold"
                sx={{ mt: 2 }}
              >
                {t(selectedCar?.name)}
              </Typography>
            </Grid>
            <Grid item lg={4} xs={5} justifyItems={"center"}>
              <Stack gap={{ lg: 4.2, xs: 5 }}>
                {info.map((n) => (
                  <Typography
                    textAlign={"center"}
                    bgcolor={"primary.main"}
                    key={n.key}
                    variant="body2"
                    color="text.primary"
                    px={1}
                    borderRadius={1}
                    fontSize={{ xs: "0.9rem" }}
                  >
                    {t(n.text)}
                  </Typography>
                ))}
              </Stack>
            </Grid>
            <Grid item lg={4} xs={3} justifyItems={"center"}>
              <Stack gap={{ lg: 3.5, xs: 4.3 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <ForwardIcon
                    sx={{
                      bgcolor: "primary.main",
                      mb: 0.2,
                      color: "wheat",
                      borderRadius: "50%",
                    }}
                    key={i}
                  />
                ))}
              </Stack>
            </Grid>
            <Grid item lg={4} xs={4} justifyItems={"center"}>
              <Stack gap={{ lg: 4, xs: 3.7 }}>
                {info2.map((n, i) => (
                  <Typography
                    key={i}
                    textAlign={"center"}
                    color="text.primary"
                    variant="h6"
                    fontSize={{ xs: "0.8rem" }}
                  >
                    {t(selectedCar?.[n])}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            backgroundColor: "background.default",
          }}
        >
          <Button onClick={handleClose} border="10px solid" variant="outlined">
            {t("main.Close")}
          </Button>
          <Button onClick={handleBuyClick} color="primary" variant="contained">
            {t("main.BuyNow")}
          </Button>
        </DialogActions>
        {/*View images in full screen mode*/}
        {fullImages && (
          <>
            <div
              onClick={() => setFullImages(null)}
              style={{
                width: "100vw",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: 0,
                background: "rgba(0, 0, 0, 0.6)",
                zIndex: 999,
              }}
            ></div>
            <CardMedia
              component="img"
              image={fullImages}
              alt="car"
              sx={{
                zIndex: 999,
                position: "fixed",
                top: { lg: 30, xs: "35%" },
                left: { lg: 65, xs: 17 },
                width: { lg: "90vw", xs: "90vw" },
                height: { lg: "90vh", xs: "40vh" },
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </>
        )}
      </Dialog>
      {/* End of Details Dialog */}
      {/* Confirmation Dialog */}
      <Dialog open={openConfirm} onClose={handleConfirmClose}>
        <DialogTitle
          sx={{
            color: "primary.text",
            fontWeight: "bold",
            fontFamily: "ui-serif",
            textAlign: "center",
            backgroundColor: "background.default",
          }}
        >
          Confirm Purchase
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: "background.default",
          }}
        >
          <Typography variant="body1" align="center">
            Are you sure you want to purchase this car?
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            backgroundColor: "background.default",
          }}
        >
          <Button onClick={handleConfirmClose} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={handleConfirmBuy}
            color="primary"
            variant="contained"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default CarCard;
