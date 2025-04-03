import { EditIcon } from "@/app/assets/svg";
import { Image } from "../atm.image/image.component";
import { Text } from "../atm.typography/typography.component";
import ProjectImage from "@/app/assets/svg/project-image/Default.png";

type BoardProps = {
  title: string;
  handleModal: () => void;
};

export function Board({ title, handleModal }: BoardProps) {
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
        <div className="flex w-full justify-end">
          <button
            type="button"
            className="cursor-pointer"
            onClick={handleModal}
          >
            <EditIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
