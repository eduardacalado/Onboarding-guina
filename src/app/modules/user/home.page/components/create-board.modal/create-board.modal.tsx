import { Button, InputField, Text } from "@/app/atomic";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { useCreateBoard } from "../../home.use-case";
import { toast } from "react-toastify";
import { createBoardStrings } from "./create-board.strings";
import { createBoardDivVariants } from "./create-board.styles";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Insira o nome do projeto" }),
});

type CreateBoardModalProps = {
  onBoardCreated: () => void;
};

export function CreateBoardModal({ onBoardCreated }: CreateBoardModalProps) {
  const { createBoard, loading } = useCreateBoard({
    onCompleted() {
      toast.success(createBoardStrings.successMessage);
      onBoardCreated();
    },
    onError(error) {
      const errorMessage = error.message || createBoardStrings.errorMessage;
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
      <div className={createBoardDivVariants({ variant: "modalContainer" })}>
        <div className={createBoardDivVariants({ variant: "titleContainer" })}>
          <Text>{createBoardStrings.createProjectTitle}</Text>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
            <div
              className={createBoardDivVariants({
                variant: "inputFieldContainer",
              })}
            >
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
