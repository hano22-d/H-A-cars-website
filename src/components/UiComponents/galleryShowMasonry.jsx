import Masonry from "react-masonry-css";
import CardGallery from "./cardGallery";
import "../../App.css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
};

function ShowMasonry({ datas }) {
  return (
    <Masonry
     style={{marginTop: '45px'}}
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {datas.flatMap((data) =>
        Object.values(data.mainImages || {}).map((img,index) => {
          //نقوم بحساب طول عشوائي لكل صورة
          const height = 125 + Math.random() * 125;
          return (
            <CardGallery
              key={`${data.id}-${index}`}
              src={img}
              name={`${data.brand} - ${data.model}`}
              height={height}
              id={data.id}
            />
          );
        })
      )}
    </Masonry>
  );
}

export default ShowMasonry;
