import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavItem } from "../UiComponents/navLink";
import Divider from "@mui/material/Divider";
import HelpIcon from "@mui/icons-material/Help";
import { UsethemeToggle } from "../../context/themeContext";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "../../App.css";

import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from '@mui/icons-material/Collections';
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ArticleIcon from "@mui/icons-material/Article";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LanguageSelector from "../UiComponents/languageSelector";
import { useTranslation } from "react-i18next";

function Drawer() {
  const {t} = useTranslation()
  const { toggleMode, toggleModeChange } = UsethemeToggle();

const navLinkList = [
  { id: 1, text: "navbar.home", link: "/", icon: <HomeIcon /> },
  { id: 2, text: "navbar.cars", link: "/cars", icon: <DirectionsCarIcon /> },
  { id: 3, text: "navbar.compare", link: "/compare", icon: <CompareArrowsIcon /> },
  { id: 4, text: "navbar.news", link: "/news", icon: <ArticleIcon /> },
  { id: 5, text: "navbar.store", link: "/store", icon: <LocalGroceryStoreIcon /> },
  {id: 6, text: "navbar.gallery", link: "/gallery",icon: <CollectionsIcon/> }
];

  const [open, setOpen] = useState(true);

  function openHandle() {
    setOpen((prev) => !prev);
  }

  return (
    <>
      <Button
        sx={{
          zIndex: 99,
          cursor: "pointer",
          position: "absolute",
          top: 25,
          left: open ? 15 : "50%",
          display: { xs: "block", lg: "none", md: "none" },
          "&:hover": {
            bgcolor: "transparent",
            color: "background.paper",
          },
        }}
        onClick={openHandle}
      >
        {open ? <MenuIcon /> : <CloseIcon />}
      </Button>
      <Box
        sx={{
          overflow: 'auto',
          display: { xs: "block", lg: "none", md: "none" },
          transform: `translateX(${open ? "-400px" : 0})`,
          transition: "transform 0.4s ease",
          position: "absolute",
          top: 0,
          left: 0,
          width: "70%",
          height: "100vh",
          background:
            "linear-gradient(135deg, rgba(20, 20, 20, 0.85) 0%, rgba(255, 76, 41, 0.25) 100%)",
          backdropFilter: "blur(15px)",
          borderRight: "2px solid rgba(255, 76, 41, 0.3)",
          boxShadow: "0 0 30px rgba(255, 76, 41, 0.3)",
          color: "#fff",
          opacity: 0.8,
          zIndex: 98,
          pt: 10,
        }}
      >
        <Stack direction={"row"}>
          <Typography color={"primary.main"} variant="body1" px={1}>
            User
          </Typography>
          <Divider
            orientation="vertical"
            sx={{ width: "60%", alignSelf: "center" }}
          />
        </Stack>
        <Stack my={2} gap={1} alignItems={"center"}>
          <Button sx={{ width: "50%" }} variant="outlined">
           <AccountCircleIcon sx={{mr: 1}}/> Login
          </Button>
          <Button sx={{ width: "50%" }} variant="contained">
            Sign up
          </Button>
        </Stack>

        <Stack direction={"row"}>
          <Typography color={"primary.main"} variant="body1" px={1}>
            Pages
          </Typography>
          <Divider
            orientation="vertical"
            sx={{ width: "60%", alignSelf: "center" }}
          />
        </Stack>
        <Stack my={2}>
           {navLinkList.map((nav) => {
                     return (
                       <NavItem className={"nav-item"} key={nav.id} to={nav.link}>
                         <span className="label">{t(nav.text)}</span>
                         <span className="icon">{nav.icon}</span>
                       </NavItem>
                     );
                   })}
        </Stack>
        <Stack direction={"row"}>
          <Typography color={"primary.main"} variant="body1" px={1}>
            Settings
          </Typography>
          <Divider
            orientation="vertical"
            sx={{ width: "55%", alignSelf: "center" }}
          />
        </Stack>
        <Button onClick={toggleModeChange}>
          {toggleMode ? <BedtimeIcon /> : <WbSunnyIcon />}
          <Typography variant="body1" color={"wheat"} mx={1}>
            {t("drawer.theme")}
          </Typography>
        </Button>
        <br />
        <Box m={2}>
          <LanguageSelector />
        </Box>
        <Button>
          <HelpIcon />
          <Typography variant="body1" color={"wheat"} mx={1}>
            {t("drawer.support")}
          </Typography>
        </Button>
      </Box>
      <Box
        component={"button"}
        onClick={openHandle}
        sx={{
          transition: "all 0.3s ease",
          position: open ? "" : "fixed",
          display: open ? "none" : "block",
          inset: 0,
          bgcolor: "rgba(0, 0, 0, 0.6)",
        }}
      />
    </>
  );
}
export default Drawer;
