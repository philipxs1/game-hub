import { HStack, Text } from "@chakra-ui/react";

import SearchBar from "./SearchBar";
import ColorToggle from "./ColorToggle";

interface Props {
  onSearch: (searchParam: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack marginTop={5}>
      <div>
        <Text fontSize="lg" letterSpacing={6} fontWeight="900" paddingX={10}>
          RAWG
        </Text>
      </div>
      <SearchBar onSearch={onSearch} />
      <ColorToggle />
    </HStack>
  );
};

export default Navbar;
