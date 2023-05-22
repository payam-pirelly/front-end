import React from "react";
import Car360Viewer from "./car-360-viewer";
import ResponsiveAppBar from "./app-bar";
import { useMemo } from "react";
import Panorama from "./panorama";
import ShowCars from "./show-cars";
import CarButtons from "./car-buttons";
import ThreeSixtyView from "./ThreeSixty";
import DraggableDialog from "src/components/dialog/draggable-dialog";
import Pannellum from "./pannellum";

export default function CarOut() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderContent = useMemo(() => {
    switch (value) {
      case 0:
        return <ThreeSixtyView />;
      case 1:
        return <Pannellum />;
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
