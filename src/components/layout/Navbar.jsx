import { Stack, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { NavItem } from "../UiComponents/navLink";
import Drawer from "./drawer";
import { UsethemeToggle } from "../../context/themeContext";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
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
          borderBottom: "2px solid #ff4c29",
        }}
        direction={["column", "column", "row", "row"]}
      >
        <Link to={"/"}>
          <Box
            component="img"
            src="/WebsiteLogo.png"
            alt="Logo"
            sx={{
              width: { xs: "125px", sm: "90px", md: "110px", lg: "130px" },
              height: "auto",
              mt: 2,
              transform: { xs: `translate(100px,-55px)`, lg: "translate(0)" },
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
          <Button title="User" sx={{right: 10,  display: { lg: "block", xs: "none" },  "&:hover": {
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
          <NavItem to="/">HOME</NavItem>
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
export default Navbar;
