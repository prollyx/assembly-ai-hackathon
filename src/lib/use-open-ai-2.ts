import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import {
  GenerateTestCasesArgs,
  generateUserStories as _generateUserStories,
} from "./prompts/generate-completions-prompt";
import { openAIConfig } from "../config/config";
import { TemplateType } from "../types";
import { mapTemplateToGeneratePrompt } from "../constants";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPEN_API_KEY,
});
const openai = new OpenAIApi(configuration);

const useOpenAI2 = () => {
  const [loading, setLoading] = useState(false);

  const generateResponse = async (
    template: TemplateType,
    args: GenerateTestCasesArgs,
  ): Promise<string> => {
    return new Promise(async (resolve, reject) => {
      console.log({ args }, template);

      try {
        setLoading(true);
        const response = await openai.createCompletion({
          ...openAIConfig,
          prompt: mapTemplateToGeneratePrompt[template](args),
        });
        setLoading(false);

        const result = response.data.choices[0].text;

        const value = result?.replace(/^\s+|\s+$/g, "");

        resolve(value || "");
      } catch (error) {
        setLoading(false);
        reject(error);
      }
    });
  };

  return {
    loading,
    generateResponse,
  };
};

export { useOpenAI2 };
