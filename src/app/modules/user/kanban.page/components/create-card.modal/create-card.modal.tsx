import { Button, InputField, Text } from "@/app/atomic";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { createCardStrings } from "./create-card.strings";
import { createCardDivVariants } from "./create-card.style";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Insira o nome da tarefa" }),
});

export function CreateCardModal() {
  const { inputFieldContainer, modalContainer, titleContainer } =
    createCardDivVariants();

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const handleFormSubmit = () => {
    toast.success(createCardStrings.succesMessage);
  };

  return (
    <div className={modalContainer()}>
      <div className={titleContainer()}>
        <Text>{createCardStrings.createCardTitle}</Text>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <div className={inputFieldContainer()}>
            <InputField
              name="name"
              label={createCardStrings.input.label}
              type="text"
              placeholder={createCardStrings.input.placeholder}
              className="flex w-full flex-col gap-sm"
            />
            <Button type="submit">Criard tarefa</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
