// => يستخدم للدلالة على عدم وجود نتائج مطابقة

import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { Container, Typography } from "@mui/material"

function EmptySkeleton () {
    return (
       <Container sx={{my: 5}}>
         <DotLottieReact 
         src="/animations/empty loading state.lottie"
         autoplay={true}
         loop={true}
         style={{
            width: '40%',
            justifySelf: 'center',
         }}
         />
         <Typography justifySelf={'center'} variant="h2">No Results</Typography>
       </Container>
    )
}
export default EmptySkeleton