import React from "react";
import { useDispatch } from "react-redux";
import { toggledCarStatus } from "src/redux/carSlice";
import PropTypes from 'prop-types';
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { IconButton, Tooltip } from "@mui/material";

export default function CloseIcon(props) {
  const { top, right } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggledCarStatus("car360"));
  };

  return (
    <Tooltip title="close">
      <IconButton
        onClick={handleClick}
        sx={{ position: "absolute", top: top, right: right }}
        color="primary"
        aria-label="close"
        component="label"
      >
        <CancelRoundedIcon />
      </IconButton>
    </Tooltip>
  );
}

CloseIcon.propTypes = {
  top: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
};
