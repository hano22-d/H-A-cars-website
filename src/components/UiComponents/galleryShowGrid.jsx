import { Grid } from "@mui/material";
import CardGallery from "./cardGallery";

function ShowGrid({ datas }) {
  return (
    <Grid container mt={{lg: 5,xs:3}} pl={{lg:3,xs: 0}} rowSpacing={{lg:2,xs: 0}} columnSpacing={{xs: 1}}>
    {datas.flatMap((data) =>
      Object.values(data.mainImages).map((img, index) => (
        <Grid item lg={3} xs={6} key={data.id + "-" + index}>
          <CardGallery
            height={200}
            src={img}
            name={`${data.brand} ${data.model}`}
            id={data.id}
          />
        </Grid>
      ))
    )}
  </Grid>
  );
}
export default ShowGrid;
