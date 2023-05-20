import { Grid } from "@mui/material";
import Head from "next/head";
import React from "react";
import { Box, Container as MUIContainer } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { toggledFullScreen } from "src/redux/car-slice";
import CarItem from "src/sections/car/car-item";
import { useMemo } from "react";
import { enterFullScreen } from "src/utils/fullscreen";
import Car360Viewer from "src/sections/car/car-360-viewer";
import Main from "./main";
import CarOut from "./car-out";

export default function Container() {
  const { carStatus } = useSelector((state) => state.car);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    var fullscreenId = document.getElementById("fullscreen");
    enterFullScreen(fullscreenId);
    dispatch(toggledFullScreen(true));
  };

  const renderContent = useMemo(() => {
    switch (carStatus) {
      case "main":
        return <Main onClick={handleOnClick} />;
      case "carOut":
        return <CarOut />;
      case "car360":
        return <Car360Viewer />;
      case "carItem":
        return <CarItem />;
      case "panorama":
        return <Panorama />;
      default:
        return <Car360Viewer />;
    }
  }, [carStatus]);

  return (
    <>
      <Head>
        <title>Pirelly</title>
      </Head>
      <Box
        id="fullscreen"
        component="main"
        display={"flex"}
        alignItems={"center"}
        sx={{
          flexGrow: 1,
        }}
      >
        <MUIContainer maxWidth={"100%"}>
          <Grid container sx={{ flex: "1 1 auto" }} justifyContent={"center"}>
            {renderContent}
          </Grid>
        </MUIContainer>
      </Box>
    </>
  );
}
