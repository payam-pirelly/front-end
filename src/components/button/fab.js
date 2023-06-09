import React from "react";
import PropTypes from "prop-types";
import { Fab as MUIFab } from "@mui/material";

export default function Fab({ icon, onClick, disabled, ...props }) {
  return (
    <MUIFab
      size="small"
      color="primary"
      onClick={onClick}
      disabled={disabled}
      //   sx={{ display: "flex", alignItems: "center" }}
      {...props}
    >
      {icon}
    </MUIFab>
  );
}

Fab.propTypes = {
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
