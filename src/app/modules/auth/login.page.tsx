import { ArrowLeftIcon, ArrowRightIcon } from "../../assets/svg";
import { LinkButton } from "../../atomic/index";

export function LoginPage() {
  return (
    <div className="items-center justify-center h-screen flex flex-col w-full">
      <div className="p-md flex gap-sm">
        <LinkButton path="./auth/login" variant="link">
          <ArrowLeftIcon />
          Voltar ao início
        </LinkButton>
        <LinkButton path="./auth/login" variant="link">
          Fazer Login
          <ArrowRightIcon />
        </LinkButton>
      </div>
    </div>
  );
}
