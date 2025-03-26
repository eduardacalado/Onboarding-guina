import { Outlet } from "react-router-dom";
import InstaqLogo from "@/app/assets/svg/instaq-logo/Instaq.svg";
import { AvatarImage, LinkButton } from "@/app/atomic";
import Avatar from "@/app/assets/svg/avatar/Avatar.png";
import { PickerIcon } from "@/app/assets/svg/index";
import { homeStrings } from "./home.strings";

export function HomeLayout() {
  return (
    <div>
      <header className="flex items-center justify-center h-4xl px-[142px] py-sm">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center justify-center bg-brand-primary-x-dark w-3xl h-3xl rounded-sm">
            <img src={InstaqLogo} alt="Logo Instaq" className="w-xxl h-xxl" />
          </div>
          <div className="flex items-center gap-sm">
            <AvatarImage src={Avatar} alt="Avatar do usuário" />
            <LinkButton path="/home" variant="hasIcon">
              {homeStrings.headerUsername}
              <PickerIcon />
            </LinkButton>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
