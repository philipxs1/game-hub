import { Img, Text } from "@chakra-ui/react";

interface Props {
  genre_image: string;
  genre_name: string;
}

const Genrecard = ({ genre_image, genre_name }: Props) => {
  return (
    <div>
      <Img src={genre_image} />
      <Text>{genre_name}</Text>
    </div>
  );
};

export default Genrecard;
