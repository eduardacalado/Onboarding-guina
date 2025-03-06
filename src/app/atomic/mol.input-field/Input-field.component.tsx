import { EyeOffLightIcon, EyeOnLightIcon } from "@/app/assets/svg";
import { Text, Input } from "../index";
import { ReactNode, useState } from "react";
import { useFormContext } from "react-hook-form";

interface InputFieldProps {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "tel";
  placeholder: string;
  icon?: ReactNode;
  className?: string;
}

function InputField({
  name,
  label,
  type,
  placeholder,
  icon,
  className,
}: InputFieldProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  return (
    <div className={className}>
      <Text variant="inputLabel" tag="p">
        {label}
      </Text>
      <Input.Root variant="primary">
        <Input.Field
          {...register(name)}
          type={type === "password" && isPasswordVisible ? "text" : type}
          placeholder={placeholder}
        />
        {type === "password" && (
          <Input.Icon onClick={togglePasswordVisibility}>
            {isPasswordVisible ? <EyeOffLightIcon /> : <EyeOnLightIcon />}
          </Input.Icon>
        )}
        {icon}
      </Input.Root>
      {errors[name]?.message && (
        <Text tag="p" variant="inputCaptionError">
          {String(errors[name]?.message)}
        </Text>
      )}
    </div>
  );
}

export default InputField;
