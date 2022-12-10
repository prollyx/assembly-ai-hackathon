import { Configuration, OpenAIApi } from "openai";
import {useOpenAI2} from "./use-open-ai-2";
import {TemplateType} from "../types";

export interface GenerateTestCasesArgs {
    name: string;
    description: string;
    requirements: string;
  }
  

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPEN_API_KEY,
});
const openai = new OpenAIApi(configuration);

const useOpenAI = () => {
  const {generateResponse} = useOpenAI2()

  const generateTestCases = async (
    args: GenerateTestCasesArgs
  ): Promise<string> => {
    return generateResponse(TemplateType.TEST_CASES, args)
  };

  const generateHappyPath = async (
    args: GenerateTestCasesArgs
  ): Promise<string> => {
    return generateResponse(TemplateType.HAPPY_PATH, args)
  };

  const generateSadPath = async (
    args: GenerateTestCasesArgs
  ): Promise<string> => {
    return generateResponse(TemplateType.SAD_PATH, args)
  };

  const generateRequirements = async (
    args: GenerateTestCasesArgs
  ): Promise<string> => {
    return generateResponse(TemplateType.REQUIREMENTS, args)
  };
  const generateUserStories = async (
    args: GenerateTestCasesArgs
  ): Promise<string> => {
    return generateResponse(TemplateType.USER_STORIES, args)
  };

  const generateFeatureDescription = async (
    args: GenerateTestCasesArgs
    ): Promise<string> => {
    return generateResponse(TemplateType.FEATURE_DESCRIPTION, args)
    };

    const generateAcceptanceCriteria = async (
      args: GenerateTestCasesArgs
      ): Promise<string> => {
      return generateResponse(TemplateType.ACCEPTANCE_CRITERIA, args)
      };
      
    

  return {
    generateTestCases,
    generateHappyPath,
    generateSadPath,
    generateRequirements,
    generateUserStories,
    generateFeatureDescription,
    generateAcceptanceCriteria
  };
};

export { useOpenAI };
