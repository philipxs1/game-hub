import useScreenshots from "../hooks/useScreenshots";
import { SimpleGrid, Image } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid mt={5} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3}>
      {" "}
      {data?.results.map((file) => (
        <Image src={file.image} key={file.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
