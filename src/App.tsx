import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";

import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import PlatformSelect from "./components/PlatformSelect";

export interface GameQuery {
  genreID: number;
  platformId?: number;
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
        }}>
        <GridItem area={"nav"}>
          <Navbar onSearch={(searchParam) => setGameQuery({ ...gameQuery, searchParam })} />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList
              selectedGenreID={gameQuery.genreID}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreID: genre.id })}
            />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <Box paddingLeft={5}>
            <GameHeading gameQuery={gameQuery} />
            <Flex gap={5} marginBottom={5}>
              <PlatformSelect
                selectedPlatformId={gameQuery.platformId}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
              />
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
