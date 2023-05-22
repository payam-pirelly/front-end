import { ImageList, ImageListItem } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

const imagePath = "https://fastly-production.24c.in/webin/360/output_1.jpeg";

export default function CarVerticalList() {
  const items = [1, 2, 3, 4];

  return (
    <ImageList sx={{ width: "auto", display: "flex", position: "relative", overflow: "hidden" }}>
      {items.map((item) => (
        <ImageListItem key={item} sx={{ display: "block" }}>
          <img
            src={imagePath}
            srcSet={imagePath}
            alt={item}
            loading="lazy"
            style={{ borderRadius: 10 }}
          />
        </ImageListItem>
      ))}
      <Box position="absolute" left="5%" top="50%" zIndex={1}>
        <img src="/interior360.svg" alt="interior.svg" width="auto" height="auto" />
      </Box>
    </ImageList>
  );
}
