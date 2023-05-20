import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "auto", bgcolor: "#5794FF", position: "absolute", bottom: 0, borderRadius: 1 }}
    >
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Exterior" sx={{ paddingX: 1 }} />
        <Tab label="Interior" />
        <Tab label="Gallery" />
        <Tab label="Walk Around" sx={{ paddingX: 1 }} />
      </Tabs>
    </Box>
  );
}
