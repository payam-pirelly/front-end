import React from "react";
import ReactPannellum from "./react-pannellum";

function Pannellum() {
  return (
    <ReactPannellum
      id="pannellum"
      showControls={true}
      sceneId="circle"
      imageSource="/images/panorama.jpg"
      config={{
        hotSpots: [
          {
            pitch: -0.9,
            id: 12,
            yaw: 0,
            type: "info",
            text: "North Charles Street",
            clickHandlerFunc: () => alert("click me!"),
            // createTooltipFunc: () => alert("click me!"),
            // URL: "https://artbma.org/",
            //onClick hotspot naviagte to imageSource: "https://pannellum.org/images/bma-0.jpg",
          },
        ],
      }}
      style={{
        width: "100%",
        height: "90vh",
      }}
    />
  );
}

export default Pannellum;
