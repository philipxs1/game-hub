import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";

import SortSelector from "../components/SortSelector";
import GameHeading from "../components/GameHeading";
import PlatformSelect from "../components/PlatformSelect";

const HomePage = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Grid
        templateAreas={{
          base: `"main" `,
          lg: ` "aside main" `,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px, 1fr",
        }}>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area={"main"} paddingLeft={10}>
          <Box paddingLeft={5}>
            <GameHeading />
            <Flex gap={5} marginBottom={5}>
              <PlatformSelect />
              <SortSelector />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default HomePage;
