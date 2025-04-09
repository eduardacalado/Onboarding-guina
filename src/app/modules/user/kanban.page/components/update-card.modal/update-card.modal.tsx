import { Button, InputField, Text } from "@/app/atomic";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Insira o nome da tarefa" }),
});

type UpdateCardModalProps = {
  cardName: string;
};

export function UpdateCardModal({ cardName }: UpdateCardModalProps) {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: cardName,
    },
  });

  const handleFormSubmit = () => {
    toast.success("Tarefa");
  };
  return (
    <div className="flex flex-col w-full gap-lg">
      <div className="flex justify-center">
        <Text>Editar nome da tarefa</Text>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <div className="flex flex-col gap-lg">
            <InputField
              name="name"
              label="Renomear tarefa"
              type="text"
              placeholder="Digite o novo nome da tarefa"
              className="flex w-full flex-col gap-sm"
            />
            <Button type="submit">Editar tarefa</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
