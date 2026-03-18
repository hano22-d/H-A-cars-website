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
import Collapse from "@mui/material/Collapse";

import { useTranslation } from "react-i18next";

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
import OilBarrelOutlinedIcon from "@mui/icons-material/OilBarrelOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

// معلومات السيارة الأساسية
const car = {
  name: "Mrcedes-Benz S-Class W223 S580",
  image: "https://octane.rent/wp-content/uploads/2023/03/mercedes-benz-s-class-223-black-1.jpg",
  price: "120,000",
  speed: "250 km/h",
  fuel: "Petrol",
  year: "2026",
};
// قائمة المواصفات مرتبة حسب الأهمية
const specs = [
  // الأداء
  { icon: <BoltIcon />, label: "Power: 537 HP" },
  { icon: <TimerIcon />, label: "0-100 km/h: 4.2s" },
  { icon: <SpeedIcon />, label: "Top Speed: 250 km/h" },

  // المحرك ونظام الدفع
  { icon: <OilBarrelOutlinedIcon />, label: "Displacement: 4.0L" },
  { icon: <SettingsOutlinedIcon />, label: "Engine: V-8 Twin-Turbo" },
  { icon: <SettingsIcon />, label: "Drive System: 4MATIC AWD" },
  { icon: <SettingsIcon />, label: "Transmission: Automatic 9G-TRONIC" },
  { icon: <LocalGasStationIcon />, label: "Fuel Type: Gasoline" },

  // معلومات السيارة الأساسية
  { icon: <EventSeatIcon />, label: "Seats: 5" },
  { icon: <FitnessCenterIcon />, label: "Weight: 2175 kg" },
  { icon: <LocalGasStationIcon />, label: "Fuel Tank: 76L" },

  // الأمان
  { icon: <HealthAndSafety />, label: "Airbags: 15" },
  { icon: <SecurityIcon />, label: "Safety: ABS System" },
  { icon: <CarCrashIcon />, label: "Stability: Traction Control" },

  // الراحة والتكنولوجيا
  { icon: <AcUnitIcon />, label: "Climate: Dual Zone AC" },
  { icon: <MonitorIcon />, label: "Display: 12.8 inch" },
  { icon: <VolumUpIcon />, label: "Audio: Burmester Sound" },

  // معلومات إضافية
  { icon: <PaletteIcon />, label: "Color: Black" },
];

export default function ExceptionalCar() {
  // حالة للتحكم في إظهار أو إخفاء المواصفات الإضافية
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 8
      }}
    >
    
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
          mb: 2,
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
            className="title"
            icon={<LocalFireDepartmentIcon />}
            label="Exceptional Car"
            color="primary"
            sx={{ mb: 2, fontWeight: "bold" }}
          />

          {/* اسم السيارة */}
          <Typography variant="h3" fontWeight="bold">
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
            {specs.slice(0, 4).map((spec, i) => (
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
                    border: "1px solid #ff4c29",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {spec.icon}
                  <Typography variant="body2">{spec.label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          {/* المواصفات الإضافية */}
          <Collapse in={show}>
            <Grid container spacing={2} mb={2}>
              {specs.slice(4).map((spec, i) => (
                <Grid item xs={6} sm={3} key={i}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      p: 1.2,
                      borderRadius: 2,
                      bgcolor: "rgba(255,255,255,0.08)",
                      border: "1px solid #ff4c29",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {spec.icon}
                    <Typography variant="body2">{spec.label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Collapse>

          {/* زر إظهار أو إخفاء المواصفات */}
          <Button
            variant="outlined"
            onClick={() => setShow(!show)}
            sx={{
              textTransform: "capitalize",
            }}
          >
            {show
              ? t("home.carDay.HideSpecifications")
              : t("home.carDay.ViewSpecifications")}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
