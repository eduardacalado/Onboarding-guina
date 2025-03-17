import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Button,
  InputField,
  LinkButton,
  SideImage,
  Text,
  LoadingSpinner,
} from "../../../atomic/index";
import GuinaTeamImage from "../../../assets/svg/guina-team/Image.png";
import { ArrowLeftIcon, Vector } from "@/app/assets/svg";
import * as LoginStrings from "./login.strings";
import { useMutation } from "@apollo/client";
import { LoginDocument } from "@/app/data/graphql/generated/graphql";

const formSchema = z.object({
  email: z
    .string({ message: "Insira seu email" })
    .toLowerCase()
    .email({ message: "Email inválido" }),
  password: z
    .string({ message: "Insira sua senha" })
    .min(6, { message: "A senha deve conter no mínimo 6 dígitos" }),
});

export function LoginPage() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loginMutation, { loading }] = useMutation(LoginDocument, {
    onCompleted: (data) => {
      console.log("Login realizado com sucesso", data);
    },
    onError: (error) => {
      const errorMessage =
        error.message || "Erro ao fazer login. Tente novamente";
      console.log(errorMessage);
    },
  });

  const handleFormSubmit = (formData: { email: string; password: string }) => {
    loginMutation({ variables: { data: formData } });
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
              <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
                <div className="flex flex-col items-end gap-md w-[400px]">
                  <InputField
                    name="email"
                    label={LoginStrings.emailInput.label}
                    type="email"
                    placeholder={LoginStrings.emailInput.placeholder}
                    className="flex w-full flex-col gap-sm"
                  />
                  <InputField
                    name="password"
                    label={LoginStrings.passwordInput.label}
                    type="password"
                    placeholder={LoginStrings.passwordInput.placeholder}
                    className="flex w-full flex-col gap-sm"
                  />
                  <LinkButton path="./">
                    {LoginStrings.forgotPassword}
                  </LinkButton>
                  <Button type="submit" isLoading={loading}>
                    {LoginStrings.ctaEnter}
                  </Button>
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
