import { Container, Typography } from "@mui/material";import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "@fontsource/matemasie";

function ErrorPage() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        height: "100vh",
        pt: 5,
      }}
    >
      <Typography
        textAlign={"center"}
        variant="h3"
        color={"#111"}
        fontWeight={700}
      >
        <span
          style={{
            fontSize: 50,
            fontFamily: `"Matemasie", sans-serif`,
            color: "#ff4c29",
          }}
        >
          Oops! ..
        </span>{" "}
        This road is a dead end
      </Typography>
      <DotLottieReact
        src="/animations/Error 404 Animation.lottie"
        loop
        autoplay
        style={{ width: "50vw", alignSelf: "center" }}
      />
    </Container>
  );
}
export default ErrorPage;
