import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, InputField } from "../../atomic/index";

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
    <div className="items-center justify-center h-screen flex flex-col w-full">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-md">
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
            <Button type="submit">Entrar</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
