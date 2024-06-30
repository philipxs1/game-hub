import { Text, HStack, Switch, useColorMode } from "@chakra-ui/react";

const ColorToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack justifyContent="space-between" padding=" 15px">
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text>{colorMode === "light" ? "Dark" : "Light"}</Text>
    </HStack>
  );
};

export default ColorToggle;
