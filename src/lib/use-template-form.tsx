import {useUser} from "@auth0/nextjs-auth0/client";
import {useState, useEffect} from "react";
import {useForm, SubmitErrorHandler, FieldValues} from "react-hook-form";
import {AutoFillGeneralFieldValues, AutoFillRequirementsFieldValues} from "../constants";
import {TemplateType} from "../types";
import {useTemplateConfig, TemplateConfig} from "./use-template-config";


const useTemplateForm = () => {
  const { handleSubmit, register, setValue, watch } = useForm();
  const { user } = useUser();
  const { templateConfig } = useTemplateConfig();

  const [response, setResponse] = useState<any>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>(
    TemplateType.TEST_CASES
  );
  const [selectedTemplateConfig, setSelectedTemplateConfig] =
    useState<TemplateConfig>();

  useEffect(() => {
    setSelectedTemplateConfig(templateConfig[selectedTemplate]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTemplate]);

  const externalUserRequestCount: number =
    typeof window !== "undefined"
      ? parseInt(localStorage.getItem("externalUserRequestCount") || "0")
      : 0;
  // @ts-ignore
  const onSubmit = (data) => {
    console.log({ data });
    console.log(externalUserRequestCount);

    if (!user && externalUserRequestCount < 1) {
      selectedTemplateConfig?.onSubmit(data).then((res) => setResponse(res));
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "externalUserRequestCount",
          JSON.stringify(externalUserRequestCount + 1)
        );
      }
    } else if (user) {
      selectedTemplateConfig?.onSubmit(data).then((res) => setResponse(res));
    } else {
      alert("Create account to use Playground");
    }
  };

  const onError: SubmitErrorHandler<FieldValues> = (error) => {
    alert(error);
  };

  const autoFillTemplateFields = () => {
    const fieldData = fetchAutoFillForTemplateFields();
    for (const [field, values] of Object.entries(fieldData)) {
      setValue(field, values);
    }
  };

  const fetchAutoFillForTemplateFields = (
    template: TemplateType = selectedTemplate
  ) => {
    console.log("Fetch auto fill fields");
    const autoFill: Record<TemplateType, object> = {
      [TemplateType.TEST_CASES]: AutoFillGeneralFieldValues,
      [TemplateType.HAPPY_PATH]: AutoFillGeneralFieldValues,
      [TemplateType.SAD_PATH]: AutoFillGeneralFieldValues,
      [TemplateType.REQUIREMENTS]: AutoFillRequirementsFieldValues,
      [TemplateType.USER_STORIES]: AutoFillGeneralFieldValues,
      [TemplateType.FEATURE_DESCRIPTION]: AutoFillGeneralFieldValues,
      [TemplateType.ACCEPTANCE_CRITERIA]: AutoFillGeneralFieldValues,
    };

    return autoFill[template] || "";
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit, onError),
    response,
    selectedTemplate,
    setSelectedTemplate,
    selectedTemplateConfig,
    setSelectedTemplateConfig,
    templateConfig,
    setValue,
    autoFillTemplateFields,
    watch
  };
};

export { useTemplateForm };
