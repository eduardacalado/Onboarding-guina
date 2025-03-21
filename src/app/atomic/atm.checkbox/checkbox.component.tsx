import { useFormContext } from "react-hook-form";

type CheckboxProps = {
  name: string;
};

export function Checkbox({ name }: CheckboxProps) {
  const { register } = useFormContext();

  return (
    <input
      {...register(name)}
      type="checkbox"
      className="w-lg h-lg cursor-pointer"
    />
  );
}
