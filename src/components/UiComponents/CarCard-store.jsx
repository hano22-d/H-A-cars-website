import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
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

import "swiper/css";

function CarCard({ car }) {
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
          alt={car.name}
        />
        <Chip
          label={car.status}
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
          {car.name}
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
            gap: 2,
            color: "gray",
            fontSize: 14,
          }}
        >
          <Typography>{car.year}</Typography>
          <Typography>{car.engine}</Typography>
          <Typography>{car.transmission}</Typography>
          <Typography>{car.mileage}</Typography>
        </Box>
      </CardContent>

      <Button
        sx={{
          margin: 2,
        }}
        onClick={() => handleOpen(car)}
        variant="outlined"
      >
        Details
      </Button>
      {/* Details Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            color: "primary.text",
            fontWeight: "bold",
            fontFamily: "ui-serif",
            textAlign: "center",
            backgroundColor: "background.default",
          }}
        >
          Car Details
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: "background.default",
          }}
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
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

          <Typography
            variant="h6"
            color="primary"
            align="center"
            fontWeight="bold"
            sx={{ mt: 2 }}
          >
            {selectedCar?.name}
          </Typography>
          <Typography
            color="primary"
            variant="body1"
            mt="2px"
            backgroundColor="background.details"
            borderRadius="5px"
            align="center"
            p="10px"
          >
            <Typography variant="body1" color="text.primary" align="left">
              Price:
            </Typography>
            {selectedCar?.price}
          </Typography>
          <Typography
            color="primary"
            variant="body1"
            mt="2px"
            backgroundColor="background.details"
            borderRadius="5px"
            align="center"
            p="10px"
          >
            <Typography variant="body1" color="text.primary" align="left">
              Engine:
            </Typography>
            {selectedCar?.engine}
          </Typography>
          <Typography
            color="primary"
            variant="body1"
            mt="2px"
            backgroundColor="background.details"
            borderRadius="5px"
            align="center"
            p="10px"
          >
            <Typography variant="body1" color="text.primary" align="left">
              Transmission:
            </Typography>
            {selectedCar?.transmission}
          </Typography>
          <Typography
            color="primary"
            variant="body1"
            mt="2px"
            backgroundColor="background.details"
            borderRadius="5px"
            align="center"
            p="10px"
          >
            <Typography variant="body1" color="text.primary" align="left">
              Mileage:
            </Typography>
            {selectedCar?.mileage}
          </Typography>
          <Typography
            color="primary"
            variant="body1"
            mt="2px"
            backgroundColor="background.details"
            borderRadius="5px"
            align="center"
            p="10px"
          >
            <Typography variant="body1" color="text.primary" align="left">
              Status:
            </Typography>
            {selectedCar?.status}
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            backgroundColor: "background.default",
          }}
        >
          <Button onClick={handleClose} border="10px solid" variant="outlined">
            Close
          </Button>
          <Button onClick={handleBuyClick} color="primary" variant="contained">
            Buy Now
          </Button>
        </DialogActions>
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
