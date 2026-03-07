import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

function CarCard({ car }) {
  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const handleOpen = (car) => {
    setSelectedCar(car);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleBuy = () => {
    alert("Successfuly Operation!");
  };

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
        <IconButton sx={{ position: "absolute", top: 10, right: 10 }}>
          <FavoriteBorderIcon />
        </IconButton>
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
      <UnfoldMoreOutlinedIcon onClick={() => handleOpen(car)} />
      {/* Details Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Car Details</DialogTitle>
        <DialogContent>
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
          <Typography variant="h6" color="primary" align="center" sx={{ mt: 2 }}>
            {selectedCar?.name}
          </Typography>
          <Typography variant="body2" align="center">
            {selectedCar?.price}
          </Typography>
          <Typography variant="body2" align="center">
            {selectedCar?.engine}
          </Typography>
          <Typography variant="body2" align="center">
            {selectedCar?.transmission}
          </Typography>
          <Typography variant="body2" align="center">
            {selectedCar?.mileage}
          </Typography>
          <Typography variant="body2" align="center">
            {selectedCar?.status}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleBuy} color="primary">
            Buy Now
          </Button>
        </DialogActions>
      </Dialog>
      {/* End of Details Dialog */}
    </Card>
  );
}

export default CarCard;
