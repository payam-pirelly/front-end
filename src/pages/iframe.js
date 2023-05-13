import { Card, Grid } from "@mui/material";
import Head from "next/head";
import React from "react";
import { Box, Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { toggledFullScreen } from "src/redux/car-slice";
import CarItem from "src/sections/car/car-item";
import { useMemo } from "react";
import ResponsiveAppBar from "src/sections/car/app-bar";
import ShowWindowDimensions from "src/utils/resize";
import { enterFullScreen, exitFullscreen } from "src/utils/fullscreen";
import Car360Viewer from "src/sections/car/car-360-viewer";
import CarControls from "src/sections/car/car-controllers";
import Panorama from "src/sections/car/panorama";
import LeftDrawer from "src/sections/car/left-drawer";

export default function Iframe() {
  const { carStatus, fullScreen } = useSelector((state) => state.car);
  const { height } = ShowWindowDimensions();
  const dispatch = useDispatch();
  const getId = document.getElementById("card");

  const renderContent = useMemo(() => {
    switch (carStatus) {
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

  const handleClick = () => {
    if (fullScreen) {
      exitFullscreen();
      dispatch(toggledFullScreen(false));
    } else {
      enterFullScreen(getId);
      dispatch(toggledFullScreen(true));
    }
  };

  return (
    <>
      <Head>
        <title>Pirelly</title>
      </Head>
      <ResponsiveAppBar />
      <Box
        component="main"
        display={"flex"}
        alignItems={"center"}
        sx={{
          flexGrow: 1,
        }}
      >
        <Container maxWidth={"100%"}>
          <Grid container sx={{ flex: "1 1 auto" }} justifyContent={"center"}>
            <Grid
              item
              xs={12}
              maxHeight={height}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card
                onDoubleClick={handleClick}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  // alignSelf: "center",
                }}
                id="card"
              >
                {renderContent}
                <CarControls handleClick={handleClick} />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {<LeftDrawer />}
    </>
  );
}
