import { Card, Skeleton } from "@mui/material";

function GalleryDetailsSkeleton() {
  return (
    <Card
      sx={{
        width: "100%",
        height: "190vh",
        borderRadius: 2,
        p: 3,
        my: 2,
      }}
    >
      <Skeleton
        variant="text"
        animation="wave"
        sx={{
          width: "20%",
          mx: "auto",
        }}
      />
      <Skeleton
        variant="text"
        animation="wave"
        sx={{
          width: "40%",
          mx: "auto",
          mb: 5,
        }}
      />
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{
          width: "60vw",
          height: 400,
          borderRadius: 1,
          justifySelf: "center",
        }}
      />
    </Card>
  );
}
export default GalleryDetailsSkeleton;
