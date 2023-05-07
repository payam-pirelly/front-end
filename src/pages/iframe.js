import { Button, SvgIcon } from "@mui/material";
import React from "react";
import Car360Viewer from "src/sections/car/car360Viewer";
import CarHorizontalList from "src/sections/car/carHorizontalList";
import ShowCars from "src/sections/car/showCars";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { toggledCarStatus } from "src/redux/carSlice";
import CarItem from "src/sections/car/carItem";
import { useMemo } from "react";

export default function Iframe() {
  const { carStatus } = useSelector((state) => state.car);

  const dispatch = useDispatch();

  const form = useMemo(() => {
    switch (carStatus) {
      case "carList":
        return <ShowCars />;
      case "car360":
        console.log(carStatus);
        return <Car360Viewer />;
      case "carItem":
        return <CarItem />;

      default:
        return <Car360Viewer />;
    }
  }, [carStatus]);

  return (
    <>
      {form}
      <Box alignSelf={"center"}>
        <Button
          onClick={() => {
            if (carStatus === "carList") dispatch(toggledCarStatus("car360"));
            else dispatch(toggledCarStatus("carList"));
          }}
          fullWidth={false}
          startIcon={
            <SvgIcon fontSize="small">
              <PlusIcon />
            </SvgIcon>
          }
          variant="contained"
        >
          more cars
        </Button>
      </Box>
      <CarHorizontalList />
    </>
  );
}
