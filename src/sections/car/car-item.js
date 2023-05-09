import React from "react";

import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import ShowWindowDimensions from "src/utils/resize";
import { IconButton } from "@mui/material";
import { toggledCarIndex } from "src/redux/car-slice";
import { Box } from "@mui/system";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const CarItem = () => {
  //Selector
  const { carIndex } = useSelector((state) => state.car);
  const cars = useSelector((state) => state.car?.car);

  const { width } = ShowWindowDimensions();
  const dispatch = useDispatch();

  const handleClick = (num) => {
    const data = carIndex + num;
    if (data === 0) return;
    else if (data === cars?.length) return;
    else dispatch(toggledCarIndex(data));
  };

  return (
    <Box position={"relative"}>
      <IconButton
        disabled={carIndex === 1}
        edge="end"
        sx={{ position: "absolute", top: "50%", left: 0, color: "white" }}
        onClick={() => handleClick(-1)}
      >
        <ArrowBackRoundedIcon />
      </IconButton>
      <Image
        alt="image"
        priority
        src={`/images/${carIndex}.jpg`}
        style={{
          width: "auto",
          height: "auto",
          borderRadius: 10,
        }}
        width={width}
        height={600}
      />
      <IconButton
        disabled={carIndex === cars?.length}
        edge="start"
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          color: "white",
        }}
        onClick={() => handleClick(+1)}
      >
        <ArrowForwardRoundedIcon />
      </IconButton>
    </Box>
  );
};

export default CarItem;