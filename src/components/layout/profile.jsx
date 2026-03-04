import { Box, Card, Link, Stack, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";



function SimpleAvatar({ image, color, name, text }) {
  return (
    <Stack alignItems={"center"} sx={{}}>
      <Box
        component={"img"}
        src={image}
        alt="صورة شخصية"
        sx={{
          width: 130,
          height: 170,
          border: `4px solid #ff4c29`,
          boxShadow: "0 4px 15px rgba(22, 15, 36, 0.3)",
          borderRadius: "30px 0 30px 0",
          transform: "translateY(75px)",
          zIndex: 1,
        }}
      />
      <Card
        sx={{
          justifySelf: "center",
          width: { lg: "500px",md: '50vw', xs: "80vw" },
          minHeight: {lg:"80vh",xs: '70vh'},
          background: color,
          opacity: "0.8",
          borderRadius: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          p: 3,
          textAlign: "center",
          direction: "rtl",
          "&:hover h3": {
            transform: "translateY(-15px)",
            transformOrigin: "center",
            transition: "transform 0.2s ease",
          },
        }}
      >
        <Typography variant="h3">{name}</Typography>
        <Typography>{text}</Typography>
        <Stack direction={'row'} gap={2} mt={3}>
        <Link>
      <GitHubIcon/>
      </Link>
      <Link>
      <FacebookIcon/>
      </Link>
      <Link>
      <InstagramIcon/>
      </Link>
        </Stack>
     
      </Card>


    </Stack>
  );
}
export default SimpleAvatar;
