import React, { useState } from "react";
import { DailyData, HourlyData } from "../type";

export type Location = {
  name: string;
  weatherDesription?: string;
  temperatur?: string;
  hourlyData?: HourlyData[];
  dailyData?: DailyData[];
};

type LocationContextType = {
  location: Location;
  updateLocation: (location: Location) => void;
};

export const LocationContext = React.createContext<LocationContextType>({
  location: { name: "Athens" },
  updateLocation: (_location: Location) => {},
});

export const LocationContextProvider = (props: any) => {
  const [place, setPlace] = useState({ name: "Athens" });

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
