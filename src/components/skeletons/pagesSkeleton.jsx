// => يستخدم في جميع الصفحات لانتظار وصول البيانات

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Container } from "@mui/material";

function PagesLoading() {
  return (
    <Container sx={{ mt: 20 }}>
      <DotLottieReact
        src="/animations/loading_gray.lottie"
        autoplay={true}
        loop={true}
        style={{
          width: "50%",
          justifySelf: "center",
        }}
      />
    </Container>
  );
}
export default PagesLoading;
