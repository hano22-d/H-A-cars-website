// => يستخدم لانتظار عمليات الفلترة او البحث او ما شابه

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Container } from "@mui/material";

function SearchLoading({show}) {
  return (
    <>
      {show && (
        <Container sx={{my: 10,mb: 20,width: {lg: "30%",xs: "100%"}}}>
          <DotLottieReact
            src="/animations/Loading.lottie"
            autoplay={true}
            loop={true}
            style={{
                width: '100%',
                justifySelf: 'center'
            }}
          />
        </Container>
      )}
    </>
  );
}
export default SearchLoading;
