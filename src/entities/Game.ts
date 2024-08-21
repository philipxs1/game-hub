import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  metacritic: number;
  rating_top: number;
  slug: string;
  description_raw: string;
  publishers: Publisher[];
}

export default Game;
