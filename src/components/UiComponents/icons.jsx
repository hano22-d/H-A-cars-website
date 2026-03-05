import styled from "@emotion/styled";
import { SvgIcon } from "@mui/material";

const StyledIcon = styled(SvgIcon, {
  shouldForwardProp: (prop) => prop !== "brandColor" && prop !== "size",
})(({ theme, size, brandColor }) => ({
  color: theme.palette.primary.main,
  transition: "all 0.1s ease-in-out",
  cursor: "pointer",
  ...(size === "small" && { fontSize: 20 }),
  ...(size === "medium" && { fontSize: 24 }),
  ...(size === "large" && { fontSize: 32 }),

  "&:hover": {
    ...(brandColor === "facebook" && { color: "#1877F2" }),
    ...(brandColor === "instagram" && { color: "#833AB4" }),
    ...(brandColor === "whatsApp" && { color: "#25D366" }),
    transform: "translateY(-2px)",
  },
}));

export default StyledIcon;
