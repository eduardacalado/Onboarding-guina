import { Text, Image } from "@/app/atomic";
import AvatarImage from "@/app/assets/svg/avatar/Avatar.png";
import { EditIcon, InformationIcon } from "@/app/assets/svg";

export function Card() {
  return (
    <div className="flex flex-col gap-md p-md bg-white rounded-sm">
      <div className="flex flex-col gap-sm">
        <Text variant="heading4" className="font-semibold">
          Título da tarefa criada
        </Text>{" "}
        <div className="flex gap-xs items-center">
          <Image
            variant="cardAvatarImage"
            src={AvatarImage}
            alt="Imagem do usuário"
          />
          <Text variant="body1">Nome do usuário</Text>
        </div>
      </div>
      <div className="flex gap-md">
        <div className="flex gap-xs items-center">
          <EditIcon size={16} />
          <Text variant="body2">0 comentários</Text>
        </div>
        <div className="flex gap-xs items-center">
          <InformationIcon />
          <Text variant="body2">xx/xx/xx</Text>
        </div>
      </div>
    </div>
  );
}
