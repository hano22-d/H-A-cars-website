// => يستخدم للدلالة على عدم وجود نتائج مطابقة

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Container, Typography } from "@mui/material";

function EmptySkeleton() {
  return (
    <Container
      sx={{ my: { xs: 10, lg: 5 }, mb: 11, width: { lg: "40%", xs: "100%" } }}
    >
      <DotLottieReact
        src="/animations/empty loading state.lottie"
        autoplay={true}
        loop={true}
        style={{
          width: "100%",
          justifySelf: "center",
        }}
      />
      <Typography justifySelf={"center"} variant="h1">
        No Results
      </Typography>
    </Container>
  );
}
export default EmptySkeleton;
