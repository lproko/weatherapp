import { Box, Group, Menu, UnstyledButton, Text, Flex } from "@mantine/core";
import { forwardRef, useContext } from "react";
import { IconChevronRight } from "@tabler/icons-react";
import LocationIcon from "../../assets/Frame 3.svg";
import { LocationContext } from "../../context/LocationContext";
import Locations from "../../data";

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  location: any;
  icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ location, icon, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      style={{
        padding: "0",
        color: "var(--mantine-color-text)",
        borderRadius: "var(--mantine-radius-sm)",
      }}
      {...others}
    >
      <Group>
        <Flex className="flex items-center">
          <img src={LocationIcon} alt="" />

          <Text className="font-inter text-xl lg:text-2xl  text-white ml-[10px]">
            {location?.name}
          </Text>

          <Text className="ml-[5px]">
            {icon || <IconChevronRight size="1.5rem" color="white" />}
          </Text>
        </Flex>
      </Group>
    </UnstyledButton>
  )
);

const SelectLocation = () => {
  const handleUpdateLocation = (e: any) => {
    const currentLocation = Locations.filter((place) => {
      return place.name === e.target.innerText;
    });
    ctx.updateLocation(currentLocation[0]);
  };
  const ctx = useContext(LocationContext);
  return (
    <Flex className="flex grow justify-between">
      <Box>
        <Menu offset={-7} position="right">
          <Menu.Target>
            <UserButton location={ctx.location} />
          </Menu.Target>
          <Menu.Dropdown bg="transparent">
            {Locations.map((place: any, idx: number) => (
              <Menu.Item
                key={idx}
                className="p-0"
                onClick={(e) => handleUpdateLocation(e)}
              >
                <Text className="font-inter text-2xl text-white ">
                  {place?.name}
                </Text>
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </Box>
    </Flex>
  );
};

export default SelectLocation;
