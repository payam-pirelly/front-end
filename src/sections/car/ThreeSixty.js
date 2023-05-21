import { Box } from "@mui/material";
import React360Viewer from "./360-viewer";

const basePath = "/images";
export default function ThreeSixtyView() {
  return (
    <Box sx={{ border: "2px solid black", margin: 10, position: "relative" }}>
      <React360Viewer
        amount={138}
        imagePath={basePath}
        fileName="{index}.png"
        spinReverse
        // autoplay
        buttonClass="light"
      />
    </Box>
  );
}
