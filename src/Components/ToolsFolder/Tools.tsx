import { Flex } from "@mantine/core";
import Menu from "./Menu";
import Activities from "./Activities";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import DailyCarousel from "./DailyCarousel";
import Rainy from "../../assets/dailyweathericons/rainy.svg";
import Storm from "../../assets/dailyweathericons/storm.svg";
import Cloudly from "../../assets/dailyweathericons/cloud.svg";
import Sunny from "../../assets/dailyweathericons/sunny.svg";
import SunRain from "../../assets/dailyweathericons/sunrain.svg";

const dais = [
  {
    day: "FRI",
    weather: Rainy,
  },
  {
    day: "SAT",
    weather: Sunny,
  },
  {
    day: "SUN",
    weather: Cloudly,
  },
  {
    day: "MON",
    weather: SunRain,
  },
  {
    day: "TUES",
    weather: Storm,
  },
];

const Tools = () => {
  return (
    <Flex className="grow  gap-10 pl-10 pr-10 justify-between">
      <Menu />
      <Flex className="flex grow flex-col">
        <Activities />
        <Flex className=" grow flex lg:hidden">
          <DailyCarousel dais={dais} />
        </Flex>
        <HourlyForecast />
      </Flex>
      <Flex className="hidden lg:flex">
        <DailyForecast />
      </Flex>
    </Flex>
  );
};

export default Tools;
