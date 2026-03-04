import { Card, Typography } from "@mui/material";
import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { NavItem } from "../components/UiComponents/navLink";
import { UseHeroContext } from "../context/heroContext";
import Drawer from "../components/layout/drawer";
import Footer from "../components/layout/Footer";
import CarHero from "../components/layout/heroNavbar";
import { UsethemeToggle } from "../context/themeContext";
import {Button} from "@mui/material";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";



function Navbar() {
  let { progress } = UseHeroContext();
    const { toggleMode, toggleModeChange } = UsethemeToggle();

  return (
    <>
      <Box
        sx={{
          zIndex: 9,
          position: "fixed",
          top: 0,
          background:
            "linear-gradient(90deg, #0A0A0A 0%, #1A0F0A 40%, #ff4c29 120%)",
          height: "100px",
          width: "100%",
          opacity: progress,
        }}
      />
      <Stack
        sx={{
          zIndex: 10,
          position: "fixed",
          top: 0,
          width: "100%",
          height: "100px",
          p: [4, 3, 2, 3],
          bgcolor: "transparent",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: progress > 0.5 ? "2px solid #ff4c29" : "none",
        }}
        direction={["column", "column", "row", "row"]}
      >
        <Link to="/home">
          <Box
            component="img"
            src="/WebsiteLogo.png"
            alt="Logo"
            sx={{
              width: { xs: "125px", sm: "90px", md: "110px", lg: "130px" },
              height: "auto",
              mt: 2,
              transform: {
                xs: `translate(${progress * 100}px,${-progress * 55}px)`,
                lg: "translate(0)",
              },
            }}
          />
        </Link>
        <Stack sx={{position:'absolute',left: '12%'}} direction={"row"}>
          <Button
          title="Theme"
            sx={{
              display: { lg: "block", xs: "none" },
              "&:hover": {
                bgcolor: "transparent",
                color: "background.paper",
              },
            }}
            onClick={toggleModeChange}
          >
            {toggleMode ? <BedtimeIcon /> : <WbSunnyIcon />}
          </Button>
          <Button title="User" sx={{right: 10, display: { lg: "block", xs: "none" }, "&:hover": {
            bgcolor: "transparent",
            color: "background.paper",
          },}}>
            <AccountCircleIcon />
          </Button>
        </Stack>

        <Stack
          display={{ xs: "none", lg: "block" }}
          textAlign={"center"}
          direction={{ lg: "row", xs: "column" }}
          gap={{ xs: 1, lg: 4 }}
        >
          <NavItem to="/home">HOME</NavItem>
          <NavItem to="/cars">CARS</NavItem>
          <NavItem to="/compare">Compare</NavItem>
          <NavItem to="/news">News</NavItem>
          <NavItem to="/store">Store</NavItem>
        </Stack>
        <Drawer />
      </Stack>
    </>
  );
}

function Home() {
  return (
    <>
      <CarHero />
      <Navbar />
      <Card
        sx={{
          maxWidth: { xs: 0.8, lg: 0.55 },
          height: "auto",
          mx: "auto",
          my: 20,
          p: 10,

          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", lg: "2.5rem" } }}
        >
          Welcome in Home Page
        </Typography>
        <Typography>Devolopers: Hani and Ali</Typography>
        <Typography>
          هل تريد أن تستكشف عالم السيارات؟ أنت في المكان الصحيح
        </Typography>
      </Card>
      <Footer />
    </>
  );
}
export default Home;
