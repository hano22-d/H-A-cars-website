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
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia />
        <Chip 
        label={car.status}
        color="warning"
        size="small"
        sx={{ position: "absolute", top: 10, left: 10 }}
        />
        <IconButton 
        sx={{ position: "absolute", top: 10, right: 10 }}
        >
          <FavoriteBorderIcon />
        </IconButton>
      </Box>
      <CardContent sx={{marginTop: 3}}>
        <Typography variant="subtitle1" fontWeight="bold">
          {car.name}
        </Typography>
        <Typography variant="h5" color="primary" sx={{ mt: 1, mb: 1}}>
          {car.price}
        </Typography>
        <Box sx={{
            display:"flex", 
            gap: 2,
            color: "gray",
            fontSize: 14
        }}>
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
