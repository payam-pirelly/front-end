import { SvgIcon } from "@mui/material";
import React from "react";

export default function CloseIcon() {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
    >
      <circle
        cx="17.5"
        cy="17.5"
        r="17.5"
        transform="matrix(1 0 0 -1 0 35)"
        fill="url(#paint0_linear_153_1007)"
      />
      <path
        d="M23.8536 11.1464C23.7598 11.0527 23.6327 11 23.5001 11C23.3675 11 23.2404 11.0527 23.1466 11.1464L18 16.293L12.8534 11.1464C12.7596 11.0527 12.6325 11 12.4999 11C12.3673 11 12.2402 11.0527 12.1464 11.1464C12.0527 11.2402 12 11.3673 12 11.4999C12 11.6325 12.0527 11.7596 12.1464 11.8534L17.293 17L12.1464 22.1466C12.0527 22.2404 12 22.3675 12 22.5001C12 22.6327 12.0527 22.7598 12.1464 22.8536C12.2402 22.9473 12.3673 23 12.4999 23C12.6325 23 12.7596 22.9473 12.8534 22.8536L18 17.707L23.1466 22.8536C23.2404 22.9473 23.3675 23 23.5001 23C23.6327 23 23.7598 22.9473 23.8536 22.8536C23.9473 22.7598 24 22.6327 24 22.5001C24 22.3675 23.9473 22.2404 23.8536 22.1466L18.707 17L23.8536 11.8534C23.9473 11.7596 24 11.6325 24 11.4999C24 11.3673 23.9473 11.2402 23.8536 11.1464Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_153_1007"
          x1="17.5"
          y1="0"
          x2="17.5"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1862E3" />
          <stop offset="1" stop-color="#0085FF" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
}