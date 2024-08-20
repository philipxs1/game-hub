import { HStack, Text } from "@chakra-ui/react";

import SearchBar from "./SearchBar";
import ColorToggle from "./ColorToggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack marginTop={5}>
      <div>
        <Text fontSize="lg" letterSpacing={6} fontWeight="900" paddingX={10}>
          <Link to="/"> RAWG</Link>
        </Text>
      </div>
      <SearchBar />
      <ColorToggle />
    </HStack>
  );
};

export default Navbar;
