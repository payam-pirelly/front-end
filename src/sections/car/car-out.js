import React from "react";
import Car360Viewer from "./car-360-viewer";
import ResponsiveAppBar from "./app-bar";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import InfoIcon from "src/components/icon/info-Icon";
import MaximizeIcon from "src/components/icon/maximize-icon";
import MinimizeIcon from "src/components/icon/minimize-icon";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useMemo } from "react";
import Panorama from "./panorama";
import ShowCars from "./show-cars";
import IconLabelButton from "src/components/button/Icon-label-button";
import CarButtons from "./car-buttons";

export default function CarOut() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderContent = useMemo(() => {
    switch (value) {
      case 0:
        return <Car360Viewer />;
      case 1:
        return <Panorama />;
      case 2:
        return <ShowCars />;
      case 3:
        return 4;
      default:
        break;
    }
  }, [value]);

  return (
    <>
      <ResponsiveAppBar />
      {renderContent}
      <Box
        sx={{
          position: "absolute",
          top: "4rem",
          left: "2rem",
        }}
      >
        <IconLabelButton icon={<InfoIcon />} title="info" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "2rem",
        }}
      >
        <IconButton sx={{ color: "white" }}>
          <MaximizeIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "55%",
          left: "2rem",
        }}
      >
        <IconButton>
          <MinimizeIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "30rem",
          bgcolor: "#B0CDFF",
          position: "absolute",
          bottom: 0,
          borderRadius: 1,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{
            ".css-1wf8b0h-MuiTabs-flexContainer": {
              justifyContent: "space-around",
            },
          }}
        >
          <Tab label="Exterior" />
          <Tab label="Interior" />
          <Tab label="Gallery" />
          <Tab label="Walk Around" />
        </Tabs>
      </Box>
      <CarButtons />
    </>
  );
}
