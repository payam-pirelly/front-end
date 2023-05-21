import { Box } from "@mui/material";
import React360Viewer from "./360-viewer";

const basePath = "/images";
export default function ThreeSixtyView() {
  return (
    <Box sx={{ border: "1px solid black", margin: 10, position: "relative" }}>
      <React360Viewer
        amount={50}
        imagePath={basePath}
        fileName="{index}.jpg"
        spinReverse
        autoplay
        buttonClass="light"
      />
    </Box>
  );
}
