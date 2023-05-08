import React, { useEffect, useRef, useState } from "react";
import { useAxes, PanInput } from "@egjs/react-axes";
import { useDispatch, useSelector } from "react-redux";
import ShowWindowDimensions from "src/utils/resize";

import Image from "next/image";
import { Box, Tooltip, IconButton, FormControl, FormControlLabel, Switch } from "@mui/material";
import { toggledCarIndex } from "src/redux/carSlice";
import EffectIcon from "src/components/effect-icon";

const Car360Viewer = () => {
  //Selector
  const cars = useSelector((state) => state.car?.car);

  //Ref
  const ref = useRef();

  //Custom
  const carsLength = cars?.length;
  const [hotspots, setHotspots] = useState(false);
  const dispatch = useDispatch();
  const [drag, setDrag] = useState(false);
  const { width } = ShowWindowDimensions();
  const offsetParent = ref?.current?.offsetParent;
  const clientWidth = offsetParent?.clientWidth,
    clientHeight = offsetParent?.clientHeight;
  const { connect, angle, zoom } = useAxes(
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

  const handleChange = () => {
    setHotspots((previous) => !previous);
  };

  return (
    <>
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
                src={`/images/${i?.image}.jpg`}
                style={{
                  width: "auto",
                  height: "auto",
                  borderRadius: 10,
                  cursor: drag ? "grabbing" : "grab",
                  display:
                    Math.floor(((angle % carsLength) * 10) / 10 + 1) === i?.image ? "flex" : "none",
                }}
                width={width * 0.9}
                height={500}
              />
              {i?.detail && hotspots && (
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
                      <EffectIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              )}
            </Box>
          ))}
        </div>
        <FormControl component="fieldset" variant="standard">
          <FormControlLabel
            control={<Switch checked={hotspots} onChange={handleChange} name="HOTSPOTS" />}
            label="HOTSPOTS"
          />
        </FormControl>
      </div>
    </>
  );
};

export default Car360Viewer;
