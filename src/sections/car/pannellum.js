import React from "react";
import ReactPannellum from "./react-pannellum";
import { useSelector } from "react-redux";

function Pannellum() {
  const { interiorCarStatus } = useSelector((state) => state.car);
  const src = `/images/${interiorCarStatus}.jpg`;

  return (
    <ReactPannellum
      id="pannellum"
      showControls={false}
      autoLoad={false}
      sceneId="circle"
      imageSource={src}
      config={{
        hotSpots: [
          {
            pitch: -0.9,
            id: 1,
            yaw: 0,
            type: "info",
            text: "1",
            clickHandlerFunc: () => alert("click me!"),
          },
          {
            id: 2,
            pitch: 10,
            yaw: 10,
            type: "info",
            text: "2",
            clickHandlerFunc: () => alert("click me!"),
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
