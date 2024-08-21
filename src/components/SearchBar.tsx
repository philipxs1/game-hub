import { Input, InputGroup, InputLeftElement, InputRightElement, Kbd } from "@chakra-ui/react";
import { useRef } from "react";
import { IoSearch } from "react-icons/io5";
import useGameQueryStore from "../state-management /store";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}>
      <InputGroup width="100%">
        <InputLeftElement children={<IoSearch />} pointerEvents="none" />
        <Input
          backgroundColor="hsla(0, 0%, 100%, .16)"
          borderRadius={20}
          position="relative"
          variant="filled"
          placeholder="Search games..."
          size="md"
          min={10}
          ref={ref}
        />
        <InputRightElement hideBelow="md" display="flex" flexDirection="row" paddingX={20} gap={2}>
          <Kbd>alt</Kbd> + <Kbd>Enter</Kbd>
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default SearchBar;
