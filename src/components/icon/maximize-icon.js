import { SvgIcon } from "@mui/material";
import React from "react";

export default function MaximizeIcon({ ...props }) {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_b_296_916)">
        <circle cx="24" cy="24" r="24" fill="#1862E3" fill-opacity="0.15" />
        <path
          d="M30.6621 24.7166H25.8141V29.6846H23.2701V24.7166H18.4221V22.4126H23.2701V17.4446H25.8141V22.4126H30.6621V24.7166Z"
          fill="#1862E3"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_296_916"
          x="-5"
          y="-5"
          width="58"
          height="58"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_296_916" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_296_916"
            result="shape"
          />
        </filter>
      </defs>
    </SvgIcon>
  );
}
