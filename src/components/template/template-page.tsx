import { CircularProgress } from "@mui/material";
import { Feature } from "@prisma/client";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useUpdateFeatureMutation } from "../../api/features/use-update-feature-mutation";
import { useNotification } from "../../context/notification.provider";
import { useProjectContext } from "../../context/project.provider";
import { useTemplateConfig } from "../../lib/use-template-config";
import { TemplateType } from "../../types";

export interface TemplateProps {
  title: string;
  feature: Feature;
  fieldName: string;
  templateType: TemplateType;
}

const Template: FC<TemplateProps> = ({
  feature,
  title,
  fieldName,
  templateType,
}) => {
  const generateButtonText = `Generate ${title.toLowerCase()} ⚡️🤖`;

  const [isGenerateButtonClicked, setIsGenerateButtonClicked] = useState(false);

  const { showErrorNotification, showSuccessNotification } = useNotification();

  const { isMutating, trigger } = useUpdateFeatureMutation(feature.id, {
    onSuccess: () => {
      showSuccessNotification(`Added ${title}`);
    },
    onError: () => {
      showErrorNotification("Uh oh, something went wrong. Please try again.");
    },
  });

  const { register, handleSubmit, setValue } = useForm();

  const { templateConfig, loading } = useTemplateConfig();

  const { onSubmit: autoGenerateFunction } = templateConfig[templateType];

  const { activeProject: project } = useProjectContext();

  const onGenerateButtonClick = () => {
    const args = {
      project,
      feature,
    };

    setIsGenerateButtonClicked(true);
    autoGenerateFunction(args)
      .then((data) => {
        setValue(fieldName, data);
      })
      .catch((err) => showErrorNotification(err.message));
  };

  const onSubmit = (data: any) => {
    const args = {
      ...feature,
      ...data,
    };

    console.log({ args });

    trigger(args);
  };

  useEffect(() => {
    //@ts-ignore
    setValue(fieldName, feature[fieldName]);
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <h1>{title}</h1>
      </div>
      <p className="mt-4">
        Click on the <b>{generateButtonText}</b> button to quickly generate{" "}
        {title.toLowerCase()} for this feature
      </p>
      <p className="mt-2">
        You can also type in your own {title.toLowerCase()} or add to the auto
        generated response.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <textarea
          cols={30}
          rows={10}
          {...register(fieldName, { required: true })}
        />
        <span className="flex items-center mt-4 justify-between">
          <div className="flex items-center">
            <button
              className={`generate-button mr-4 ${
                !isGenerateButtonClicked && "generate-button-pulse"
              }`}
              onClick={onGenerateButtonClick}
            >
              {generateButtonText}
            </button>
            {loading && (
              <CircularProgress className="text-teal-800" size={24} />
            )}
          </div>
          <div className="flex items-center">
            {isMutating && (
              <CircularProgress className="text-teal-800" size={24} />
            )}
            <button type="submit" className="ml-4">
              Save {title.toLowerCase()}
            </button>
          </div>
        </span>
      </form>
    </div>
  );
};

export { Template };
