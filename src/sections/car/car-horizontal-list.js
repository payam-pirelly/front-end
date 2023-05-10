import * as React from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggledCarIndex } from "src/redux/car-slice";
import { Box } from "@mui/system";

export default function CarHorizontalList() {
  const cars = useSelector((state) => state.car?.car);
  const { carIndex } = useSelector((state) => state.car);
  const dispatch = useDispatch();

  const handleOnClick = (data) => {
    dispatch(toggledCarIndex(data));
  };

  return (
    <Box sx={{ position: "absolute", bottom: 0, width: "100%" }}>
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
              src={`/images/${image?.image}.jpg`}
              style={{
                borderRadius: 10,
                border: carIndex === image?.image ? "3px double #32a1ce" : "none",
              }}
            />
            <ImageListItemBar title={image.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
