import { ImagePlaceholderIcon } from "@/app/assets/svg";
import { Button, Text } from "@/app/atomic";

export function HomePage() {
  return (
    <div className="bg-gray-light h-screen px-[142px] py-xl">
      <div className="py-xl">
        <Text variant="heading1">Todos os projetos</Text>
      </div>
      <div className="flex flex-col justify-center items-center bg-white h-[466px] rounded-md gap-lg">
        <div className="flex justify-center items-center bg-brand-accessory-light h-[130px] w-[150px] rounded-md">
          <ImagePlaceholderIcon />
        </div>
        <div className="flex flex-col items-center">
          <Text variant="heading3">Nenhum projeto</Text>
          <Text variant="body1">Você ainda não tem um projeto criado.</Text>
        </div>
        <div className="w-[140px]">
          <Button variant="cta" isLoading={false}>
            Criar projeto
          </Button>
        </div>
      </div>
    </div>
  );
}
