import { Text, Image } from "@/app/atomic";
import AvatarImage from "@/app/assets/svg/avatar/Avatar.png";
import { EditIcon, InformationIcon } from "@/app/assets/svg";
import { useUserStore } from "@/app/stores";
import { Card as CardType } from "@/app/data/graphql/generated/graphql";
import { cardDivVariants } from "./card.style";

type CardProps = {
  card?: CardType;
};

export function Card({ card }: CardProps) {
  const {
    cardContainer,
    titleUserContainer,
    userCommentsInfoContainer,
    comentInfoContainer,
  } = cardDivVariants();
  const { name } = useUserStore();
  const date = new Date(card?.createdAt).toLocaleDateString("pt-br");

  return (
    <div className={cardContainer()}>
      <div className={titleUserContainer()}>
        <Text variant="heading4" className="font-semibold">
          {card?.name}
        </Text>
        <div className={userCommentsInfoContainer()}>
          <Image
            variant="cardAvatarImage"
            src={AvatarImage}
            alt="Imagem do usuário"
          />
          <Text variant="body1">{name}</Text>
        </div>
      </div>
      <div className={comentInfoContainer()}>
        <div className={userCommentsInfoContainer()}>
          <EditIcon size={16} />
          <Text variant="body2">0 comentários</Text>
        </div>
        <div className={userCommentsInfoContainer()}>
          <InformationIcon />
          <Text variant="body2">{date}</Text>
        </div>
      </div>
    </div>
  );
}
