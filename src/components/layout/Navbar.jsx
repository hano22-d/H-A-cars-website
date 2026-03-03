import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { NavItem } from "../UiComponents/navLink";
import { UseHeroContext } from "../../context/heroContext";
import Drawer from "./drawer";


function Navbar() {
  let { progress } = UseHeroContext();

  return (
    <>
      <Box
        sx={{
          zIndex: 9,
          position: "fixed",
          top: 0,
          background: "linear-gradient(90deg, #0A0A0A 0%, #1A0F0A 40%, #ff4c29 120%)",
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
          gap: [1, 3, 5, 7],
          p: [4, 3, 2, 1],
          bgcolor: "transparent",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: progress > 0.5 ? "2px solid #ff4c29" : "none",
        }}
        direction={["column", "column", "row", "row"]}
      >
        <Link to={'/'}>
        <Box
          component="img"
          src="public/WebsiteLogo.png"
          alt="Logo"
          sx={{
            width: { xs: "125px", sm: "90px", md: "110px", lg: "130px" },
            height: "auto",
            mt: 5,
            transform: {xs: `translate(${progress*100}px,${-progress*45}px)`,lg: 'translate(0)'}
          }}
        />
        </Link>
       
        <Stack
        display={{xs: 'none',lg: 'block'}}
          textAlign={"center"}
          direction={{ lg: "row", xs: "column" }}
          gap={{ xs: 1, lg: 4 }}
        >
          <NavItem to="/">HOME</NavItem>
          <NavItem to="/cars">CARS</NavItem>
          <NavItem to="/compare">Compare</NavItem>
          <NavItem to="/news">News</NavItem>
          <NavItem to="store">Store</NavItem>
        </Stack>
        <Drawer/>
      </Stack>
    </>
  );
}
export default Navbar;
