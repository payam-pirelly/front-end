import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { toggledLeftSideBar } from "src/redux/car-slice";
import CarHorizontalList from "./car-horizontal-list";

const drawerWidth = 240;
const anchor = "left";
export default function LeftDrawer() {
  const { leftSideBar } = useSelector((state) => state.car);
  const dispatch = useDispatch();

  const toggleDrawer = (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    dispatch(toggledLeftSideBar(leftSideBar === true ? false : true));
  };

  return (
    <React.Fragment key={anchor}>
      <Drawer
        sx={{
          width: drawerWidth,
        }}
        anchor={anchor}
        open={leftSideBar}
        onClose={toggleDrawer}
      >
        <CarHorizontalList />
      </Drawer>
    </React.Fragment>
  );
}
