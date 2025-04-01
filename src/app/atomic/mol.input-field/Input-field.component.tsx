import {
  EyeOffLightIcon,
  EyeOnLightIcon,
  FeedbackErrorIcon,
} from "@/app/assets/svg";
import { Text, Input } from "../index";
import { ReactNode, useState } from "react";
import { useFormContext } from "react-hook-form";

interface InputFieldProps {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "tel";
  placeholder: string;
  value?: string;
  icon?: ReactNode;
  className?: string;
}

export function InputField({
  name,
  label,
  type,
  placeholder,
  value,
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
      <Text variant="inputLabel">{label}</Text>
      <Input.Root variant="primary">
        <Input.Field
          {...register(name)}
          type={type === "password" && isPasswordVisible ? "text" : type}
          placeholder={placeholder}
          value={value}
        />
        {type === "password" && (
          <Input.Icon onClick={togglePasswordVisibility}>
            {isPasswordVisible ? <EyeOffLightIcon /> : <EyeOnLightIcon />}
          </Input.Icon>
        )}
        {icon}
      </Input.Root>
      {errors[name]?.message && (
        <div className="flex">
          <FeedbackErrorIcon />
          <Text variant="inputCaptionError">
            {String(errors[name]?.message)}
          </Text>
        </div>
      )}
    </div>
  );
}
