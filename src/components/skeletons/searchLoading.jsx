// => يستخدم لانتظار عمليات الفلترة او البحث او ما شابه

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Container } from "@mui/material";

function SearchLoading({show}) {
  return (
    <>
      {show && (
        <Container sx={{my: 5}}>
          <DotLottieReact
            src="/animations/Loading.lottie"
            autoplay={true}
            loop={true}
            style={{
                width: '50%',
                justifySelf: 'center'
            }}
          />
        </Container>
      )}
    </>
  );
}
export default SearchLoading;
