import {
  EyeOffLightIcon,
  EyeOnLightIcon,
  InformationDarkIcon,
} from "@/app/assets/svg";
import { Input, Text, Form, Button, LinkButton } from "../../atomic/index";
import { useState } from "react";

export function LoginPage() {
  const [isPasswordVisible, setIspasswordVisible] = useState(false);
  return (
    <div className="items-center justify-center h-screen flex flex-col w-full">
      <div className="p-md flex flex-col gap-sm">
        <Form>
          <Text variant="inputLabel" tag="p">
            Email
          </Text>
          <Input.Root variant="primary">
            <Input.Field placeholder="Digite seu email" />
          </Input.Root>
          <Text variant="inputLabel" tag="p">
            Senha
          </Text>
          <Input.Root variant="primary">
            <Input.Field
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Digite sua senha"
            />
            <Input.Icon
              onClick={() => setIspasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? <EyeOffLightIcon /> : <EyeOnLightIcon />}
            </Input.Icon>
          </Input.Root>
          <LinkButton path="">Esqueceu a senha?</LinkButton>
          <Button>Entrar</Button>
        </Form>
      </div>
    </div>
  );
}
