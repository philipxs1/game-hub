import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" `,
        lg: `"nav nav"
            "aside main" `,
      }}
      // gridTemplateRows={"100px 1fr 110px"}
      // gridTemplateColumns={"150px 1fr"}
      // h="200px"
      // gap="1"
      // color="blackAlpha.700"
      // fontWeight="bold"
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>Side</GridItem>
      </Show>

      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
