import * as React from "react";
import { ImageList, ImageListItem, ImageListItemBar, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggledCarIndex } from "src/redux/carSlice";

export default function CarHorizontalList() {
  const cars = useSelector((state) => state.car?.car);
  const { carIndex } = useSelector((state) => state.car);
  const dispatch = useDispatch();

  const handleOnClick = (data) => {
    console.log(data);
    dispatch(toggledCarIndex(data));
  };
  return (
    <Grid container sx={{ flex: "1 1 auto" }}>
      <Grid xs={12} padding={1}>
        <ImageList
          sx={{
            gridAutoFlow: "column",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr)) !important",
            gridAutoColumns: "minmax(160px, 1fr)",
          }}
        >
          {cars?.map((image, id) => (
            <ImageListItem
              onClick={() => handleOnClick(image?.image)}
              key={id}
              sx={{
                cursor: "pointer",
              }}
            >
              <img
                src={`/images/lambo${image?.image}.jpg`}
                style={{
                  border: carIndex === "image?.image" ? "thick double #32a1ce" : "none",
                }}
              />
              <ImageListItemBar title={image.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
}
