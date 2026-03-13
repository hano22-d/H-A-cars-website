import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavItem = styled(NavLink)(({ theme }) => ({
  fontSize: 18,
  borderRadius: 2 ,
  color: "wheat",
  margin: theme.spacing(0,1),
  padding: theme.spacing(1, 2),
  textDecoration: "none",
  fontWeight:500,
  ffontFamily: "tajawal, sans-serif",
  transition: theme.transitions.create(["background-color", "color"], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeOut,
  }),
 
  "&:hover": {
    color: theme.palette.primary.main,
   background: 'rgb(245, 245, 220)',
   opacity: 0.8
  },
  "&.active": {
    color: theme.palette.primary.main,
      background: 'rgb(245, 245, 220)'
  },
}));
