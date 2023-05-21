import { IconButton, Tooltip, Typography, Box, Fade } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import OverviewIcon from "src/components/icon/overview-icon";
import WarrantyIcon from "src/components/icon/warranty-icon";
import WindowStickerIcon from "src/components/icon/window-sticker-icon";
import CarFaxIcon from "src/components/icon/carfax-icon";
import { toggledCarStatus } from "src/redux/car-slice";
import { exitFullscreen } from "src/utils/fullscreen";
import { useDispatch } from "react-redux";
import CancelIcon from "src/components/icon/cancel-icon";
import { useState } from "react";
import ArrowDownIcon from "src/components/icon/arrow-down-icon";
import ArrowUpIcon from "src/components/icon/arrow-up-icon";
import HotspotIcon from "src/components/icon/hotspot-icon";

const RightRoot = styled("div")(({}) => ({
  top: "30%",
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  right: "1rem",
  height: "40%",
  display: "flex",
  justifyContent: "space-around",
}));

const CarButtons = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const handleClose = () => {
    dispatch(toggledCarStatus("main"));
    exitFullscreen();
  };

  const leftButtons = () => <></>;

  const rightButtons = () => (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "2.5rem",
        }}
      >
        <IconButton onClick={handleClose} aria-label="close">
          <CancelIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "2.5rem",
        }}
      >
        <IconButton onClick={handleChange}>
          {checked ? <ArrowDownIcon fontSize="large" /> : <ArrowUpIcon fontSize="large" />}
        </IconButton>
      </Box>
      <Fade in={checked}>
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
        </RightRoot>
      </Fade>
    </>
  );

  return (
    <>
      {leftButtons()}
      {rightButtons()}
    </>
  );
};

export default CarButtons;
