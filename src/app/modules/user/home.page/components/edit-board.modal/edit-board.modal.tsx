import { Button, InputField, Text } from "@/app/atomic";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { editBoardStrings } from "./edit-board.strings";
import { editBoardDivVariants } from "./edit-board.style";
import { useEditBoard } from "./edit-board.use-case";
import { toast } from "react-toastify";

type EditBoardModalProps = {
  boardId: string;
  boardName: string;
  onBoardUpdated: () => void;
};

const formSchema = z.object({
  name: z.string().nonempty({ message: "Insira o nome do projeto" }),
});

export function EditBoardModal({
  boardId,
  onBoardUpdated,
  boardName,
}: EditBoardModalProps) {
  const { editBoard, loading } = useEditBoard({
    onCompleted() {
      toast.success(editBoardStrings.successMessage);
      onBoardUpdated();
    },
    onError(error) {
      const errorMessage = error.message || editBoardStrings.errorMessage;
      toast.error(errorMessage);
    },
  });

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: boardName,
    },
  });

  const handleFormSubmit = (formData: { name: string }) => {
    editBoard({ data: { id: boardId, name: formData.name } });
  };

  return (
    <>
      <div className={editBoardDivVariants({ variant: "modalContainer" })}>
        <div className={editBoardDivVariants({ variant: "titleContainer" })}>
          <Text>{editBoardStrings.editBoardTitle}</Text>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
            <div
              className={editBoardDivVariants({
                variant: "inputFieldContainer",
              })}
            >
              <InputField
                name="name"
                label={editBoardStrings.input.label}
                type="text"
                placeholder={editBoardStrings.input.placeholder}
                className="flex w-full flex-col gap-sm"
              />
              <Button type="submit" isLoading={loading}>
                {editBoardStrings.ctaEditProject}
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
