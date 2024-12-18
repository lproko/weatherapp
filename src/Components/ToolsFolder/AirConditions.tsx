import { Box, Flex, Text } from "@mantine/core";
import Thermo from "../../assets/dailyweathericons/thermometer.svg";
import Wind from "../../assets/dailyweathericons/Wind.svg";
import Rain from "../../assets/dailyweathericons/Rain.svg";
import UVIndex from "../../assets/dailyweathericons/Sun.svg";
import BackIcon from "../../assets/dailyweathericons/conditions-icon.svg";
import { useContext } from "react";
import { LocationContext } from "../../context/LocationContext";
import { DailyData } from "../../type";

const conditions = [
  {
    name: "Real Feel",
    dataName: "realFeel",
    value: "30°",
    icon: Thermo,
  },
  {
    name: "Wind",
    dataName: "wind",
    value: "0.8 km/hr",
    icon: Wind,
  },
  {
    name: "Chance of rain",
    dataName: "rain",
    value: "30°",
    icon: Rain,
  },
  {
    name: "Real Feel",
    dataName: "temp",
    value: "2%",
    icon: UVIndex,
  },
];

const AirConditions = () => {
  const ctx = useContext(LocationContext);
  return (
    <Box className="mt-[10px] pl-4 relative">
      <Text className="font-inter text-white text-base font-bold ">
        AIR CONDITIONS
      </Text>
      <Flex className="flex flex-col gap-8 mt-4 ">
        {conditions.map((items, idx) => (
          <Flex key={idx}>
            <img src={items.icon} alt="" />
            <Flex className="flex flex-col ml-1">
              <Text className="font-inter text-white text-xs font-medium ">
                {items.name}
              </Text>
              <Text className="font-inter text-white text-xs font-medium ">
                {ctx.location?.dailyData &&
                  ctx.location?.dailyData[idx][
                    items.dataName as keyof DailyData
                  ]}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <img
        src={BackIcon}
        alt=""
        style={{ position: "absolute", bottom: "-50px", left: "0" }}
      />
    </Box>
  );
};

export default AirConditions;
