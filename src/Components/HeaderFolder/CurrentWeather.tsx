import { Box, Text } from "@mantine/core";

const CurrentWeather = () => {
  return (
    <Box className="mt-10">
      <Text className="font-inter text-5xl text-white">Rainy</Text>
      <Box className="mt-[100px]">
        <Text className="font-inter text-5xl text-white">14 C</Text>
        <Text className="font-inter text-5xl text-white">
          Sunday | 12 Dec 2023
        </Text>
      </Box>
    </Box>
  );
};

export default CurrentWeather;
