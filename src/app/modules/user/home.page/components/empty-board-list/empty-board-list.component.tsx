import { ImagePlaceholderIcon } from "@/app/assets/svg";
import { homeStrings } from "../../home.strings";
import { Button, Text } from "@/app/atomic";

type EmptyBoardListProps = {
  handleOpenModal: () => void;
};

export function EmptyBoardList({ handleOpenModal }: EmptyBoardListProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-lg">
      <div className="flex justify-center items-center bg-brand-accessory-light h-[130px] w-[150px] rounded-md">
        <ImagePlaceholderIcon />
      </div>
      <div className="flex flex-col items-center">
        <Text variant="heading3">{homeStrings.noProjectTitle}</Text>
        <Text variant="body1">{homeStrings.noProjectSubtitle}</Text>
      </div>
      <div className="w-[140px]">
        <Button variant="cta" onClick={handleOpenModal}>
          {homeStrings.ctaCreateProject}
        </Button>
      </div>
    </div>
  );
}
