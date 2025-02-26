import { Input } from "../../atomic/index";

export function LoginPage() {
  return (
    <div className="items-center justify-center h-screen flex flex-col w-full">
      <div className="p-md flex flex-col gap-sm">
        <Input variant="primary" placeholder="Input Value" />
        <Input disabled={true} placeholder="Input Value" />
      </div>
    </div>
  );
}
