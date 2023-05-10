import { Card, Fab, Grid, Tooltip } from "@mui/material";
import Head from "next/head";
import React from "react";
import { Box, Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { toggledCarStatus, toggledFullScreen } from "src/redux/car-slice";
import CarItem from "src/sections/car/car-item";
import { useMemo } from "react";
import ResponsiveAppBar from "src/sections/car/app-bar";
import ShowWindowDimensions from "src/utils/resize";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import { enterFullScreen, exitFullscreen } from "src/utils/fullscreen";
import Car360Viewer from "src/sections/car/car-360-viewer";
import CarHorizontalList from "src/sections/car/car-horizontal-list";
import FullscreenExitRoundedIcon from "@mui/icons-material/FullscreenExitRounded";

export default function Iframe() {
  const { carStatus, fullScreen } = useSelector((state) => state.car);
  const { height } = ShowWindowDimensions();
  const dispatch = useDispatch();
  const getId = document.getElementById("card");

  const renderContent = useMemo(() => {
    switch (carStatus) {
      case "carList":
        return <ShowCars />;
      case "car360":
        return <Car360Viewer />;
      case "carItem":
        return <CarItem />;
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
        sx={{
          flexGrow: 1,
          // my: 1,
        }}
      >
        <Container maxWidth="xl">
          <Grid container sx={{ flex: "1 1 auto" }} justifyContent={"center"}>
            <Grid
              item
              xl={12}
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
                  alignSelf: "center",
                }}
                id="card"
              >
                {/* <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                      B
                    </Avatar>
                  }
                  action={
                    <>
                      {carStatus !== "car360" && (
                        <IconButton aria-label="settings">
                          <CloseIcon top={0} right={0} />
                        </IconButton>
                      )}
                    </>
                  }
                  title="2021 BMW 430i xDrive"
                  subheader="18.2k miles"
                /> */}
                {renderContent}
                <Tooltip title={fullScreen ? "minimize" : "maximize"}>
                  <Fab
                    onClick={handleClick}
                    color="info"
                    aria-label="Fullscreen"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 50,
                      color: "white",
                    }}
                  >
                    {fullScreen ? <FullscreenExitRoundedIcon /> : <FullscreenRoundedIcon />}
                  </Fab>
                </Tooltip>
                {/* <CarHorizontalList /> */}
              </Card>
            </Grid>
          </Grid>
          {/* <Box py={1} textAlign={"center"}>
            <Button
              onClick={() => {
                if (carStatus === "carList") dispatch(toggledCarStatus("car360"));
                else dispatch(toggledCarStatus("carList"));
              }}
              fullWidth={false}
              startIcon={
                <SvgIcon fontSize="small">
                  <PlusIcon />
                </SvgIcon>
              }
              variant="contained"
            >
              more cars
            </Button>
          </Box> */}
        </Container>
      </Box>
    </>
  );
}
