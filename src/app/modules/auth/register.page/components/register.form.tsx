import { Button, Checkbox, InputField, LinkButton, Text } from "@/app/atomic";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { registerStrings } from "../register.strings";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../register.use-case";
import { toast } from "sonner";
import { FeedbackErrorIcon } from "@/app/assets/svg";

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
    checkbox: z.boolean().refine((value) => value === true, {
      message: "Você deve aceitar os termos.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senha incorreta",
    path: ["confirmPassword"],
  });

export function RegisterForm() {
  const navigate = useNavigate();

  const { register, loading } = useRegister({
    onCompleted() {
      toast(registerStrings.SuccessMessage);
      navigate("/home");
    },
    onError(error) {
      const errorMessage = error.message;
      toast(registerStrings.ErrorMessage, {
        description: errorMessage,
        action: {
          label: registerStrings.ctaTryAgain,
          onClick: () => handleFormSubmit(methods.getValues()),
        },
      });
    },
  });

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleFormSubmit = (formData: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    checkbox: boolean;
  }) => {
    register({
      data: {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
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
            <Checkbox name="checkbox" />
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
          {methods.formState.errors["checkbox"]?.message && (
            <div className="flex">
              <FeedbackErrorIcon />
              <Text variant="inputCaptionError">
                {String(methods.formState.errors["checkbox"]?.message)}
              </Text>
            </div>
          )}
          <Button type="submit" isLoading={loading}>
            {registerStrings.ctaRegister}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
