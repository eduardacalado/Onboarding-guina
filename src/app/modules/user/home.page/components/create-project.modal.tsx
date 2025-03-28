import { Button, InputField, Text } from "@/app/atomic";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { useCreateBoard } from "../home.use-case";
import { toast } from "react-toastify";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Insira o nome do projeo" }),
});

export function CreateProjectModal() {
  const { createBoard, loading } = useCreateBoard({
    onCompleted() {
      toast.success("projeto criado com sucesso!");
    },
    onError(error) {
      const errorMessage =
        error.message || "Erro ao criar tarefa, tente novamente";
      toast.error(errorMessage);
    },
  });

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const handleFormSubmit = (formData: { name: string }) => {
    createBoard({ data: formData });
  };

  return (
    <>
      <div className="flex flex-col w-full gap-lg">
        <div className="flex justify-center">
          <Text>Criar novo projeto</Text>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
            <div className="flex flex-col gap-lg">
              <InputField
                name="name"
                label="Nome do projeto"
                type="text"
                placeholder="Digite o nome do projeto"
                className="flex w-full flex-col gap-sm"
              />
              <Button type="submit" isLoading={loading}>
                Criar projeto
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
