import { BackgroundImage, Flex } from "@mantine/core";
import Rainy from "../assets/backgrounds/window-with-raindrops-it-lights 2.png";
import Header from "../Components/HeaderFolder/Header";
import Tools from "../Components/ToolsFolder/Tools";

const MainPage = () => {
  return (
    <BackgroundImage src={Rainy}>
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
