import { BackgroundImage, Flex } from "@mantine/core";
import Rainy from "../assets/backgrounds/window-with-raindrops-it-lights 2.png";
import Cloudy from "../assets/backgrounds/cloudy.jfif";
import Sunny from "../assets/backgrounds/sunny.jfif";
import Stormy from "../assets/backgrounds/stormy.jfif";
import Header from "../Components/HeaderFolder/Header";
import Tools from "../Components/ToolsFolder/Tools";
import { useContext } from "react";
import { LocationContext } from "../context/LocationContext";

const MainPage = () => {
  const ctx = useContext(LocationContext);
  const getBackroundImage = (weather: string) => {
    switch (weather) {
      case "Sunny":
        return Sunny;
      case "Cloudy":
        return Cloudy;
      case "Rainy":
        return Rainy;
      case "Stormy":
        return Stormy;
    }
  };
  return (
    <BackgroundImage
      src={
        getBackroundImage(ctx.location?.weatherDescription as string) || "Sunny"
      }
    >
      <Flex className="flex grow h-screen justify-center">
        <Flex className="flex flex-col w-full gap-6 ">
          <Flex>
            <Header />
          </Flex>
          <Flex>
            <Tools />
          </Flex>
        </Flex>
      </Flex>
    </BackgroundImage>
  );
};

export default MainPage;
