import React from "react";

type TextInputProps = {
  label: string;
  name: string;
  register: any;
  errors: any;
  disabled?: boolean;
  error?: string;
};

function TextInput({
  label,
  name,
  register,
  errors,
  disabled,
  error,
}: TextInputProps): JSX.Element {
  return (
    <div>
      <label>{label}</label>
      <input
        {...register(name, { required: true })}
        disabled={disabled}
        style={{ borderColor: error ? "red" : "" }}
      />
      {errors[name] && <span>Toto pole je povinné</span>}
      {error && <span>{error}</span>}
    </div>
  );
}

export default TextInput;
