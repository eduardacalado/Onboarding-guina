import { Text, Image } from "@/app/atomic";
import AvatarImage from "@/app/assets/svg/avatar/Avatar.png";
import { EditIcon, InformationIcon } from "@/app/assets/svg";
import { useUserStore } from "@/app/stores";
import { Card as CardType } from "@/app/data/graphql/generated/graphql";

type CardProps = {
  card?: CardType;
};

export function Card({ card }: CardProps) {
  const { name } = useUserStore();
  const date = new Date(card?.createdAt).toLocaleDateString("pt-br");

  return (
    <div className="flex flex-col gap-md p-md bg-white rounded-sm">
      <div className="flex flex-col gap-sm">
        <Text variant="heading4" className="font-semibold">
          {card?.name}
        </Text>
        <div className="flex gap-xs items-center">
          <Image
            variant="cardAvatarImage"
            src={AvatarImage}
            alt="Imagem do usuário"
          />
          <Text variant="body1">{name}</Text>
        </div>
      </div>
      <div className="flex gap-sm">
        <div className="flex gap-xs items-center">
          <EditIcon size={16} />
          <Text variant="body2">0 comentários</Text>
        </div>
        <div className="flex gap-xs items-center">
          <InformationIcon />
          <Text variant="body2">{date}</Text>
        </div>
      </div>
    </div>
  );
}
