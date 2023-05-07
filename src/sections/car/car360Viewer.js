import React, { useEffect, useRef, useState } from "react";
import { useAxes, PanInput } from "@egjs/react-axes";
import { useSelector } from "react-redux";
import ShowWindowDimensions from "src/utils/resize";

import Image from "next/image";
import { Box, Tooltip, IconButton } from "@mui/material";
import PlusIcon from "src/components/PlusIcon";

const Car360Viewer = () => {
  //Selector
  const cars = useSelector((state) => state.car?.car);
  
  //Ref
  const ref = useRef();
  
  //Custom
  const carsLength = cars?.length;
  const [drag, setDrag] = useState(false);
  const { width } = ShowWindowDimensions();
  const offsetParent = ref?.current?.offsetParent;
  const clientWidth = offsetParent?.clientWidth,
    clientHeight = offsetParent?.clientHeight;
  const { connect, angle } = useAxes(
    {
      angle: {
        range: [0, carsLength * 10],
        circular: true,
      },
    },
    {
      deceleration: 0.01,
    }
  );

  useEffect(() => {
    connect("angle", new PanInput(".car_rotate"));
  }, []);

  return (
    <div className="car_rotate">
      <div style={{ position: "relative", zIndex: 10 }}>
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
              key={key}
              priority
              src={`/images/lambo${i?.image}.jpg`}
              style={{
                width: "auto",
                height: "auto",
                padding: 10,
                borderRadius: 10,
                cursor: drag ? "grabbing" : "grab",
                display:
                  Math.floor(((angle % carsLength) * 10) / 10 + 1) === i?.image ? "flex" : "none",
              }}
              width={width * 0.9}
              height={500}
            />
            <Box
              sx={{
                position: "absolute",
                top: (clientHeight / 100) * i.y,
                left: (clientWidth / 100) * i.x,
                display:
                  Math.floor(((angle % carsLength) * 10) / 10 + 1) === i?.image ? "flex" : "none",
              }}
            >
              <Tooltip title={i.title}>
                <IconButton>
                  <PlusIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Car360Viewer;
