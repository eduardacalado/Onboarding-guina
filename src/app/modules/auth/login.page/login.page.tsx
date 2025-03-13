import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Button,
  InputField,
  LinkButton,
  SideImage,
  Text,
} from "../../../atomic/index";
import GuinaTeamImage from "../../../assets/svg/guina-team/Image.png";
import { ArrowLeftIcon, Vector } from "@/app/assets/svg";
import * as LoginStrings from "./login.strings";

const formSchema = z.object({
  userEmail: z
    .string({ message: "Insira seu email" })
    .toLowerCase()
    .email({ message: "Email inválido" }),
  userPassword: z
    .string({ message: "Insira sua senha" })
    .min(6, { message: "A senha deve conter no mínimo 6 dígitos" }),
});

export function LoginPage() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });

  const onSubmit = (values: any) => {
    console.log("teste", values);
  };

  return (
    <div className="items-center justify-between h-screen flex flex-rol w-full">
      <div className="flex flex-1 flex-col h-full">
        <nav className="py-lg px-lg">
          <LinkButton path="./">
            <ArrowLeftIcon />
            {LoginStrings.ctaBackToStart}
          </LinkButton>
        </nav>
        <div className="flex items-center justify-center flex-1">
          <div className="justify-center items-center flex flex-col gap-md">
            <div className="justify-center items-center flex flex-col">
              <Text variant="display">{LoginStrings.loginSignupTitle}</Text>
              <Text variant="body1">{LoginStrings.loginSignupSubtitle}</Text>
            </div>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="flex flex-col items-end gap-md w-[400px]">
                  <InputField
                    name={LoginStrings.emailInput.name}
                    label={LoginStrings.emailInput.label}
                    type="email"
                    placeholder={LoginStrings.emailInput.placeholder}
                    className="flex w-full flex-col gap-sm"
                  />
                  <InputField
                    name={LoginStrings.passwordInput.name}
                    label={LoginStrings.passwordInput.label}
                    type="password"
                    placeholder={LoginStrings.passwordInput.placeholder}
                    className="flex w-full flex-col gap-sm"
                  />
                  <LinkButton path="./">
                    {LoginStrings.forgotPassword}
                  </LinkButton>
                  <Button type="submit">{LoginStrings.ctaEnter}</Button>
                </div>
              </form>
            </FormProvider>
            <div className="flex flex-col gap-sm items-center">
              <div className="flex flex-rol items-center justify-center gap-xxs">
                <Vector />
                <Text variant="body2">{LoginStrings.or}</Text>
                <Vector />
              </div>
              <div className="flex flex-rol gap-x-sm">
                <Text variant="body1">{LoginStrings.noAccount}</Text>
                <LinkButton path="./">{LoginStrings.ctaSignup}</LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideImage src={GuinaTeamImage} alt="Time da Guiná" />
    </div>
  );
}
