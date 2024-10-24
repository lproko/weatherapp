import { Box } from "@mantine/core";
import WeatherChart from "./WeatherChart";

const HourlyForecast = () => {
  return (
    <Box className="rounded-xl mt-8  pt-[11px] pb-[20px] h-[245px] " bg="gray">
      <WeatherChart />
    </Box>
  );
};

export default HourlyForecast;
