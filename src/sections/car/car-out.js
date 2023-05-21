import React from "react";
import Car360Viewer from "./car-360-viewer";
import ResponsiveAppBar from "./app-bar";
import { useMemo } from "react";
import Panorama from "./panorama";
import ShowCars from "./show-cars";
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
      <CarButtons value={value} handleTabChange={handleChange} />
    </>
  );
}
