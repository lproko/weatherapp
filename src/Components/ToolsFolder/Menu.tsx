import { Box, Flex, Text } from "@mantine/core";
import WeatherIcon from "../../assets/menuicons/weathericon.svg";
import ExploreIcon from "../../assets/menuicons/exploreicon.svg";
import LocationIcon from "../../assets/menuicons/locationicon.svg";
import SettingsIcon from "../../assets/menuicons/settingsicon.svg";
import Avatar from "../../assets/avatar.png";

const Menu = () => {
  return (
    <Box className="rounded-xl p-[20px] pt-[20px] pb-[20px] " bg="gray">
      <Flex className="h-[60px] w-[60px] rounded-full justify-center items-center">
        <img src={Avatar} alt="" />
      </Flex>
      <Flex className=" flex flex-col  mt-[99px] gap-[22px]">
        <Flex className=" flex flex-col items-center ">
          <img src={WeatherIcon} alt="" />
          <Text className="font-inter text-sm text-white">weather</Text>
        </Flex>
        <Flex className="flex flex-col items-center">
          <img src={ExploreIcon} alt="" />
          <Text className="font-inter text-sm text-white">explore</Text>
        </Flex>
        <Flex className="flex flex-col items-center">
          <img src={LocationIcon} alt="" />
          <Text className="font-inter text-sm text-white">cities</Text>
        </Flex>
        <Flex className="flex flex-col items-center">
          <img src={SettingsIcon} alt="" />
          <Text className="font-inter text-sm text-white">settings</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Menu;
