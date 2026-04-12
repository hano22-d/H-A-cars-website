import { Button, Card, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ShowList({ datas }) {

  const navigate = useNavigate()

  return (
    <Stack mt={5} px={{ lg: 5, xs: 0 }} pb={2} spacing={3}>
      {datas.flatMap((data) =>
        Object.values(data.mainImages).map((img) => (
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              textAlign: { xs: "center", sm: "left" },
              py: 2,
              gap: 2,
              width: "100%",
              bgcolor: "background.default",
              borderRadius: 1,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
              "&:hover": {
                backgroundColor: "#acb3b7",
                transition: "all 0.3s ease",
              },
            }}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Card
              sx={{
                width: {lg:60,xs: "50vw"},
                height: {lg:60},
                flexShrink: 0,
              }}
              component={"img"}
              src={img}
              loading="lazy"
            />
            <Typography
              sx={{
                textTransform: "capitalize",
                width: { xs: "100%", sm: "50%" },
              }}
              variant="body1"
            >{`${data.brand} ${data.model}`}</Typography>
            <Button
                  onClick={() => navigate(`/gallery/car/${data.id}`)}
              variant="outlined"
              sx={{
                width: { xs: "90%", sm: "auto", borderRadius: 1 },borderRadius: 1
              }}
            >
              Show Details
            </Button>
          </Stack>
        ))
      )}
    </Stack>
  );
}
export default ShowList;
