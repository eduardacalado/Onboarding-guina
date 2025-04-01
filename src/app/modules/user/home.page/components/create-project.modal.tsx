import { Button, InputField, Text } from "@/app/atomic";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { useCreateBoard } from "../home.use-case";
import { toast } from "react-toastify";
import { createProjectStrings } from "./create-project.strings";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Insira o nome do projeto" }),
});

type CreateProjectModalProps = {
  onProjectCreated: () => void;
};

export function CreateProjectModal({
  onProjectCreated,
}: CreateProjectModalProps) {
  const { createBoard, loading } = useCreateBoard({
    onCompleted() {
      toast.success(createProjectStrings.successMessage);
      onProjectCreated();
    },
    onError(error) {
      const errorMessage = error.message || createProjectStrings.errorMessage;
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
          <Text>{createProjectStrings.createProjectTitle}</Text>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
            <div className="flex flex-col gap-lg">
              <InputField
                name="name"
                label={createProjectStrings.input.label}
                type="text"
                placeholder={createProjectStrings.input.label}
                className="flex w-full flex-col gap-sm"
              />
              <Button type="submit" isLoading={loading}>
                {createProjectStrings.ctaCreateProject}
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
