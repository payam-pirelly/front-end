import { Box } from "@mui/material";
import React360Viewer from "./360-viewer";
import ShowWindowDimensions from "src/utils/resize";

const basePath = "https://fastly-production.24c.in/webin/360";

export default function ThreeSixtyView() {
  const { width } = ShowWindowDimensions();
  return (
    <Box sx={{ border: "1px solid black", margin: 10, position: "relative" }}>
      <React360Viewer
        width={width}
        amount={75}
        imagePath={basePath}
        fileName="output_{index}.jpeg"
        boxShadow
        spinReverse
        // autoplay
        buttonClass="light"
      />
    </Box>
  );
}
