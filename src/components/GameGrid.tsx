import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
// import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid column={3} spacing={10}>
        {games.map((game) => (
          <li key={game.id}>{game.name} </li>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
