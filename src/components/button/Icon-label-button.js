import * as React from "react";
import Button from "@mui/material/Button";

export default function IconLabelButton({ icon, title }) {
  return (
    <Button startIcon={icon} sx={{ color: "#0085FF" }}>
      {title}

    </Button>
  );
}

