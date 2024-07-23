import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchParam: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Grid
        templateAreas={{
          base: `"nav" "main" `,
          lg: `"nav nav"
            "aside main" `,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px, 1fr",
        }}
        // gridTemplateRows={"100px 1fr 110px"}
        // gridTemplateColumns={"150px 1fr"}
        // h="200px"
        // gap="1"
        // color="blackAlpha.700"
        // fontWeight="bold"
      >
        <GridItem area={"nav"}>
          <Navbar onSearch={(searchParam) => setGameQuery({ ...gameQuery, searchParam })} />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <Box paddingLeft={5}>
            <GameHeading gameQuery={gameQuery} />
            <Flex gap={5} marginBottom={5}>
              {/* <PlatformSelect
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
              /> */}
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
              />
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
