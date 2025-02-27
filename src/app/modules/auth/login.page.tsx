import { InformationDarkIcon } from "@/app/assets/svg";
import { Input, Text } from "../../atomic/index";

export function LoginPage() {
  return (
    <div className="items-center justify-center h-screen flex flex-col w-full">
      <div className="p-md flex flex-col gap-sm">
        <Text variant="inputLabel" tag="p">
          Input Label
          <InformationDarkIcon />
        </Text>
        <Input variant="primary" placeholder="Input Value" />
        <Text variant="inputCaption" tag="p">
          Input Caption
        </Text>
        <Input disabled={true} placeholder="Input Disabled" />
      </div>
    </div>
  );
}
