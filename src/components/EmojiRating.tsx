import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/GameHub Resources/Emojis/bulls-eye.webp";
import meh from "../assets/GameHub Resources/Emojis/meh.webp";
import thumbs from "../assets/GameHub Resources/Emojis/thumbs-up.webp";

interface Props {
  rating: number;
}

const EmojiRating = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbs, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} />;
};

export default EmojiRating;
