import { Card, CardContent, Grid, IconButton } from "@mui/material";
import Head from "next/head";
import React from "react";
import { Box, Container as MUIContainer } from "@mui/system";
import { useDispatch } from "react-redux";
import ShowWindowDimensions from "src/utils/resize";
import Image from "next/image";
import CarVerticalList from "./car-vertical-list";
import { toggledCarStatus } from "src/redux/car-slice";
import DraggableDialog from "src/components/dialog/draggable-dialog";

const imagePath = "https://fastly-production.24c.in/webin/360/output_1.jpeg";

export default function Main({ onClick }) {
  const { height, width } = ShowWindowDimensions();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggledCarStatus("carOut"));
    onClick();
  };

  return (
    <>
      <Head>
        <title>Pirelly</title>
      </Head>
      <Box
        component="main"
        display={"flex"}
        alignItems={"center"}
        sx={{
          flexGrow: 1,
        }}
      >
        <MUIContainer maxWidth={"100%"}>
          <Grid container sx={{ flex: "1 1 auto" }} justifyContent={"center"}>
            <Grid
              item
              xs={8}
              maxHeight={height}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Card sx={{ boxShadow: "none !important", paddingTop: 1 }}>
                <Box
                  style={{
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <Image
                    alt="image"
                    priority
                    src={imagePath}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "auto",
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                    width={width * 0.6}
                    height={height}
                  />
                  <Box position="absolute" top={"55%"} left={"35%"} zIndex={1}>
                    <IconButton onClick={handleClick}>
                      <img src="/view360.svg" alt="view360.svg" width={width * 0.2} height="auto" />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent sx={{ padding: 0 }}>
                  <CarVerticalList />
                  <DraggableDialog />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </MUIContainer>
      </Box>
    </>
  );
}
