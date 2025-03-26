import { ImagePlaceholderIcon } from "@/app/assets/svg";
import { Button, Text } from "@/app/atomic";

export function HomePage() {
  return (
    <div className="bg-gray-light h-screen px-[142px] py-[32px]">
      <div className="py-[32px]">
        <Text variant="heading1">Todos os projetos</Text>
      </div>
      <div>
        <div className="bg-white h-[466px] rounded-md flex flex-col justify-center items-center gap-lg">
          <div className="bg-brand-accessory-light h-[130px] w-[150px] rounded-md flex justify-center items-center">
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
    </div>
  );
}
