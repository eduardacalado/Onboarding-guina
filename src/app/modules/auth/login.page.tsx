import {
  EyeOfflightIcon,
  EyeOnLightIcon,
  InformationDarkIcon,
} from "@/app/assets/svg";
import { Input, Text } from "../../atomic/index";
import { useState } from "react";

export function LoginPage() {
  const [isPasswordVisible, setIspasswordVisible] = useState(false);
  return (
    <div className="items-center justify-center h-screen flex flex-col w-full">
      <div className="p-md flex flex-col gap-sm">
        <Text variant="inputLabel" tag="p">
          Input Label
          <InformationDarkIcon />
        </Text>
        <Input.Root>
          <Input.Field type={isPasswordVisible ? "text" : "password"} />
          <Input.Icon onClick={() => setIspasswordVisible(!isPasswordVisible)}>
            {isPasswordVisible ? <EyeOfflightIcon /> : <EyeOnLightIcon />}
          </Input.Icon>
        </Input.Root>
        <Text variant="inputCaption" tag="p">
          Input Caption
        </Text>
      </div>
    </div>
  );
}
