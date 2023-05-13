import { Fab, Tooltip } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import FullscreenExitRoundedIcon from "@mui/icons-material/FullscreenExitRounded";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import SubwayRoundedIcon from "@mui/icons-material/SubwayRounded";
import CarCrashRoundedIcon from "@mui/icons-material/CarCrashRounded";
import { useDispatch, useSelector } from "react-redux";
import { toggledCarStatus, toggledIsHotspot, toggledLeftSideBar } from "src/redux/car-slice";
import SyncRoundedIcon from "@mui/icons-material/SyncRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";

const RightRoot = styled("div")(({ theme: { spacing } }) => ({
  // "& > *": {
  //   margin: spacing(1),
  // },
  bottom: 0,
  display: "grid",
  flexDirection: "column",
  gridTemplateColumns: "repeat(2,1fr)",
  position: "fixed",
  right: 0,
}));

const LeftRoot = styled("div")(({ theme: { spacing } }) => ({
  // "& > *": {
  //   margin: spacing(1),
  // },
  bottom: 0,
  display: "grid",
  flexDirection: "column",
  gridTemplateColumns: "repeat(2,1fr)",
  position: "fixed",
  left: 0,
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
      <LeftRoot>
        <Tooltip title={"car list"} sx={{ m: 1 }}>
          <Fab onClick={() => dispatch(toggledLeftSideBar(true))} color="info">
            <ViewListRoundedIcon />
          </Fab>
        </Tooltip>
      </LeftRoot>
      <RightRoot>
        <Tooltip title={"car in"} sx={{ m: 1 }}>
          <Fab onClick={() => handleClickCarStatus("panorama")} color="info">
            <SubwayRoundedIcon />
          </Fab>
        </Tooltip>
        <Tooltip title={"car out 360"} sx={{ m: 1 }}>
          <Fab onClick={() => handleClickCarStatus("car360")} color="info">
            <SyncRoundedIcon />
          </Fab>
        </Tooltip>
        <Tooltip title={fullScreen ? "minimize" : "maximize"} sx={{ m: 1 }}>
          <Fab onClick={handleClick} color="info">
            {fullScreen ? <FullscreenExitRoundedIcon /> : <FullscreenRoundedIcon />}
          </Fab>
        </Tooltip>
        <Tooltip title={isHotspot ? "disable hotspot" : "enable hotspot"} sx={{ m: 1 }}>
          <Fab onClick={handleClickHotspot} color="info">
            <CarCrashRoundedIcon />
          </Fab>
        </Tooltip>
      </RightRoot>
    </>
  );
}

export default CarControls;
