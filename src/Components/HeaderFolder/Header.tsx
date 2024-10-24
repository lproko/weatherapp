import { Flex } from "@mantine/core";
import SelectLocation from "./SelectLocation";
import CurrentWeather from "./CurrentWeather";
import CloudIcon from "../../assets/icon.svg";

const Header = () => {
  return (
    <Flex className="flex grow justify-between items-center pt-10 pl-24 pr-24 pb-0">
      <Flex className="flex flex-col">
        <SelectLocation />
        <CurrentWeather />
      </Flex>
      <Flex>
        <img src={CloudIcon} alt="" />
      </Flex>
    </Flex>
  );
};

export default Header;
