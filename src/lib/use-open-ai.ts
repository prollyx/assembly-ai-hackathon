import { Configuration, OpenAIApi } from "openai";
import { useGenerateResponse } from "./use-generate-response";
import { TemplateType } from "../types";
import { Feature, Project } from "@prisma/client";

export interface GenericAIResponseArgs {
  feature?: Feature;
  project?: Project;
}

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPEN_API_KEY,
});
const openai = new OpenAIApi(configuration);

const useOpenAI = () => {
  const { generateResponse, loading } = useGenerateResponse();

  const generateTestCases = async (
    args: GenericAIResponseArgs
  ): Promise<string> => {
    return generateResponse(TemplateType.TEST_CASES, args);
  };

  const generateHappyPath = async (
    args: GenericAIResponseArgs
  ): Promise<string> => {
    return generateResponse(TemplateType.HAPPY_PATH, args);
  };

  const generateSadPath = async (
    args: GenericAIResponseArgs
  ): Promise<string> => {
    return generateResponse(TemplateType.SAD_PATH, args);
  };

  const generateRequirements = async (
    args: GenericAIResponseArgs
  ): Promise<string> => {
    return generateResponse(TemplateType.REQUIREMENTS, args);
  };
  const generateUserStories = async (
    args: GenericAIResponseArgs
  ): Promise<string> => {
    return generateResponse(TemplateType.USER_STORIES, args);
  };

  const generateFeatureDescription = async (
    args: GenericAIResponseArgs
  ): Promise<string> => {
    return generateResponse(TemplateType.FEATURE_DESCRIPTION, args);
  };

  const generateAcceptanceCriteria = async (
    args: GenericAIResponseArgs
  ): Promise<string> => {
    return generateResponse(TemplateType.ACCEPTANCE_CRITERIA, args);
  };

  return {
    generateTestCases,
    generateHappyPath,
    generateSadPath,
    generateRequirements,
    generateUserStories,
    generateFeatureDescription,
    generateAcceptanceCriteria,
    loading,
  };
};

export { useOpenAI };
