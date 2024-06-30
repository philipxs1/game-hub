import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <IoSearch />
        </InputLeftElement>
        <Input
          position="relative"
          variant="outline"
          placeholder="Search games"
          size="md"
        />
      </InputGroup>
    </>
  );
};

export default SearchBar;
