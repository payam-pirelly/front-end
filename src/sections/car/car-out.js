import React from "react";
import { useMemo } from "react";
import ShowCars from "./show-cars";
import CarButtons from "./car-buttons";
import Pannellum from "./pannellum";
import ThreeSixtyView from "./three-sixty";

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
      {renderContent}
      <CarButtons value={value} handleTabChange={handleChange} />
    </>
  );
}
