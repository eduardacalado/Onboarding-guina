import { Button, InputField, Text } from "@/app/atomic";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { createCardStrings } from "./create-card.strings";
import { createCardDivVariants } from "./create-card.style";
import { toast } from "sonner";
import { useCreateCard } from "./create-card.use-case";
import { CardColumns } from "@/app/data/graphql/generated/graphql";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Insira o nome da tarefa" }),
});

type CreateCardModalProps = {
  onCardCreated: () => void;
  boardId: string;
  column: CardColumns;
};

export function CreateCardModal({
  onCardCreated,
  boardId,
  column,
}: CreateCardModalProps) {
  const { createCard, loading } = useCreateCard({
    onCompleted() {
      toast.success(createCardStrings.successMessage);
      onCardCreated();
    },
    onError(error) {
      const errorMessage = error.message;
      toast.error(createCardStrings.errorMessage, {
        description: errorMessage,
        action: {
          label: createCardStrings.ctaTryAgain,
          onClick: () => handleFormSubmit(methods.getValues()),
        },
      });
    },
  });
  const { inputFieldContainer, modalContainer, titleContainer } =
    createCardDivVariants();

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  type FormData = z.infer<typeof formSchema>;

  const handleFormSubmit = (data: FormData) => {
    createCard({
      data: {
        name: data.name,
        boardId,
        column,
      },
    });
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
            <Button isLoading={loading} type="submit">
              {createCardStrings.ctaCreateCard}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
