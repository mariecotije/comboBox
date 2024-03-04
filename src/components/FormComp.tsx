import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import TextInput from "./TextInput";
import ComboBox from "./ComboBox";

type FormValues = {
  name: string;
  university: string;
};

const FormComp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(`Jméno: ${data.name}, Univerzita: ${data.university || "Neuvedeno"}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="Vaše křestní jméno"
        name="name"
        register={register}
        errors={errors}
      />
      <ComboBox
        label="Univerzita na kterou chodíte"
        name="university"
        register={register}
        errors={errors}
        required={false}
      />
      <input className="form-btn" type="submit" />
    </form>
  );
};

export default FormComp;
