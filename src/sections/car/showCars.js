import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import ShowWindowDimensions from "src/utils/resize";

export default function ShowCars() {
  const cars = useSelector((state) => state.car?.car);
  const { height } = ShowWindowDimensions();

  return (
    <Grid container sx={{ flex: "1 1 auto" }}>
      <Grid
        xs={12}
        maxHeight={1000}
        sx={{
          backgroundColor: "background.paper",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <ImageList
          gap={2}
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, 1fr) !important",
              sm: "repeat(2, 1fr) !important",
              md: "repeat(4, 1fr) !important",
              lg: "repeat(5, 1fr) !important",
              xl: "repeat(6, 1fr) !important",
            },
          }}
        >
          {cars?.map((item) => (
            <ImageListItem
              sx={{
                width: 200,
                height: 200,
              }}
              key={item.image}
            >
              <Image
                style={{
                  objectFit: "contain",
                  borderRadius: 8,
                  height: 200,
                }}
                width={200}
                height={200}
                src={`/images/lambo${item?.image}.jpg`}
                alt={item.title}
                priority
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
}
