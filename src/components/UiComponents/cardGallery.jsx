import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";

import GallerySkeleton from "../skeletons/galleryCardSkeleton";

function CardGallery({ src, name, height, id }) {
  const [showdetails, setShowDetails] = useState(false);

  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();

  return (
      <Box
        overflow={"hidden"}
        sx={{
          width: { lg: 250, xs: "100%" },
          height: height,
          aspectRatio: "4/3",
          borderRadius: { lg: 2, xs: 1 },
          mb: "15px",
        }}
      >
        {!loaded && <GallerySkeleton height={height} />}
        <Card
          onMouseEnter={() => setShowDetails(true)}
          onMouseLeave={() => setShowDetails(false)}
          onClick={() => setShowDetails(prev => !prev)}
          className={showdetails ? "bluringCard" : ""}
          component={"img"}
          onLoad={() => setLoaded(true)}
          src={src}
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            opacity: loaded ? 1 : 0,
            transition: "all 0.4s ease",
          }}
        />
        <Stack
          onMouseEnter={() => setShowDetails(true)}
          onMouseLeave={() => setShowDetails(false)}
          onClick={() => setShowDetails(prev => !prev)}
          className={showdetails ? "showDetailsGaleery" : ""}
          sx={{
            height: {lg:"20%",xs: "70%"},
            justifyContent: "center",
            alignItems: "center",
            opacity: 0,
            visibility: "hidden",
            transform: "translateY(-70px)",
            transition: "all 0.4s ease",
          }}
        >
          <Typography
            variant="h6"
            textAlign={"center"}
            sx={{ color: "#fff", fontSize: { xs: 15, lg: 20 } }}
          >
            {name}
          </Typography>
          <Button
            onClick={() => navigate(`/gallery/car/${id}`)}
            variant={'outlined'}
            sx={{
              backgroundColor: { xs: "#ff4c29", lg: "transparent" },
              color: { xs: "#fff", lg: "#ff4c29" },
              width: { lg: "60%", xs: "90%" },
              border: { lg: "1px solid #ff4c29" },
              fontSize: { xs: 15, lg: 17 },
              borderRadius: {xs:0.5,lg: 1},
              p: {xs:0.5,lg: 1}
            }}
          >
            View Details
          </Button>
        </Stack>
      </Box>
  );
}
export default CardGallery;
