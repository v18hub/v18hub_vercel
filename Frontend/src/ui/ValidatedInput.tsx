// src/ui/ValidatedInput.tsx
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";

interface Props {
  register: any;
  error?: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
}

export const ValidatedInput = ({ register, error, type = "text", placeholder }: Props) => {
  const { name, onChange, onBlur, ref } = register;

  if (type === "password") {
    return (
      <div className="flex flex-col gap-2">
        <Password
          inputId={name}
          {...register}
          toggleMask
          feedback={name === "password"}
          placeholder={placeholder}
          className="custom-input"
          inputClassName="custom-input"
          pt={{
            root: { className: "w-full" },
            input: { className: "custom-input" },
          }}
        />
        {error && <small className="p-error text-xs mt-1">{error}</small>}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <InputText
        {...register}
        type={type}
        placeholder={placeholder}
        className={classNames("custom-input", { "p-invalid": !!error })}
      />
      {error && <small className="p-error text-xs mt-1">{error}</small>}
    </div>
  );
};