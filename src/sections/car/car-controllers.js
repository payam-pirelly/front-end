import { IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { toggledCarStatus, toggledIsHotspot } from "src/redux/car-slice";
import OverviewIcon from "src/components/icon/overview-icon";
import WarrantyIcon from "src/components/icon/warranty-icon";
import WindowStickerIcon from "src/components/icon/window-sticker-icon";
import CarFaxIcon from "src/components/icon/carfax-icon";

const RightRoot = styled("div")(({}) => ({
  top: "30%",
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  right: 0,
}));

function CarControls({ handleClick }) {
  const { isHotspot, fullScreen } = useSelector((state) => state.car);
  const dispatch = useDispatch();

  const handleClickHotspot = () => {
    dispatch(toggledIsHotspot(true));
  };

  const handleClickCarStatus = (status) => {
    dispatch(toggledCarStatus(status));
  };

  return (
    <>
      <RightRoot sx={{ background: "#D9D9D9", borderRadius: 1, opacity: 0.9 }}>
        <Tooltip title={"car in"}>
          <IconButton sx={{ display: "block" }}>
            <OverviewIcon />
            <Typography
              sx={{ color: "black", fontSize: "xx-small" }}
              variant="caption"
              display="block"
              gutterBottom
            >
              OVERVIEW
            </Typography>
          </IconButton>
        </Tooltip>
        <Tooltip title={fullScreen ? "minimize" : "maximize"}>
          <IconButton sx={{ display: "block" }}>
            <WarrantyIcon />
            <Typography
              sx={{ color: "black", fontSize: "xx-small" }}
              variant="caption"
              display="block"
              gutterBottom
            >
              WARRANTY
            </Typography>
          </IconButton>
        </Tooltip>
        <Tooltip title={"car out 360"}>
          <IconButton sx={{ display: "block" }}>
            <WindowStickerIcon />
            <Typography
              sx={{ color: "black", fontSize: "xx-small" }}
              variant="caption"
              display="block"
              gutterBottom
            >
              WINDOW STICKER
            </Typography>
          </IconButton>
        </Tooltip>
        <Tooltip title={isHotspot ? "disable hotspot" : "enable hotspot"}>
          <IconButton sx={{ display: "block" }}>
            <CarFaxIcon />
            <Typography
              sx={{ color: "black", fontSize: "xx-small" }}
              variant="caption"
              display="block"
              gutterBottom
            >
              CARFAX
            </Typography>
          </IconButton>
        </Tooltip>
      </RightRoot>
    </>
  );
}

export default CarControls;
