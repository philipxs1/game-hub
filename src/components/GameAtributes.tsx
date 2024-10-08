import { Text, SimpleGrid } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import GameScore from "./GameScore";
import Game  from "../entities/Game";

interface Props {
  game: Game;
}

const GameAtributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} gap={5} as="dl">
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <GameScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAtributes;
