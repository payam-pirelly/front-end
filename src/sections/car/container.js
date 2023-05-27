import { Grid } from "@mui/material";
import Head from "next/head";
import React from "react";
import { Box, Container as MUIContainer } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { toggledFullScreen } from "src/redux/car-slice";
import { useMemo } from "react";
import { enterFullScreen } from "src/utils/fullscreen";
import Main from "./main";
import CarOut from "./car-out";

export default function Container() {
  const { carStatus } = useSelector((state) => state.car);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    var fullscreenId = document.getElementById("fullscreen");
    // enterFullScreen(fullscreenId);
    dispatch(toggledFullScreen(true));
  };

  const renderContent = useMemo(() => {
    switch (carStatus) {
      case "main":
        return <Main onClick={handleOnClick} />;
      case "carOut":
        return <CarOut />;

      default:
        return <>loading!!!</>;
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
