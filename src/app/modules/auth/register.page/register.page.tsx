import { LinkButton, Image, Text } from "@/app/atomic";
import GuinaTeamImage from "../../../assets/svg/guina-team/Image.png";
import { registerStrings } from "./register.strings";
import { ArrowLeftIcon, Vector } from "@/app/assets/svg";
import { RegisterForm } from "./components/register.form";

export function RegisterPage() {
  return (
    <div className="items-center justify-between h-screen flex flex-rol w-full">
      <div className="flex flex-1 flex-col h-full">
        <nav className="py-xl px-xl">
          <LinkButton variant="hasIcon" path="./">
            <ArrowLeftIcon />
            {registerStrings.ctaBackToStart}
          </LinkButton>
        </nav>
        <div className="flex items-center justify-center flex-1">
          <div className="justify-center items-center flex flex-col gap-md">
            <div className="justify-center items-center flex flex-col p-xl">
              <Text variant="display">{registerStrings.registerTitle}</Text>
              <Text variant="body1">{registerStrings.registerSubtitle}</Text>
            </div>
            <RegisterForm />
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
      <Image
        variant="sideImage"
        src={GuinaTeamImage}
        alt={registerStrings.altImage}
      />
    </div>
  );
}
