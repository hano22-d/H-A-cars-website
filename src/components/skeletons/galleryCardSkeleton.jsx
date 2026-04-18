import { Box, Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

function GallerySkeleton({height}) {
  return (
    <Box
      sx={{
        width: "100%",
        height: height === "auto"? 200 : height,
        position: "relative",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >

      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        animation="wave"
      />

      <Stack
      justifyContent={'center'}
      alignItems={'center'}
        sx={{
          position: "absolute",
          bottom: 20,
          left: 30,
          right: 10,
          gap: 1,
        }}
      >
        <Skeleton variant="text" width="70%" />
        <Skeleton variant="text" width="40%" />
      </Stack>
    </Box>
  );
}

export default GallerySkeleton;