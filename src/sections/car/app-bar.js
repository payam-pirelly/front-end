import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import CustomizedSwitches from "src/components/switch";
import { toggledCarStatus } from "src/redux/car-slice";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";

function Item(props) {
  const { sx, ...other } = props;
  return <Box {...other} />;
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
};

function ResponsiveAppBar() {
  const dispatch = useDispatch();

  const handleClick = (data) => {
    if (data) dispatch(toggledCarStatus("car360"));
    else dispatch(toggledCarStatus("panorama"));
  };

  const handleClose = () => {
    dispatch(toggledCarStatus("car360"));
    // exitFullscreen();
  };

  return (
    <AppBar
      sx={{
        position: "absolute",
        top: 0,
        background: "linear-gradient(180deg,rgba(0,0,0,.8),transparent)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          m: 1,
          borderRadius: 1,
        }}
      >
        <Item>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            View gallery
          </Typography>
        </Item>
        <Item>
          <CustomizedSwitches onClick={handleClick} />
        </Item>
        <Item>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Item>
      </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;
