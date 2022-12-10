import React, { FC } from "react";

export interface FormFieldProps {
  label: string;
  placeholder?: string;
  multiline?: boolean;
  register?: any;
  id?: string;
}

const FormField: FC<FormFieldProps> = ({
  label,
  placeholder,
  multiline,
  register,
  id,
}) => {
  return (
    <div className="mb-5" id={id}>
      <p className="font-semibold mb-2">{label}</p>
      {multiline ? (
        <textarea
          placeholder={placeholder}
          rows={3}
          {...register}
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="w-full h-10 px-5 rounded-md border-2 border-gray-300"
          {...register}
        />
      )}
    </div>
  );
};

export { FormField };
