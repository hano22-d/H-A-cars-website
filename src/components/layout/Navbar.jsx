import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const NavItem = styled(Link)(({ theme }) => ({
  color: "wheat",
  margin: theme.spacing(0),
  padding: theme.spacing(1, 2),
  borderRadius: 10,
  textDecoration: "none",
  fontFamily: theme.typography.h1.fontFamily,
  transition: theme.transitions.create(["background-color", "color"], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeOut,
  }),
  "&:hover": {
    backgroundColor: "#ff4c29",
    color: "#111",
  },
}));

function Navbar() {

  return (
    <Stack
      sx={{
        gap: [1, 3, 5, 7],
        p: [4, 3, 2, 1],
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "secondary.main",
        borderBottom: "2px solid #ff4c29",
      }}
      direction={["column", 'column', 'row', "row"]}
    >
      <Box
        component="img"
        src="/Main-Logo.png"
        alt="Logo"
        sx={{
          width: { xs: "200px", sm: "90px", md: "110px", lg: "130px" },
          height: "auto",
        }}
      />
      <Stack direction={"row"} gap={{xs: 1,lg: 4}}>
        <NavItem to="/">HOME</NavItem>
        <NavItem to="/cars">CARS</NavItem>
        <NavItem to="/compare">Compare</NavItem>
        <NavItem to="/news">News</NavItem>
        <NavItem to="store">Store</NavItem>
      </Stack>
    </Stack>
  );
}
export default Navbar;
