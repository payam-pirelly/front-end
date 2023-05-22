import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useDispatch, useSelector } from "react-redux";
import { toggledCarIndex } from "src/redux/car-slice";
import { useRef } from "react";

const imagePath = "https://fastly-production.24c.in/webin/360/output_1.jpeg";

export default function ShowCars() {
  const cars = useSelector((state) => state.car?.car);
  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleOnClick = (data) => {
    dispatch(toggledCarIndex(data));
  };

  return (
    <ImageList
      gap={2}
      ref={ref}
      sx={{
        gridTemplateColumns: {
          xs: "repeat(1, 1fr) !important",
          sm: "repeat(2, 1fr) !important",
          md: "repeat(4, 1fr) !important",
          lg: "repeat(5, 1fr) !important",
          xl: "repeat(6, 1fr) !important",
        },
      }}
    >
      {Array.from({ length: 10 }, (_, index) => index + 1)?.map((item) => (
        <ImageListItem
          key={item}
          sx={{
            width: "200px",
            height: "auto",
          }}
        >
          <img
            onClick={() => handleOnClick(item)}
            src={imagePath}
            style={{
              borderRadius: 10,
              cursor: "pointer",
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
