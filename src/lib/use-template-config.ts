import { FormFieldType, TemplateType } from "../types";
import { useOpenAI } from "./use-open-ai";

export interface TemplateConfig {
  name: string;
  description: string;
  fields: FormFieldType[];
  onSubmit: (values: any) => Promise<string>;
}

export const useTemplateConfig = () => {
  const {
    generateTestCases,
    generateHappyPath,
    generateSadPath,
    generateRequirements,
    generateUserStories,
    generateFeatureDescription,
    generateAcceptanceCriteria,
    loading,
  } = useOpenAI();

  const templateConfig: Record<TemplateType, TemplateConfig> = {
    [TemplateType.FEATURE_DESCRIPTION]: {
      name: "Generate Feature Description",
      description: "Generate Feature Description",
      fields: [
        FormFieldType.FEAUTRE_NAME,
        FormFieldType.DESCRIPTION,
        FormFieldType.REQUIREMENTS,
      ],
      onSubmit: generateFeatureDescription,
    },
    [TemplateType.ACCEPTANCE_CRITERIA]: {
      name: "Generate Acceptance Criteria",
      description: "Generate Acceptance Criteria",
      fields: [
        FormFieldType.FEAUTRE_NAME,
        FormFieldType.DESCRIPTION,
        FormFieldType.REQUIREMENTS,
      ],
      onSubmit: generateAcceptanceCriteria,
    },
    [TemplateType.REQUIREMENTS]: {
      name: "Generate Feature Requirements",
      description: "Generate Feature Requirements",
      fields: [
        FormFieldType.FEAUTRE_NAME,
        FormFieldType.DESCRIPTION,
        FormFieldType.REQUIREMENTS,
      ],
      onSubmit: generateRequirements,
    },
    [TemplateType.TEST_CASES]: {
      name: "Generate Test Cases",
      description: "Generate Test Cases",
      fields: [
        FormFieldType.FEAUTRE_NAME,
        FormFieldType.DESCRIPTION,
        FormFieldType.REQUIREMENTS,
      ],
      onSubmit: generateTestCases,
    },
    [TemplateType.USER_STORIES]: {
      name: "Generate User Stories",
      description: "Generate User Stories",
      fields: [
        FormFieldType.FEAUTRE_NAME,
        FormFieldType.DESCRIPTION,
        FormFieldType.REQUIREMENTS,
      ],
      onSubmit: generateUserStories,
    },
    [TemplateType.HAPPY_PATH]: {
      name: "Generate Happy Path",
      description: "Generate Happy Path",
      fields: [
        FormFieldType.FEAUTRE_NAME,
        FormFieldType.DESCRIPTION,
        FormFieldType.REQUIREMENTS,
      ],
      onSubmit: generateHappyPath,
    },
    [TemplateType.SAD_PATH]: {
      name: "Generate Sad Path",
      description: "Generate Sad Path",
      fields: [
        FormFieldType.FEAUTRE_NAME,
        FormFieldType.DESCRIPTION,
        FormFieldType.REQUIREMENTS,
      ],
      onSubmit: generateSadPath,
    },
    [TemplateType.REQUIREMENTS]: {
      name: "Generate Requirements",
      description: "Generate Requirements",
      fields: [FormFieldType.FEAUTRE_NAME, FormFieldType.DESCRIPTION],
      onSubmit: generateRequirements,
    },
  };

  return {
    templateConfig,
    loading,
  };
};
