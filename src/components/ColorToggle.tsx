import { Text, HStack, Switch, useColorMode } from "@chakra-ui/react";

const ColorToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack padding=" 15px">
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} colorScheme="green" />
      <Text whiteSpace="nowrap">{colorMode === "light" ? "Dark Mode" : "Light Mode"}</Text>
    </HStack>
  );
};

export default ColorToggle;
