import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { toggledCarStatus } from "src/redux/car-slice";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { FormControlLabel, Switch } from "@mui/material";
import { exitFullscreen } from "src/utils/fullscreen";
import HotspotIcon from "src/components/icon/hotspot-icon";

function ResponsiveAppBar() {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggledCarStatus("main"));
    exitFullscreen();
  };

  return (
    <AppBar
      sx={{
        position: "absolute",
        top: 0,
        background: "linear-gradient(180deg, white ,transparent)",
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
        <Box>
          <FormControlLabel
            sx={{
              color: "blue",
              background: "#B0CDFF",
              borderRadius: 1,
              padding: 1,
            }}
            value="start"
            control={<Switch size="small" color="primary" />}
            label={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <HotspotIcon
                  style={{
                    marginRight: 3,
                    fontSize: "small",
                    color: "#0085FF",
                  }}
                />
                <Typography color={"#0085FF"}>Hotspot</Typography>
              </Box>
            }
            labelPlacement="start"
          />
        </Box>
        {/* <Box>
          <IconButton edge="start" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box> */}
      </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;
