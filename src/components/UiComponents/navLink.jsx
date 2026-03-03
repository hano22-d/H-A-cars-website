import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavItem = styled(Link)(({ theme }) => ({
  color: "wheat",
  margin: theme.spacing(0),
  padding: theme.spacing(1, 2),
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
