import React from "react";
import { Pannellum } from "pannellum-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useRef } from "react";

function Pannellum() {
  const ref = useRef();
  console.log(ref);
  const { interiorCarStatus } = useSelector((state) => state.car);
  const src = `/images/${interiorCarStatus}.jpg`;

  // function hotspot(hotSpotDiv, args) {
  //   const imageDiv = document.createElement("img");
  //   imageDiv.setAttribute("width", "45");
  //   imageDiv.setAttribute("height", "45");
  //   imageDiv.setAttribute("src", "/hotspot-point.svg");
  //   hotSpotDiv.appendChild(imageDiv);
  //   console.log(hotSpotDiv);
  // }

  // const click = () => {
  //   console.log(getConfig());
  // };

  // const [pitch, setPitch] = useState(100);
  // const [yaw, setYaw] = useState(-180);
  // const [hfov, setHfov] = useState(180);

  // const hotspotIcon = (hotSpotDiv) => {
  //   const image = document.createElement("img");
  //   image.classList.add("image");
  //   image.setAttribute("width", "30");
  //   image.setAttribute("height", "30");
  //   image.setAttribute("src", "https://img.icons8.com/material/4ac144/256/camera.png");
  //   hotSpotDiv.appendChild(image);
  // };

  if (interiorCarStatus === undefined) return <>loading</>;
  else
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
