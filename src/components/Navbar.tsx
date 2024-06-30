import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/GameHub Resources/Logo/logo.webp";
import SearchBar from "./SearchBar";
import ColorToggle from "./ColorToggle";

const Navbar = () => {
  return (
    <HStack>
      <Image src={Logo} boxSize="60px" />
      <SearchBar />
      <ColorToggle />
    </HStack>
  );
};

export default Navbar;
