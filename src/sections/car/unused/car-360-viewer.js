import React, { useEffect, useRef, useState } from "react";
import { useAxes, PanInput } from "@egjs/react-axes";
import { useDispatch, useSelector } from "react-redux";
import ShowWindowDimensions from "src/utils/resize";

import Image from "next/image";
import { Box, Tooltip, IconButton } from "@mui/material";
import { toggledCarIndex } from "src/redux/car-slice";
import HotspotPointerIcon from "src/components/icon/hotspot-pointer-icon";

const Car360Viewer = () => {
  //Selector
  const cars = useSelector((state) => state.car?.car);
  const { isHotspot } = useSelector((state) => state.car);

  //Ref
  const ref = useRef();

  //Custom
  const carsLength = cars?.length;
  const dispatch = useDispatch();
  const [drag, setDrag] = useState(false);
  const { width, height } = ShowWindowDimensions();
  const offsetParent = ref?.current?.offsetParent;
  const clientWidth = offsetParent?.clientWidth,
    clientHeight = offsetParent?.clientHeight;
  const { connect, angle } = useAxes(
    {
      angle: {
        range: [0, carsLength * 10],
        circular: true,
      },
      zoom: {
        range: [1, 5],
        bounce: 1,
      },
    },
    {
      deceleration: 0.01,
    }
  );

  useEffect(() => {
    connect("angle", new PanInput(".car_rotate"));
  }, []);

  const handleOnClick = (data) => {
    dispatch(toggledCarIndex(data));
  };

  return (
    <>
      <div className="car_rotate">
        <div style={{ zIndex: 10 }}>
          {cars.map((i, key) => (
            <Box key={key} ref={ref}>
              <Image
                onDragStart={(e) => {
                  setDrag(true);
                  e.preventDefault();
                }}
                onMouseDown={() => setDrag(true)}
                onMouseUp={() => setDrag(false)}
                alt="image"
                priority
                src={`/images/${i?.image}.jpg`}
                style={{
                  objectFit: "contain",
                  // height: "auto",
                  maxHeight: height,
                  borderRadius: 10,
                  cursor: drag ? "grabbing" : "grab",
                  display:
                    Math.floor(((angle % carsLength) * 10) / 10 + 1) === i?.image ? "flex" : "none",
                }}
                width={width}
                height={height}
              />
              {i?.detail && isHotspot && (
                <Box
                  sx={{
                    position: "absolute",
                    top: (clientHeight / 100) * i.y,
                    left: (clientWidth / 100) * i.x,
                    display:
                      Math.floor(((angle % carsLength) * 10) / 10 + 1) === i?.image
                        ? "flex"
                        : "none",
                  }}
                >
                  <Tooltip title={i?.image}>
                    <IconButton onClick={() => handleOnClick(i?.detail)}>
                      <HotspotPointerIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              )}
            </Box>
          ))}
        </div>
      </div>
    </>
  );
};

export default Car360Viewer;
