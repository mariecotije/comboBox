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
      <br />
      <input
        className="form-input"
        {...register(name, { required: true })}
        disabled={disabled}
      />
      {errors[name] && <div className="err-msg">Toto pole je povinné</div>}
      {error && <span>{error}</span>}
    </div>
  );
}

export default TextInput;
