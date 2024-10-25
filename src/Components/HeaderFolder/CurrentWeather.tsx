import { Box, Flex, Text } from "@mantine/core";
import CloudIcon from "../../assets/icon.svg";
import { useContext } from "react";
import { LocationContext } from "../../context/LocationContext";

const CurrentWeather = () => {
  const ctx = useContext(LocationContext);

  return (
    <Flex className="grow justify-between">
      <Flex className="flex grow justify-center lg:justify-start">
        <Box className="mt-10">
          <Text className="font-inter text-2xl lg:text-5xl text-white text-center lg:text-left">
            {ctx.location?.weatherDescription}
          </Text>
          <Flex className="flex lg:hidden mt-5 ">
            <img src={CloudIcon} alt="" width="200px" height="200px" />
          </Flex>
          <Box className=" mt-5 lg:mt-[80px] ">
            <Text className="font-inter text-[64px] text-white text-center lg:text-left">
              {ctx.location?.temperature}
            </Text>
            <Text className="font-inter text-lg text-white text-center lg:text-left">
              Sunday | 12 Dec 2023
            </Text>
          </Box>
        </Box>
      </Flex>

      <Flex className="hidden lg:flex">
        <img src={CloudIcon} alt="" />
      </Flex>
    </Flex>
  );
};

export default CurrentWeather;
