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

function CarCard({ car }) {
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
        <Typography variant="h5" fontWeight="bold" color="primary" sx={{ mt: 1 }} align="center">
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
          <span>{car.year}</span>
          <span>{car.engine}</span>
          <span>{car.transmission}</span>
          <span>{car.mileage}</span>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CarCard;
