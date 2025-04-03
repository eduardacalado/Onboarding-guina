import { DeleteIcon, EditIcon } from "@/app/assets/svg";
import { Image } from "../atm.image/image.component";
import { Text } from "../atm.typography/typography.component";
import ProjectImage from "@/app/assets/svg/project-image/Default.png";

type BoardProps = {
  title: string;
  handleOpenEditModal: () => void;
  handleOpenDeleteModal: () => void;
};

export function Board({
  title,
  handleOpenEditModal,
  handleOpenDeleteModal,
}: BoardProps) {
  return (
    <div className="flex flex-col flex-[0_0_265px] max-h-[250px] border border-sm border-gray-light rounded-sm overflow-hidden">
      <div className="min-h-[124px] overflow-hidden">
        <Image
          variant="boardImage"
          src={ProjectImage}
          alt="Imagem do projeto"
        />
      </div>
      <div className="flex flex-col gap-sm py-md px-lg overflow-ellipsis">
        <Text className="line-clamp-2" variant="heading3">
          {title}
        </Text>
        <Text variant="body1">Criado em xx/xx/xxx</Text>
        <div className="flex w-full gap-md justify-end">
          <button className="cursor-pointer" onClick={handleOpenEditModal}>
            <EditIcon />
          </button>
          <button className="cursor-pointer" onClick={handleOpenDeleteModal}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
