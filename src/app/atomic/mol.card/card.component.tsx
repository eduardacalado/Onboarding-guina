import { Text, Image } from "@/app/atomic";
import AvatarImage from "@/app/assets/svg/avatar/Avatar.png";
import { DeleteIcon, EditIcon, InformationIcon } from "@/app/assets/svg";
import { useUserStore } from "@/app/stores";
import {
  Card as CardType,
  CardColumns,
} from "@/app/data/graphql/generated/graphql";
import { cardDivVariants } from "./card.style";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type CardProps = {
  card: CardType;
  column?: CardColumns;
  onUpdateCardClick?: () => void;
  onDeleteCardClick?: () => void;
};

type Visibility = "visible" | "hidden" | "collapse";

export function Card({
  card,
  column,
  onUpdateCardClick,
  onDeleteCardClick,
}: CardProps) {
  const {
    cardContainer,
    titleUserContainer,
    userCommentsInfoContainer,
    comentInfoContainer,
  } = cardDivVariants();
  const { name } = useUserStore();
  const date = new Date(card?.createdAt).toLocaleDateString("pt-br");
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: card.id,
    data: { column },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    visibility: isDragging ? "hidden" : ("visible" as Visibility),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={cardContainer()}
    >
      <div className={titleUserContainer()}>
        <div className="flex flex-row justify-between pointer-events-none">
          <Text variant="heading4" className="font-semibold">
            {card?.name}
          </Text>
          <button
            className="cursor-pointer pointer-events-auto"
            onClick={onDeleteCardClick}
            onPointerDown={(e) => {
              e.stopPropagation();
            }}
          >
            <DeleteIcon size={20} />
          </button>
        </div>
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
          <button
            className="cursor-pointer pointer-events-auto"
            onClick={onUpdateCardClick}
            onPointerDown={(e) => {
              e.stopPropagation();
            }}
          >
            <EditIcon size={16} />
          </button>
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
