import { LinkButton } from "../../atomic/atm.link-button";

export function LoginPage() {
  return (
    <div className="items-center justify-center h-screen flex flex-col w-full">
      <div className="p-md flex gap-sm">
        <LinkButton
          path="./auth/login"
          variant="link"
          hasIcon={true}
          iconName="ArrowRight"
          iconPlace="right"
        >
          Fazer Login
        </LinkButton>
        <LinkButton
          path="./auth/login"
          variant="link"
          hasIcon={true}
          iconName="ArrowLeft"
          iconPlace="left"
        >
          Voltar ao início
        </LinkButton>
      </div>
    </div>
  );
}
