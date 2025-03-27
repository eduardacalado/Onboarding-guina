import { ImagePlaceholderIcon } from "@/app/assets/svg";
import { Button, Text, Modal } from "@/app/atomic";
import { homeStrings } from "./home.strings";
import { useState } from "react";

export function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-gray-light h-screen px-[142px] py-xl">
      <div className="py-xl">
        <Text variant="heading1">{homeStrings.allProjectsTitle}</Text>
      </div>
      <div className="flex flex-col justify-center items-center bg-white py-[96px] rounded-md gap-lg">
        <div className="flex justify-center items-center bg-brand-accessory-light h-[130px] w-[150px] rounded-md">
          <ImagePlaceholderIcon />
        </div>
        <div className="flex flex-col items-center">
          <Text variant="heading3">{homeStrings.noProjectTitle}</Text>
          <Text variant="body1">{homeStrings.noProjectSubtitle}</Text>
        </div>
        <div className="w-[140px]">
          <Button variant="cta" onClick={() => setIsModalOpen(true)}>
            {homeStrings.ctaCreateProject}
          </Button>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <p>Modal</p>
        </Modal>
      </div>
    </div>
  );
}
