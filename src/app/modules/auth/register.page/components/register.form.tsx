import { Button, Checkbox, InputField, LinkButton, Text } from "@/app/atomic";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { registerStrings } from "../register.strings";

const formSchema = z
  .object({
    name: z.string().nonempty({ message: "Insira seu nome completo" }),
    email: z
      .string()
      .nonempty({ message: "Insira seu email" })
      .toLowerCase()
      .email({ message: "Email inválido" }),
    password: z
      .string()
      .nonempty({ message: "Insira sua senha" })
      .min(6, { message: "A senha deve conter no mínimo 6 dígitos" }),
    confirmPassword: z
      .string()
      .nonempty({ message: "Confirme sua senha" })
      .min(6, { message: "A senha deve conter no mínimo 6 dígitos" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senha incorreta",
    path: ["confirmPassword"],
  });

export function RegisterForm() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (formData: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    console.log("teste", formData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-col items-start gap-md w-[400px]">
          <InputField
            name="name"
            label={registerStrings.nameInput.label}
            type="text"
            placeholder={registerStrings.nameInput.placeholder}
            className="flex w-full flex-col gap-sm"
          />
          <InputField
            name="email"
            label={registerStrings.emailInput.label}
            type="email"
            placeholder={registerStrings.emailInput.placeholder}
            className="flex w-full flex-col gap-sm"
          />
          <InputField
            name="password"
            label={registerStrings.passwordInput.label}
            type="password"
            placeholder={registerStrings.passwordInput.placeholder}
            className="flex w-full flex-col gap-sm"
          />
          <InputField
            name="confirmPassword"
            label={registerStrings.passwordInput.confirmationInput.label}
            type="password"
            placeholder={
              registerStrings.passwordInput.confirmationInput.placeholder
            }
            className="flex w-full flex-col gap-sm"
          />
          <div className="flex gap-x-sm">
            <Checkbox />
            <Text variant="body1">
              {registerStrings.readAndAgreed}
              <LinkButton variant="link" path="./">
                {" "}
                {registerStrings.termsOfUse}{" "}
              </LinkButton>
              {registerStrings.and}
              <LinkButton variant="link" path="./">
                {" "}
                {registerStrings.privacyPolicy}
              </LinkButton>
            </Text>
          </div>
          <Button type="submit" isLoading={false}>
            {registerStrings.ctaRegister}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
