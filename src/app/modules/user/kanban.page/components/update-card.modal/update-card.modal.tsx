import { Button, InputField, Text } from "@/app/atomic";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { updateCardStrings } from "./update-card.strings";
import { updateCardDivVariants } from "./update-card.style";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Insira o nome da tarefa" }),
});

type UpdateCardModalProps = {
  cardName: string;
};

export function UpdateCardModal({ cardName }: UpdateCardModalProps) {
  const { modalContainer, titleContainer, inputFieldContainer } =
    updateCardDivVariants();
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
    <div className={modalContainer()}>
      <div className={titleContainer()}>
        <Text>{updateCardStrings.updateCardTitle}</Text>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <div className={inputFieldContainer()}>
            <InputField
              name="name"
              label={updateCardStrings.input.label}
              type="text"
              placeholder={updateCardStrings.input.placeholder}
              className="flex w-full flex-col gap-sm"
            />
            <Button type="submit">{updateCardStrings.ctaUpdateCard}</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
