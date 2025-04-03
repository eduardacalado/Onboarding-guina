import { Button, InputField, Text } from "@/app/atomic";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { useCreateBoard } from "../../home.use-case";
import { toast } from "sonner";
import { createBoardStrings } from "./create-board.strings";
import { createBoardDivVariants } from "./create-board.style";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Insira o nome do projeto" }),
});

type CreateBoardModalProps = {
  onBoardCreated: () => void;
};

export function CreateBoardModal({ onBoardCreated }: CreateBoardModalProps) {
  const { inputFieldContainer, modalContainer, titleContainer } =
    createBoardDivVariants();
  const { createBoard, loading } = useCreateBoard({
    onCompleted() {
      toast.success(createBoardStrings.successMessage);
      onBoardCreated();
    },
    onError(error) {
      const errorMessage = error.message;
      toast.error(createBoardStrings.errorMessage, {
        description: errorMessage,
        action: {
          label: createBoardStrings.ctaTryAgain,
          onClick: () => handleFormSubmit(methods.getValues()),
        },
      });
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
      <div className={modalContainer()}>
        <div className={titleContainer()}>
          <Text>{createBoardStrings.createProjectTitle}</Text>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
            <div className={inputFieldContainer()}>
              <InputField
                name="name"
                label={createBoardStrings.input.label}
                type="text"
                placeholder={createBoardStrings.input.placeholder}
                className="flex w-full flex-col gap-sm"
              />
              <Button type="submit" isLoading={loading}>
                {createBoardStrings.ctaCreateProject}
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
