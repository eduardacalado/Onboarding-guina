import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Button,
  InputField,
  LinkButton,
  SideImage,
  Text,
} from "../../atomic/index";
import GuinaTeamImage from "../../assets/svg/guina-team/Image.png";
import { ArrowLeftIcon, Vector } from "@/app/assets/svg";

const formSchema = z.object({
  useremail: z
    .string({ message: "Insira seu email" })
    .toLowerCase()
    .email({ message: "Email inválido" }),
  userpassword: z
    .string({ message: "Insira sua senha" })
    .min(6, { message: "A senha deve conter no mínimo 6 dígitos" }),
});

export function LoginPage() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      useremail: "",
      userpassword: "",
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
            Voltar para o início
          </LinkButton>
        </nav>
        <div className="flex items-center justify-center flex-1">
          <div className="justify-center items-center flex flex-col gap-md">
            <div className="justify-center items-center flex flex-col">
              <Text variant="display" tag="h1">
                Entre ou cadastre-se
              </Text>
              <Text variant="body1" tag="p">
                Para entrar na plataforma é necessário entrar ou criar uma
                conta.
              </Text>
            </div>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="flex flex-col items-end gap-md">
                  <InputField
                    name="useremail"
                    label="Email"
                    type="email"
                    placeholder="Digite seu email"
                    className="flex flex-col gap-sm"
                  />
                  <InputField
                    name="userpassword"
                    label="Senha"
                    type="password"
                    placeholder="Digite sua senha"
                    className="flex flex-col gap-sm"
                  />
                  <LinkButton path="./">Esqueceu a senha?</LinkButton>
                  <Button type="submit">Entrar</Button>
                </div>
              </form>
            </FormProvider>
            <div className="flex flex-col gap-sm items-center">
              <div className="flex flex-rol items-center justify-center gap-xxs">
                <Vector />
                <Text variant="body2" tag="p">
                  Ou
                </Text>
                <Vector />
              </div>
              <div className="flex flex-rol gap-x-sm">
                <Text variant="body1" tag="p">
                  Ainda não tem uma conta?
                </Text>
                <LinkButton path="./">Cadastre-se</LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideImage src={GuinaTeamImage} alt="Time da Guiná" />
    </div>
  );
}
