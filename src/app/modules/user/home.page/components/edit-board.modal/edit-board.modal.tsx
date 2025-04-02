import { Button, InputField, Text } from "@/app/atomic";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { editBoardStrings } from "./edit-board.strings";
import { divVariants } from "./edit-board.modal.style";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Insira o nome do projeto" }),
});

export function EditBoardModal() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const handleFormSubmit = (formData: { name: string }) => {
    console.log(formData);
  };

  return (
    <>
      <div className={divVariants({ variant: "modalContainer" })}>
        <div className={divVariants({ variant: "titleContainer" })}>
          <Text>{editBoardStrings.editBoardTitle}</Text>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
            <div className={divVariants({ variant: "inputFieldContainer" })}>
              <InputField
                name="name"
                label={editBoardStrings.input.label}
                type="text"
                placeholder={editBoardStrings.input.placeholder}
                className="flex w-full flex-col gap-sm"
              />
              <Button type="submit">{editBoardStrings.ctaCreateProject}</Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
