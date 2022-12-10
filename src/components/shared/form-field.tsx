import {CircularProgress} from "@mui/material";
import React, { FC } from "react";

export interface FormFieldProps {
  label: string;
  placeholder?: string;
  multiline?: boolean;
  register?: any;
  id?: string;
  autogenerateFunction?: () => void;
  autogenerateLoading?: boolean;
}

const FormField: FC<FormFieldProps> = ({
  label,
  placeholder,
  multiline,
  register,
  id,
  autogenerateFunction, 
  autogenerateLoading,

}) => {
  return (
    <div className="mb-5" id={id}>
      <div className="flex items-center my-2">
        <p className="font-semibold  mr-4">{label}</p>
        {autogenerateFunction &&  <>
          <button className='generate-button mr-4' onClick={autogenerateFunction}>Generate {label} ⚡️🤖</button>
          {autogenerateLoading && <CircularProgress className='text-teal-800' size={24} />}
        </>}
      </div>
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
