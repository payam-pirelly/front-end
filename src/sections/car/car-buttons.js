import {
  IconButton,
  Tooltip,
  Typography,
  Box,
  Fade,
  Tabs,
  Tab,
  FormControlLabel,
  Switch,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import OverviewIcon from "src/components/icon/overview-icon";
import WarrantyIcon from "src/components/icon/warranty-icon";
import { toggledCarStatus, toggledIsHotspot } from "src/redux/car-slice";
import { exitFullscreen } from "src/utils/fullscreen";
import { useDispatch } from "react-redux";
import CancelIcon from "src/components/icon/cancel-icon";
import { useState } from "react";
import ArrowDownIcon from "src/components/icon/arrow-down-icon";
import ArrowUpIcon from "src/components/icon/arrow-up-icon";
import IconLabelButton from "src/components/button/Icon-label-button";
import InfoIcon from "src/components/icon/info-Icon";
import HotspotIcon from "src/components/icon/hotspot-icon";

const RightRoot = styled("div")(({}) => ({
  top: "10rem",
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  right: "1.5rem",
  height: "20%",
  justifyContent: "space-around",
}));

const CarButtons = ({ value, handleTabChange }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const handleClose = () => {
    dispatch(toggledCarStatus("main"));
    exitFullscreen();
  };

  const leftButtons = () => (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "3rem",
          left: "2rem",
        }}
      >
        <FormControlLabel
          sx={{
            color: "blue",
            background: "#B0CDFF",
            borderRadius: 1,
            padding: 1,
          }}
          value="start"
          control={
            <Switch size="small" color="primary" onChange={() => dispatch(toggledIsHotspot())} />
          }
          label={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <HotspotIcon
                style={{
                  marginRight: 3,
                  fontSize: "small",
                  color: "#0085FF",
                }}
              />
              <Typography color={"#0085FF"}>Hotspot</Typography>
            </Box>
          }
          labelPlacement="start"
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "6rem",
          left: "2.5rem",
        }}
      >
        <IconLabelButton icon={<InfoIcon />} title="info" />
      </Box>
    </>
  );

  const rightButtons = () => (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "3rem",
          right: "2rem",
        }}
      >
        <IconButton onClick={handleClose} aria-label="close">
          <CancelIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "6rem",
          right: "2rem",
        }}
      >
        <IconButton onClick={handleChange}>
          {checked ? <ArrowDownIcon fontSize="large" /> : <ArrowUpIcon fontSize="large" />}
        </IconButton>
      </Box>
      <Fade in={checked}>
        <RightRoot sx={{ background: "#D9D9D9", borderRadius: 1, opacity: 0.9 }}>
          <Tooltip title={"HISTORY"}>
            <IconButton sx={{ display: "block" }}>
              <OverviewIcon />
              <Typography
                sx={{ color: "black", fontSize: "xx-small" }}
                variant="caption"
                display="block"
                gutterBottom
              >
                HISTORY
              </Typography>
            </IconButton>
          </Tooltip>
          <Tooltip title={"WARRANTY"}>
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
        </RightRoot>
      </Fade>
    </>
  );

  const bottomTabs = () => (
    <Box
      sx={{
        width: "30rem",
        bgcolor: "#B0CDFF",
        position: "absolute",
        bottom: 0,
        borderRadius: 1,
      }}
    >
      <Tabs
        value={value}
        onChange={handleTabChange}
        centered
        sx={{
          ".css-1wf8b0h-MuiTabs-flexContainer": {
            justifyContent: "space-around",
          },
        }}
      >
        <Tab label="Exterior" />
        <Tab label="Interior" />
        <Tab label="Gallery" />
        <Tab label="Walk Around" />
      </Tabs>
    </Box>
  );

  return (
    <>
      {leftButtons()}
      {rightButtons()}
      {bottomTabs()}
    </>
  );
};

export default CarButtons;
