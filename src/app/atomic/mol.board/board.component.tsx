import { DeleteIcon, EditIcon } from "@/app/assets/svg";
import { Image } from "../atm.image/image.component";
import { Text } from "../atm.typography/typography.component";
import ProjectImage from "@/app/assets/svg/project-image/Default.png";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  function handleNavigateToKanban() {
    navigate("./home/kanban");
  }

  return (
    <div className="flex flex-col flex-[0_0_265px] max-h-[250px] border border-sm border-gray-light rounded-sm overflow-hidden">
      <div onClick={handleNavigateToKanban} className="cursor-pointer">
        <div className="min-h-[124px] overflow-hidden">
          <Image
            variant="boardImage"
            src={ProjectImage}
            alt="Imagem do projeto"
          />
        </div>
        <div className="flex flex-col gap-sm pt-sm px-lg overflow-ellipsis">
          <Text className="line-clamp-2" variant="heading3">
            {title}
          </Text>
          <Text variant="body1">Criado em xx/xx/xxx</Text>
        </div>
      </div>
      <div className="flex w-full gap-md pb-sm px-sm justify-end">
        <button className="cursor-pointer" onClick={handleOpenEditModal}>
          <EditIcon />
        </button>
        <button className="cursor-pointer" onClick={handleOpenDeleteModal}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
