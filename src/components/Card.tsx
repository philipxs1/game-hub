import { Card, CardBody, Stack, Heading, Text, Image } from "@chakra-ui/react";
import Info from "../hooks/useGames.ts";

interface Props {
  info: Info[];
}

const CharacterCard = ({ info }: Props) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      borderRadius={10}>
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={info.image}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{info.name}</Heading>

          <Text py="2">{info.species}</Text>
          <Text py="2"> {info.status}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default CharacterCard;
