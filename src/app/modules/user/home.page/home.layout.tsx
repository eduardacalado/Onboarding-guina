import { Outlet } from "react-router-dom";
import InstaqLogo from "@/app/assets/svg/instaq-logo/Instaq.svg";
import { AvatarImage, LinkButton } from "@/app/atomic";
import Avatar from "@/app/assets/svg/avatar/Avatar.png";
import { PickerIcon } from "@/app/assets/svg/index";

export function HomeLayout() {
  return (
    <div>
      <header className="flex items-center justify-center h-[64px] px-[142px] py-[8px] shadow-lg">
        <div className="flex justify-between  items-center w-full">
          <div className="flex items-center justify-center bg-brand-primary-x-dark w-[48px] h-[48px] rounded-sm">
            <img
              src={InstaqLogo}
              alt="Logo Instaq"
              className="w-[40px] h-[40px]"
            />
          </div>
          <div className="flex items-center gap-sm">
            <AvatarImage src={Avatar} alt="Avatar do usuário" />
            <LinkButton path="/home" variant="hasIcon">
              Nome do usuário
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
