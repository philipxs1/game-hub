import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || " "}  ${
    gameQuery.genre?.name || " "
  }  New and trending`;

  return (
    <Heading marginY={5} fontSize="6xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
