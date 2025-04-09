import { Button, InputField, Text } from "@/app/atomic";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { updateCardStrings } from "./update-card.strings";
import { updateCardDivVariants } from "./update-card.style";
import { useUpdateCard } from "./update-card.use-case";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Insira o nome da tarefa" }),
});

type UpdateCardModalProps = {
  cardName: string;
  cardId: string;
  onCardUpdated: () => void;
};

export function UpdateCardModal({
  cardName,
  cardId,
  onCardUpdated,
}: UpdateCardModalProps) {
  const { modalContainer, titleContainer, inputFieldContainer } =
    updateCardDivVariants();
  const { updateCard, loading } = useUpdateCard({
    onCompleted() {
      toast.success("Tarefa editada com sucesso!");
      onCardUpdated();
    },
    onError(error) {
      const errorMessage = error.message;
      toast.error("Erro ao editar tarefa", {
        description: errorMessage,
        action: {
          label: "Tente novamente",
          onClick: () => handleFormSubmit(methods.getValues()),
        },
      });
    },
  });
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: cardName,
    },
  });

  const handleFormSubmit = (formData: { name: string }) => {
    updateCard({ data: { id: cardId, name: formData.name } });
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
            <Button isLoading={loading} type="submit">
              {updateCardStrings.ctaUpdateCard}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
