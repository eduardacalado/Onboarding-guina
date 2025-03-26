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
import { loginStrings } from "./login.strings";
import { useLogin } from "./login.use-case";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Insira seu email" })
    .toLowerCase()
    .email({ message: "Email inválido" }),
  password: z
    .string()
    .nonempty({ message: "Insira sua senha" })
    .min(6, { message: "A senha deve conter no mínimo 6 dígitos" }),
});

export function LoginPage() {
  const navigate = useNavigate();

  const { login, loading } = useLogin({
    onCompleted() {
      toast.success("loginStrings.toastSuccessLogin");
      navigate("/home");
    },
    onError(error) {
      const errorMessage = error.message || loginStrings.toastErrorLogin;
      toast.error(errorMessage);
    },
  });

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = (formData: { email: string; password: string }) => {
    login({ data: formData });
  };

  return (
    <div className="items-center justify-between h-screen flex flex-rol w-full">
      <div className="flex flex-1 flex-col h-full">
        <nav className="py-xl px-xl">
          <LinkButton variant="hasIcon" path="./">
            <ArrowLeftIcon />
            {loginStrings.ctaBackToStart}
          </LinkButton>
        </nav>
        <div className="flex items-center justify-center flex-1">
          <div className="justify-center items-center flex flex-col gap-md">
            <div className="justify-center items-center flex flex-col p-xl">
              <Text variant="display">{loginStrings.loginSignupTitle}</Text>
              <Text variant="body1">{loginStrings.loginSignupSubtitle}</Text>
            </div>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
                <div className="flex flex-col items-end gap-md w-[400px]">
                  <InputField
                    name="email"
                    label={loginStrings.emailInput.label}
                    type="email"
                    placeholder={loginStrings.emailInput.placeholder}
                    className="flex w-full flex-col gap-sm"
                  />
                  <InputField
                    name="password"
                    label={loginStrings.passwordInput.label}
                    type="password"
                    placeholder={loginStrings.passwordInput.placeholder}
                    className="flex w-full flex-col gap-sm"
                  />
                  <LinkButton path="./">
                    {loginStrings.forgotPassword}
                  </LinkButton>
                  <Button type="submit" isLoading={loading}>
                    {loginStrings.ctaEnter}
                  </Button>
                </div>
              </form>
            </FormProvider>
            <div className="flex flex-col gap-sm items-center">
              <div className="flex flex-rol items-center justify-center gap-xxs">
                <Vector />
                <Text variant="body2">{loginStrings.or}</Text>
                <Vector />
              </div>
              <div className="flex flex-rol gap-x-sm">
                <Text variant="body1">{loginStrings.noAccount}</Text>
                <LinkButton path="./register">
                  {loginStrings.ctaRegister}
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideImage src={GuinaTeamImage} alt={loginStrings.altImage} />
    </div>
  );
}
