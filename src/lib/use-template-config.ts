import { TemplateType } from "../types";
import { useGenerateResponse } from "./use-generate-response";

export interface TemplateConfig {
  onSubmit: (values: any) => Promise<string>;
}

export const useTemplateConfig = () => {
  const { generateResponse, loading } = useGenerateResponse();

  const templateConfig: Record<TemplateType, TemplateConfig> = {
    [TemplateType.EDGE_CASES]: {
      onSubmit: (args) => generateResponse(TemplateType.EDGE_CASES, args),
    },
    [TemplateType.FEATURE_DESCRIPTION]: {
      onSubmit: (args) =>
        generateResponse(TemplateType.FEATURE_DESCRIPTION, args),
    },
    [TemplateType.ACCEPTANCE_CRITERIA]: {
      onSubmit: (args) =>
        generateResponse(TemplateType.ACCEPTANCE_CRITERIA, args),
    },
    [TemplateType.REQUIREMENTS]: {
      onSubmit: (args) => generateResponse(TemplateType.REQUIREMENTS, args),
    },
    [TemplateType.TEST_CASES]: {
      onSubmit: (args) => generateResponse(TemplateType.TEST_CASES, args),
    },
    [TemplateType.USER_STORIES]: {
      onSubmit: (args) => generateResponse(TemplateType.USER_STORIES, args),
    },
    [TemplateType.HAPPY_PATH]: {
      onSubmit: (args) => generateResponse(TemplateType.HAPPY_PATH, args),
    },
    [TemplateType.SAD_PATH]: {
      onSubmit: (args) => generateResponse(TemplateType.SAD_PATH, args),
    },
    [TemplateType.REQUIREMENTS]: {
      onSubmit: (args) => generateResponse(TemplateType.REQUIREMENTS, args),
    },
  };

  return {
    templateConfig,
    loading,
  };
};
