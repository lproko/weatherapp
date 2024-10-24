import { Box, Group, Menu, UnstyledButton, Text, Flex } from "@mantine/core";
import { forwardRef } from "react";
import { IconChevronRight } from "@tabler/icons-react";
import LocationIcon from "../../assets/Frame 3.svg";

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  location: string;
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

          <Text className="font-inter text-2xl text-white ml-[11px]">
            {location}
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
  return (
    <Box>
      <Menu offset={-7} position="right">
        <Menu.Target>
          <UserButton location="New York" />
        </Menu.Target>
        <Menu.Dropdown bg="transparent">
          <Menu.Item className="p-0">
            <Text className="font-inter text-2xl text-white ">New York</Text>
          </Menu.Item>
          <Menu.Item className="p-0">
            <Text className="font-inter text-2xl text-white ">New York</Text>
          </Menu.Item>
          <Menu.Item className="p-0">
            <Text className="font-inter text-2xl text-white ">New York</Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
};

export default SelectLocation;