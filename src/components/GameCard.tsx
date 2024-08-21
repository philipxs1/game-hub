import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import Game  from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import GameScore from "./GameScore";
import getCroppedImageUrl from "../services/image-url";
import EmojiRating from "./EmojiRating";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
          <GameScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" flexWrap={"nowrap"}>
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          <EmojiRating rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
