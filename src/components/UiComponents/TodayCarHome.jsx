import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Stack,
  Box,
  Grid,
} from "@mui/material";

// استيراد الأيقونات
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SpeedIcon from "@mui/icons-material/Speed";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SettingsIcon from "@mui/icons-material/Settings";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import TimerIcon from "@mui/icons-material/Timer";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PaletteIcon from "@mui/icons-material/Palette";
import SecurityIcon from "@mui/icons-material/Security";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import MonitorIcon from "@mui/icons-material/Monitor";
import BoltIcon from "@mui/icons-material/Bolt";
import VolumUpIcon from "@mui/icons-material/VolumeUp";
import HealthAndSafety from "@mui/icons-material/HealthAndSafety";
import CarCrashIcon from "@mui/icons-material/CarCrash";


// معلومات السيارة الأساسية
const car = {
  name: "BMW M4 Competition",
  image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
  price: "75,000",
  speed: "290 km/h",
  fuel: "Petrol",
};
// قائمة المواصفات مرتبة حسب الأهمية
const specs = [
  // الأداء
  { icon: <BoltIcon />, label: "Power: 503 HP" },
  { icon: <TimerIcon />, label: "0-100 km/h: 3.8s" },
  { icon: <SpeedIcon />, label: "Top Speed: 290 km/h" },

  // المحرك ونظام الدفع
  { icon: <DirectionsCarIcon />, label: "Engine: 3.0L Twin-Turbo" },
  { icon: <SettingsIcon />, label: "Drive System: RWD" },
  { icon: <SettingsIcon />, label: "Transmission: Automatic" },
  { icon: <LocalGasStationIcon />, label: "Fuel Type: Petrol" },

  // معلومات السيارة الأساسية
  { icon: <EventSeatIcon />, label: "Seats: 4" },
  { icon: <FitnessCenterIcon />, label: "Weight: 1800 kg" },
  { icon: <LocalGasStationIcon />, label: "Fuel Tank: 59L" },

  // الأمان
  { icon: <HealthAndSafety />, label: "Airbags: 6" },
  { icon: <SecurityIcon />, label: "Safety: ABS System" },
  { icon: <CarCrashIcon />, label: "Stability: Traction Control" },

  // الراحة والتكنولوجيا
  { icon: <AcUnitIcon />, label: "Climate: Dual Zone AC" },
  { icon: <MonitorIcon />, label: "Display: 12.3" },
  { icon: <VolumUpIcon />, label: "Audio: Harman Kardon Sound" },

  // معلومات إضافية
  { icon: <PaletteIcon />, label: "Color: Black" },
];

export default function CarOfTheDay() {
  // حالة للتحكم في إظهار أو إخفاء المواصفات الإضافية
  const [show, setShow] = useState(false);

  const visibleSpecs = show ? specs : specs.slice(0, 4);

  return (
    <Card
      sx={{
        width: "95vw",
        mx: "auto",
        borderRadius: 1,
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${car.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        minHeight: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {/* تعتيم */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.55)",
        }}
      />

      {/* محتوى البطاقة */}
      <CardContent sx={{ position: "relative" }}>
        {/* شارة سيارة اليوم */}
        <Chip
          icon={<LocalFireDepartmentIcon />}
          label="سيارة اليوم"
          color="error"
          sx={{ mb: 2, fontWeight: "bold" }}
        />

        {/* اسم السيارة */}
        <Typography variant="h4" fontWeight="bold">
          {car.name}
        </Typography>

        {/* السعر +  +   */}
        <Stack direction="row" spacing={3} sx={{ my: 2 }}>
          <Stack direction="row" spacing={0}>
            <AttachMoneyIcon />
            <Typography>{car.price}</Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <SpeedIcon />
            <Typography>{car.speed}</Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <LocalGasStationIcon />
            <Typography>{car.fuel}</Typography>
          </Stack>
        </Stack>

        {/* شبكة المواصفات */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {/* map  إنشاء عنصر لكل مواصفة */}
          {visibleSpecs.map((spec, i) => (
            <Grid item xs={6} sm={3} key={i}>
              {/* بطاقة صغيرة للمواصفة */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  p: 1.2,
                  borderRadius: 2,
                  bgcolor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(6px)",
                }}
              >
                {spec.icon}
                <Typography variant="body2">{spec.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* زر إظهار أو إخفاء المواصفات */}
        <Button
          variant="outlined"
          onClick={() => setShow(!show)}
          sx={{
            fontWeight: "bold",
            borderColor: "#fff",
            color: "#fff",
          }}
        >
          {show ? "إخفاء المواصفات" : "عرض المواصفات"}
        </Button>
      </CardContent>
    </Card>
  );
}
