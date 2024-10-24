import { Flex } from "@mantine/core";
import Menu from "./Menu";
import Activities from "./Activities";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";

const Tools = () => {
  return (
    <Flex className="grow  gap-10 pl-10 pr-10 justify-between">
      <Menu />
      <Flex className="flex flex-col">
        <Activities />
        <HourlyForecast />
      </Flex>
      <DailyForecast />
    </Flex>
  );
};

export default Tools;
