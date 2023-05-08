import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  SvgIcon,
} from "@mui/material";
import Head from "next/head";
import React from "react";
import Car360Viewer from "src/sections/car/car-360-viewer";
import CarHorizontalList from "src/sections/car/car-horizontal-list";
import ShowCars from "src/sections/car/show-cars";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { Box, Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { toggledCarStatus } from "src/redux/carSlice";
import CarItem from "src/sections/car/car-item";
import { useMemo } from "react";
import ResponsiveAppBar from "src/sections/car/app-bar";
import ShowWindowDimensions from "src/utils/resize";
import { blue } from "@mui/material/colors";
import CloseIcon from "src/sections/car/close-icon";

export default function Iframe() {
  const { carStatus } = useSelector((state) => state.car);
  const { height } = ShowWindowDimensions();

  const dispatch = useDispatch();

  const form = useMemo(() => {
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
          my: 1,
        }}
      >
        <Container maxWidth="xl">
          <Grid container sx={{ flex: "1 1 auto" }} justifyContent={"center"}>
            <Grid
              xs={10}
              maxHeight={height}
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  alignSelf: "center",
                }}
              >
                <CardHeader
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
                />
                <CardContent>{form}</CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box py={1} textAlign={"center"}>
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
          </Box>
          <CarHorizontalList />
        </Container>
      </Box>
    </>
  );
}
