import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Chip,
  Typography,
  Stack,
  Box,
  Button,
} from "@mui/material";

// أيقونات
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SpeedIcon from "@mui/icons-material/Speed";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import BoltIcon from "@mui/icons-material/Bolt";
import TimerIcon from "@mui/icons-material/Timer";
import SettingsIcon from "@mui/icons-material/Settings";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import PaletteIcon from "@mui/icons-material/Palette";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import MonitorIcon from "@mui/icons-material/Monitor";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import OilBarrelOutlinedIcon from "@mui/icons-material/OilBarrelOutlined";
import HealthAndSafety from "@mui/icons-material/HealthAndSafety";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

export default function PopularCars2() {
  const cars = [
    {
      brand: "Porsche",
      name: "Porsche 911 Turbo S",
      price: "272,000",
      speed: "330 km/h",
      fuel: "Hybrid",
      image: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b",
      specs: [
        { icon: <BoltIcon />, label: "Power: 701 HP" },
        { icon: <TimerIcon />, label: "0-100: 2.1s" },
        { icon: <SpeedIcon />, label: "Top Speed: 330 km/h" },
        { icon: <OilBarrelOutlinedIcon />, label: "3.8L Twin Turbo" },
        { icon: <SettingsIcon />, label: "AWD" },
        { icon: <EventSeatIcon />, label: "Seats: 4" },
        { icon: <MonitorIcon />, label: "10.9 inch Display" },
        { icon: <VolumeUpIcon />, label: "Bose Audio" },
        { icon: <PaletteIcon />, label: "Sport Interior" },
        { icon: <HealthAndSafety />, label: "Advanced Safety" },
      ],
    },
    {
      brand: "Tesla",
      name: "Tesla Model S Plaid",
      price: "95,000",
      speed: "322 km/h",
      fuel: "Electric",
      image: "https://s1.cdn.autoevolution.com/images/gallery/tesla-model-s-2021-7847_32.jpg",
      specs: [
        { icon: <BoltIcon />, label: "Power: 1020 HP" },
        { icon: <TimerIcon />, label: "0-100: 2.1s" },
        { icon: <SpeedIcon />, label: "Top Speed: 322 km/h" },
        { icon: <OilBarrelOutlinedIcon />, label: "Battery: 100 kWh" },
        { icon: <SettingsIcon />, label: "Tri-Motor AWD" },
        { icon: <EventSeatIcon />, label: "Seats: 5" },
        { icon: <MonitorIcon />, label: "17 inch Display" },
        { icon: <VolumeUpIcon />, label: "22 Speaker Audio" },
        { icon: <AcUnitIcon />, label: "Smart Climate" },
        { icon: <HealthAndSafety />, label: "Autopilot Safety" },
      ],
    },
    {
      brand: "Lucid",
      name: "Lucid Air Sapphire",
      price: "249,000",
      speed: "330 km/h",
      fuel: "Electric",
      image: "https://4kwallpapers.com/images/wallpapers/lucid-air-sapphire-electric-cars-luxury-sedan-2023-2880x1800-8599.jpeg",
      specs: [
        { icon: <BoltIcon />, label: "Power: 1234 HP" },
        { icon: <TimerIcon />, label: "0-100: 1.9s" },
        { icon: <SpeedIcon />, label: "Top Speed: 330 km/h" },
        { icon: <OilBarrelOutlinedIcon />, label: "Battery: 118 kWh" },
        { icon: <SettingsIcon />, label: "Tri-Motor AWD" },
        { icon: <EventSeatIcon />, label: "Seats: 5" },
        { icon: <MonitorIcon />, label: "34 inch Cockpit Display" },
        { icon: <VolumeUpIcon />, label: "Surreal Sound Pro" },
        { icon: <PaletteIcon />, label: "Luxury Interior" },
        { icon: <HealthAndSafety />, label: "DreamDrive Pro" },
      ],
    },
    {
      brand: "Hyundai",
      name: "Hyundai Ioniq 5 N",
      price: "67,000",
      speed: "260 km/h",
      fuel: "Electric",
      image: "https://www.hdcarwallpapers.com/download/hyundai_ioniq_5_n-1920x1080.jpg",
      specs: [
        { icon: <BoltIcon />, label: "Power: 650 HP" },
        { icon: <TimerIcon />, label: "0-100: 3.4s" },
        { icon: <SpeedIcon />, label: "Top Speed: 260 km/h" },
        { icon: <OilBarrelOutlinedIcon />, label: "Battery: 84 kWh" },
        { icon: <SettingsIcon />, label: "AWD" },
        { icon: <EventSeatIcon />, label: "Seats: 5" },
        { icon: <MonitorIcon />, label: "12.3 inch Display" },
        { icon: <VolumeUpIcon />, label: "Bose Audio" },
        { icon: <AcUnitIcon />, label: "Dual Climate" },
        { icon: <HealthAndSafety />, label: "Hyundai SmartSense" },
      ],
    },
  ];

  const [showSpecs, setShowSpecs] = useState({});

  // فلترة السيارات حالياً غير فعالة → استخدم cars مباشرة

  return (
    <Container sx={{ my: 8 }}>
      <Grid container spacing={4}>
        {cars.map((car, index) => {
          const isShown = showSpecs[index] || false;
          const visibleSpecs = isShown ? car.specs : [];

          return (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  position: "relative",
                  borderRadius: 1,
                  overflow: "hidden",
                  width: "100%",
                  minHeight: { xs: "300px", md: "300px", lg: "250px" },
                  backgroundImage: `url(${car.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "#fff",
                  transition: "0.4s",
                  "&:hover": {
                    boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(0,0,0,0.55)",
                  }}
                />

                <CardContent sx={{ position: "relative" }}>
                  <Chip
                    icon={<LocalFireDepartmentIcon />}
                    label="Popular Car"
                    color="error"
                    sx={{ mb: 2, fontWeight: "bold" }}
                  />
                  <Typography variant="h3" fontWeight="bold">
                    {car.name}
                  </Typography>

                  <Stack
                    direction={{ lg: "row", xs: "column" }}
                    spacing={2}
                    mt={1}
                  >
                    <Stack direction="row" spacing={0.5}>
                      <AttachMoneyIcon />
                      <Typography>{car.price}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5}>
                      <SpeedIcon />
                      <Typography>{car.speed}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5}>
                      <LocalGasStationIcon />
                      <Typography>{car.fuel}</Typography>
                    </Stack>
                  </Stack>

                  <Grid container spacing={1} sx={{ mt: 2 }}>
                    {visibleSpecs.map((spec, i) => (
                      <Grid item xs={6} sm={4} key={i}>
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={1}
                          sx={{
                            p: 1,
                            bgcolor: "rgba(255,255,255,0.08)",
                            backdropFilter: "blur(6px)",
                            borderRadius: 2,
                          }}
                        >
                          {spec.icon}
                          <Typography variant="body2">{spec.label}</Typography>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>

                  <Button
                    variant="outlined"
                    onClick={() =>
                      setShowSpecs((prev) => ({
                        ...prev,
                        [index]: !prev[index],
                      }))
                    }
                    sx={{
                      mt: 2,
                      fontWeight: "bold",
                      borderColor: "#fff",
                      color: "#fff",
                    }}
                  >
                    {isShown ? "إخفاء المواصفات" : "عرض المواصفات"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
