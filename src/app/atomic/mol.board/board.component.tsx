import { Image } from "../atm.image/image.component";
import { Text } from "../atm.typography/typography.component";
import ProjectImage from "@/app/assets/svg/project-image/Default.png";

export function Board() {
  return (
    <div className="border border-sm border-gray-light rounded-sm">
      <div className="max-w-[247px] max-h-[124px] overflow-hidden">
        <Image
          variant="projectImage"
          src={ProjectImage}
          alt="Imagem do projeto"
        />
      </div>
      <div className="flex flex-col gap-sm p-lg">
        <Text variant="heading3">Projeto tal</Text>
        <Text variant="body1">Criado em xx/xx/xxx</Text>
      </div>
    </div>
  );
}
