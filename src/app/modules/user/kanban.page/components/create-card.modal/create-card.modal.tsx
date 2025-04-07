import { Button, InputField, Text } from "@/app/atomic";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Insira o nome da tarefa" }),
});

export function CreateCardModal() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const handleFormSubmit = () => {
    console.log("Card criado!");
  };

  return (
    <div className="flex flex-col w-full gap-lg">
      <div className="flex justify-center">
        <Text> Criar nova tarefa</Text>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <div className="flex flex-col gap-lg">
            <InputField
              name="name"
              label="Nome da tarefa"
              type="text"
              placeholder="Digite o nome da tarefa"
              className="flex w-full flex-col gap-sm"
            />
            <Button type="submit">Criard tarefa</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
