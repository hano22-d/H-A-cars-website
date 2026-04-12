import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Container } from "@mui/material";

function Gallery3D() {
  return (
    <Container sx={{ m: 5,mb: 10, width: {lg:"70%",xs: "100vw"},}}>
      <DotLottieReact src="/animations/Coming soon.lottie" autoplay loop />
    </Container>
  );
}
export default Gallery3D;
