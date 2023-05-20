import { SvgIcon } from "@mui/material";
import React from "react";

export default function MinimizeIcon() {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <g filter="url(#filter0_b_296_919)">
        <circle cx="24" cy="24" r="24" fill="#1862E3" fill-opacity="0.15" />
        <path d="M27.952 23.16V25.464H18.088V23.16H27.952Z" fill="#1862E3" fill-opacity="0.5" />
      </g>
      <defs>
        <filter
          id="filter0_b_296_919"
          x="-5"
          y="-5"
          width="58"
          height="58"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_296_919" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_296_919"
            result="shape"
          />
        </filter>
      </defs>
    </SvgIcon>
  );
}
