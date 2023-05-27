import { SvgIcon } from "@mui/material";
import React from "react";

export default function ArrowUpIcon({ ...props }) {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      {...props}
    >
      <circle cx="31" cy="31" r="31" fill="#1862E3" fillOpacity="0.07" />
      <path
        d="M22.87 36.51L21.1 34.73L31 24.84L40.9 34.74L39.13 36.51L31 28.38L22.87 36.51Z"
        fill="#0085FF"
      />
    </SvgIcon>
  );
}
