import { GLOBAL_MAX_TOKENS, GLOBAL_TEMPERATURE } from "../constants";

export const openAIConfig = {
  model: "text-davinci-003",
  temperature: GLOBAL_TEMPERATURE,
  max_tokens: GLOBAL_MAX_TOKENS,
};
