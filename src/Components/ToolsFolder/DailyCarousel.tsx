import { Box, Flex, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Clock from "../../assets/dailyweathericons/Clock.svg";
interface Properties {
  day: string;
  weather: string;
}
interface DailyCarouselProps {
  dais: Properties[];
}

const DailyCarousel = ({ dais }: DailyCarouselProps) => {
  return (
    <Box className="rounded-xl grow pt-[20px] pb-[20px] w-[320px] " bg="gray">
      <Carousel
        className="pl-8 pr-8"
        height={60}
        slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideGap={{ base: 0, sm: "md" }}
        align="start"
        controlsOffset="xs"
      >
        {dais.map((item, idx: number) => (
          <Carousel.Slide key={idx}>
            <Flex className="flex flex-col items-center">
              <Text className="font-inter text-lg text-white">{item.day}</Text>
              <img src={item.weather} alt="" width="30px" height="30px" />
            </Flex>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Flex className=" hidden lg:flex items-center justify-center">
        <img src={Clock} alt="" />
        <Text className="font-inter text-white text-lg">8:00PM GMT</Text>
      </Flex>
    </Box>
  );
};

export default DailyCarousel;
