import { FormHTMLAttributes } from "react";

type FormProps = FormHTMLAttributes<HTMLFormElement> & {};

function Form({ children }: FormProps) {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex flex-col gap-md"
    >
      {children}
    </form>
  );
}

export default Form;
