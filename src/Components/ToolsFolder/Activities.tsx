import { Box, Flex, Text } from "@mantine/core";
import HeartIcon from "../../assets/activities/Icon.svg";
import FirstActivity from "../../assets/activities/2km.png";
import SecondActivity from "../../assets/activities/1.5km.png";
import ThirdActivity from "../../assets/activities/3km.png";
import FourthActivity from "../../assets/activities/500m.png";

const Activities = () => {
  const areaActivities = [
    {
      image: FirstActivity,
      distance: "2km away",
    },
    {
      image: SecondActivity,
      distance: "1.5km away",
    },
    {
      image: ThirdActivity,
      distance: "3km away",
    },
    {
      image: FourthActivity,
      distance: "500m away",
    },
  ];
  return (
    <Box className="rounded-xl p-[54px] pt-[27px] pb-[34px] " bg="gray">
      <Flex className="flex justify-start">
        <img src={HeartIcon} alt="" />
        <Text className="font-inter text-2xl text-white ml-0.5">
          Activities in your area
        </Text>
      </Flex>
      <Flex className="gap-[21px] mt-9">
        {areaActivities.map((activity, idx) => {
          return (
            <Flex key={idx} className="flex flex-col">
              <img src={activity.image} alt="" />
              <Text className="font-inter text-base text-[#2B261D] font-medium ml-0.5">
                {activity.distance}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Activities;
