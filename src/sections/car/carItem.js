import React from "react";

import { useSelector } from "react-redux";

import Image from "next/image";
import ShowWindowDimensions from "src/utils/resize";

const CarItem = () => {
  //Selector
  const { carIndex } = useSelector((state) => state.car);
  const { width } = ShowWindowDimensions();

  return (
    <Image
      alt="image"
      priority
      src={`/images/lambo${carIndex}.jpg`}
      style={{
        width: "auto",
        height: "auto",
        padding: 10,
        borderRadius: 10,
      }}
      width={width * 0.9}
      height={500}
    />
  );
};

export default CarItem;
