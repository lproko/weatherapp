import { Flex } from "@mantine/core";
import SelectLocation from "./SelectLocation";
import CurrentWeather from "./CurrentWeather";

const Header = () => {
  return (
    <Flex className="flex grow justify-between items-center  pt-10 pl-8 pr-9 lg:pt-10 lg:pl-24 lg:pr-24 pb-0">
      <Flex className="grow flex flex-col justify-center">
        <SelectLocation />
        <CurrentWeather />
      </Flex>
    </Flex>
  );
};

export default Header;
