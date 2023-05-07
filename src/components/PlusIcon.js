import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { styled } from "@mui/material";

const Keyframes = styled("div")({
  "@keyframes pulsate": {
    from: {
      opacity: 1,
      transform: "scale(1)",
      color: "green",
    },
    to: {
      opacity: 0,
      border: "gray",
      boxShadow:
        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      transform: "scale(2)",
      color: "green",
    },
  },
  animation: "pulsate 1s infinite ease",
  position: "absolute",
});

export default function PlusIcon() {
  return (
    <Keyframes>
      <AdjustIcon />
    </Keyframes>
  );
}
