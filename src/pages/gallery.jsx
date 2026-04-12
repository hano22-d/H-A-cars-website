import { Outlet } from "react-router-dom";
import "@fontsource/black-ops-one";

// mui imports
import { Link, Box, Container, Stack, Typography } from "@mui/material";

// css import
import "../App.css";

// hooks
import { useLocation } from "react-router-dom";
import { useState } from "react";

import { HoverLottie } from "../components/UiComponents/hoverdIcon";

function Gallery() {
  const location = useLocation();

  // حالة مرور الماوس
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2d, setIsHovered2d] = useState(false);

  const isActive3D = location.pathname === "/gallery/gallery3d";
  const isAvctive2d = location.pathname === "/gallery";

  const shouldActive2 = isHovered2d || isAvctive2d;
  const shouldActive3d = isHovered || isActive3D;

  return (
    <>
      {/* الحاوية الكبرى */}
      <Box
        sx={{
          mt: 18,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        {/* حاوية العنوان */}
        <Box
          sx={{
            textAlign: "center",
            perspective: "1000px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Black Ops One", system-ui',
              textTransform: "uppercase",
              letterSpacing: { lg: "2px", xs: 0 },
              WebkitBoxReflect: {
                xs: "below -38px linear-gradient(transparent, rgba(0,0,0,0.2))",
                lg: "below -100px linear-gradient(transparent, rgba(0,0,0,0.2))",
              },
              textShadow: "0px 10px 20px rgba(0,0,0,0.5)",
              fontSize: { xs: "1.6rem", md: "4rem" },
            }}
          >
            H & A Cars Gallery
          </Typography>
        </Box>

        {/* الروابط */}
        <Stack
          justifyContent={"center"}
          sx={{ flexDirection: { lg: "row", xs: "column" } }}
        >
          <Link
            onMouseEnter={() => setIsHovered2d(true)}
            onMouseLeave={() => setIsHovered2d(false)}
            sx={{
              display: "flex",
              alignItems: "center",
              p: 1,
              px: 5,
              fontSize: 20,
              fontWeight: 500,
              borderRadius:{xs:"10px 10px 0 0",lg: 0},
              borderLeft: { lg: "none", xs: "1px solid #ff4c29" },
              borderRight: { lg: "none", xs: "1px solid #ff4c29" },
              borderTop: "1px solid #ff4c29",
              borderBottom: "1px solid #ff4c29",
              textDecoration: "none",
              "&:hover": {
                backgroundImage: {
                  lg: "linear-gradient(to left, #ff4c29 60%,transparent)",
                  xs: "linear-gradient(to left, #ff4c29 100%,transparent)",
                },
                color: "wheat",
                transition: "all 0.3s ease",
              },
              ...(location.pathname === "/gallery" && {
                backgroundImage: {
                  lg: "linear-gradient(to left, #ff4c29 60%,transparent)",
                  xs: "linear-gradient(to left, #ff4c29 100%,transparent)",
                },
                color: "wheat",
              }),
            }}
            to={"/gallery"}
            className={
              location.pathname === "/gallery" ? "active2dGallery" : ""
            }
          >
            <Typography variant="h5" sx={{ order: { lg: 1, xs: 0 } }}>
              2D Gallery
            </Typography>
            <Box
              component="span"
              sx={{
                opacity: shouldActive2 ? 1 : 0,
                transition: "opacity 0.3s ease",
                display: "flex",
                alignItems: "center",
                ml: 1,
              }}
            >
              <HoverLottie
                src={"/animations/Gallery Image Icon 01.lottie"}
                active={shouldActive2}
              />
            </Box>
          </Link>

          <Link
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            to={"/gallery/gallery3d"}
            className={isActive3D ? "active3dGallery" : ""}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 1,
              px: 5,
              fontSize: 20,
              fontWeight: 500,
              borderRadius: {xs:"0 0 10px 10px",lg: 0},
              border: "1px solid #ff4c29",
              borderLeft: { lg: "1px solid wheat", xs: "1px solid #ff4c29" },
              borderRight: { lg: "none", xs: "1px solid #ff4c29" },
              textDecoration: "none",
              color: "inherit",
              "&:hover": {
                backgroundImage: {
                  lg: "linear-gradient(to right, #ff4c29 60%,transparent)",
                  xs: "linear-gradient(to right, #ff4c29 100%,transparent)",
                },
                color: "wheat",
                transition: "all 0.3s ease",
              },
              ...(isActive3D && {
                backgroundImage: {
                  lg: "linear-gradient(to right, #ff4c29 60%,transparent)",
                  xs: "linear-gradient(to right, #ff4c29 100%,transparent)",
                },
                color: "wheat",
              }),
            }}
          >
            <Typography variant="h5">3D Gallery</Typography>
            <Box
              component="span"
              sx={{
                opacity: shouldActive3d ? 1 : 0,
                transition: "opacity 0.3s ease",
                display: "flex",
                alignItems: "center",
                ml: 1,
              }}
            >
              <HoverLottie
                src={"/animations/Caranimated.lottie"}
                active={shouldActive3d}
              />
            </Box>
          </Link>
        </Stack>

        {/* محتوى المعرض */}
        <Outlet />
      </Box>
    </>
  );
}

export default Gallery;
