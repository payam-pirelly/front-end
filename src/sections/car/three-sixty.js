import { Box, IconButton, Tooltip } from "@mui/material";
import React360Viewer from "./360-viewer";
import ShowWindowDimensions from "src/utils/resize";
import { useSelector } from "react-redux";
import HotspotPointerIcon from "src/components/icon/hotspot-pointer-icon";
import { useRef } from "react";

const basePath = "https://fastly-production.24c.in/webin/360";

export default function ThreeSixtyView() {
  const ref = useRef();
  const cars = useSelector((state) => state.car?.car);
  const { isHotspot } = useSelector((state) => state.car);
  const offsetParent = ref?.current?.offsetParent;
  const clientWidth = offsetParent?.clientWidth,
    clientHeight = offsetParent?.clientHeight;

  const { width } = ShowWindowDimensions();

  return (
    <Box ref={ref}>
      <React360Viewer
        width={width}
        amount={75}
        imagePath={basePath}
        fileName="output_{index}.jpeg"
        boxShadow
        spinReverse
        // autoplay
        buttonClass="light"
        isHotspot={isHotspot}
      />
    </Box>
  );
}
