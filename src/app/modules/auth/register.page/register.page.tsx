import {
  Button,
  Checkbox,
  InputField,
  LinkButton,
  SideImage,
  Text,
} from "@/app/atomic";
import GuinaTeamImage from "../../../assets/svg/guina-team/Image.png";
import { registerStrings } from "./register.strings";
import { ArrowLeftIcon, Vector } from "@/app/assets/svg";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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

export function RegisterPage() {
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
    <div className="items-center justify-between h-screen flex flex-rol w-full">
      <div className="flex flex-1 flex-col h-full">
        <nav className="py-lg px-lg">
          <LinkButton variant="hasIcon" path="./">
            <ArrowLeftIcon />
            {registerStrings.ctaBackToStart}
          </LinkButton>
        </nav>
        <div className="flex items-center justify-center flex-1">
          <div className="justify-center items-center flex flex-col gap-md">
            <div className="justify-center items-center flex flex-col p-lg">
              <Text variant="display">{registerStrings.registerTitle}</Text>
              <Text variant="body1">{registerStrings.registerSubtitle}</Text>
            </div>
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
                    label={
                      registerStrings.passwordInput.confirmationInput.label
                    }
                    type="password"
                    placeholder={
                      registerStrings.passwordInput.confirmationInput
                        .placeholder
                    }
                    className="flex w-full flex-col gap-sm"
                  />
                  <div className="flex gap-x-sm">
                    <Checkbox />
                    <Text variant="body1">
                      Li e concordo com os
                      <LinkButton variant="link" path="./">
                        {" "}
                        Termos de uso{" "}
                      </LinkButton>
                      e
                      <LinkButton variant="link" path="./">
                        {" "}
                        Política de Privacidade
                      </LinkButton>
                    </Text>
                  </div>
                  <Button type="submit" isLoading={false}>
                    {registerStrings.ctaRegister}
                  </Button>
                </div>
              </form>
            </FormProvider>
            <div className="flex flex-col gap-sm items-center">
              <div className="flex flex-rol items-center justify-center gap-xxs">
                <Vector />
                <Text variant="body2">{registerStrings.or}</Text>
                <Vector />
              </div>
              <div className="flex flex-rol gap-x-sm">
                <Text variant="body1">{registerStrings.hasAccount}</Text>
                <LinkButton path="./login">
                  {registerStrings.ctaLogin}
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideImage src={GuinaTeamImage} alt={registerStrings.altImage} />
    </div>
  );
}
