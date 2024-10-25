import React, { useState } from "react";
import { DailyData, HourlyData } from "../type";
import Locations from "../data";

export type Location = {
  name: string;
  weatherDescription?: string;
  temperature?: string;
  hourlyData?: HourlyData[];
  dailyData?: DailyData[];
};

type LocationContextType = {
  location: Location;
  updateLocation: (location: Location) => void;
};

export const LocationContext = React.createContext<LocationContextType>({
  location: Locations[0],
  updateLocation: (_location: Location) => {},
});

export const LocationContextProvider = (props: any) => {
  const [place, setPlace] = useState<Location>(Locations[0]);

  const updateLocation = (location: Location) => {
    setPlace(location);
  };

  return (
    <LocationContext.Provider
      value={{
        location: place,
        updateLocation,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};
