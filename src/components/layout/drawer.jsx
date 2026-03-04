import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavItem } from "../UiComponents/navLink";
import Divider from "@mui/material/Divider";
import HelpIcon from "@mui/icons-material/Help";
import { UsethemeToggle } from "../../context/themeContext";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"


function Drawer() {

  const {toggleMode, toggleModeChange} = UsethemeToggle()

  const navLinkList = [
    { id: 1, text: "Home", link: "home" },
    { id: 2, text: "Cars", link: "/cars" },
    { id: 3, text: "Compare", link: "/compare" },
    { id: 4, text: "News", link: "/news" },
    { id: 5, text: "Store", link: "/store" },
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
          left: open ? 15 : "55%",
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
        <Stack mb={2}>
          {navLinkList.map((nav) => {
            return (
              <NavItem onClick={openHandle} key={nav.id} to={nav.link}>
                {nav.text}
              </NavItem>
            );
          })}
        </Stack>
        <Divider />
        <Button sx={{ mt: 3 }}>
        <AccountCircleIcon/> <Typography color={"wheat"} variant="h3" mx={1}>Login</Typography> 
        </Button>
        <br />
        <Button>
          <SettingsIcon />
          <Typography variant="h3" color={"wheat"} mx={1}>
            Setting
          </Typography>
        </Button>
        <br />
        <Button>
          <HelpIcon />
          <Typography variant="h3" color={"wheat"} mx={1}>
            Support
          </Typography>
        </Button>
        <br />
        <Button onClick={toggleModeChange}>
          {toggleMode? <BedtimeIcon/> : <WbSunnyIcon/>}
          <Typography variant="h3" color={"wheat"} mx={1}>
            Theme
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
