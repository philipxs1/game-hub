import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../state-management /store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreID = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginY={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem
            flexWrap="nowrap"
            display="flex"
            justifyContent="space-between"
            gap={10}
            paddingY="5px"
            key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenreID ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                variant="link"
                textAlign="left"
                whiteSpace="normal"
                justifyContent={"space-between"}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
