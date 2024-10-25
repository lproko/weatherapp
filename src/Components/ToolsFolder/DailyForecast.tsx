import { Box } from "@mantine/core";
import DailyCarousel from "./DailyCarousel";
import Rainy from "../../assets/dailyweathericons/rainy.svg";
import Storm from "../../assets/dailyweathericons/storm.svg";
import Cloudly from "../../assets/dailyweathericons/cloud.svg";
import Sunny from "../../assets/dailyweathericons/sunny.svg";
import SunRain from "../../assets/dailyweathericons/sunrain.svg";
import AirConditions from "./AirConditions";

const DailyForecast = () => {
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
  return (
    <Box className="rounded-xl pt-[20px] pb-[30px]" bg="gray">
      <DailyCarousel dais={dais} />
      <AirConditions />
    </Box>
  );
};

export default DailyForecast;
