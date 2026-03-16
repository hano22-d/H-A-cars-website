import { Typography } from "@mui/material";
import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { NavItem } from "../components/UiComponents/navLink";
import { UseHeroContext } from "../context/heroContext";
import Drawer from "../components/layout/drawer";
import Footer from "../components/layout/Footer";
import CarHero from "../components/layout/heroNavbar";
import { UsethemeToggle } from "../context/themeContext";
import { Button } from "@mui/material";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "../App.css";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ArticleIcon from "@mui/icons-material/Article";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useTranslation } from "react-i18next";

import LanguageSelector from "../components/UiComponents/languageSelector";
import HeroSlider from "../components/UiComponents/DynamicHome";
import TodayNewsHome from "../components/UiComponents/TodayNewsHome";
import TodayCarHome from "../components/UiComponents/TodayCarHome";
import PopularCarsHome from "../components/UiComponents/PopularCarsHome";

function Navbar() {
  const { t } = useTranslation();

  const navLinkList = [
    { id: 1, text: "navbar.home", link: "/", icon: <HomeIcon /> },
    { id: 2, text: "navbar.cars", link: "/cars", icon: <DirectionsCarIcon /> },
    {
      id: 3,
      text: "navbar.compare",
      link: "/compare",
      icon: <CompareArrowsIcon />,
    },
    { id: 4, text: "navbar.news", link: "/news", icon: <ArticleIcon /> },
    {
      id: 5,
      text: "navbar.store",
      link: "/store",
      icon: <LocalGroceryStoreIcon />,
    },
  ];

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
        <Link to="/">
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
        <Stack sx={{ position: "absolute", left: "12%" }} direction={"row"}>
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
          <Button
            title="User"
            sx={{
              right: 10,
              display: { lg: "block", xs: "none" },
              "&:hover": {
                bgcolor: "transparent",
                color: "background.paper",
              },
            }}
          >
            <AccountCircleIcon />
          </Button>

          <Box sx={{ display: { lg: "block", xs: "none" } }}>
            <LanguageSelector />
          </Box>
        </Stack>

        <Stack
          display={{ xs: "none", lg: "block" }}
          textAlign={"center"}
          direction={{ lg: "row", xs: "column" }}
        >
          {navLinkList.map((nav) => {
            return (
              <NavItem className={"nav-item"} key={nav.id} to={nav.link}>
                <span className="label">{t(nav.text)}</span>
                <span className="icon">{nav.icon}</span>
              </NavItem>
            );
          })}
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
      <Typography
        variant="h1"
        sx={{
          my: 10,
          fontSize: { xs: 30, sm: 40, md: 50, lg: 60 },
          fontFamily: "Black Ops One, system-ui",
          textAlign: "center",
        }}
      >
        Welcome ✨
      </Typography>
      <HeroSlider />
      <TodayNewsHome />
      <TodayCarHome />
      <PopularCarsHome />
      <Footer />
    </>
  );
}
export default Home;
