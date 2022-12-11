import {
  generateHappyPathPrompt,
  generateRequirementPrompt,
  generateSadPathPrompt,
  generateTestCasePrompt,
  generateUserStories,
  generateAcceptanceCriteriaBDD,
  generateFeatureDescription,
  generateEdgeCases,
} from "./lib/prompts/generate-completions-prompt";
import { TemplateType } from "./types";

export const MaxExternalUserSubmissions = 1;
export const GLOBAL_TEMPERATURE = 0.3;
export const GLOBAL_MAX_TOKENS = 2600;

export const AutoFillGeneralFieldValues: any = {
  name: "Add Contact to phone book",
  description: `From the main dashboard page, the user clicks the "Add contact" button and it taken to the "add contact" page.  There are 3 fields in the form; first and last name, email and phone number. When the user fills out all the required fields and clicks the "Add contact" button, the "Enter confirmation code" modal shows up on the screen and then the user is then sent an email with a confirmation code. After the user enters the confirmation code correctly the new contact is then added to their phone book.`,
  requirements: `- First and phone number are required fields.\n- Confirmation code only last 5 mins.\n- User can only enter confirmation code 3 times.
  `,
};

export const AutoFillAcceptanceCriteria: any = {
  project_name: " Contact Book",
  project_description: ``,
  feature_name: `Add contact to addressbook`,
  feature_description: `Verify that when the user enters valid data in all the required fields and clicks the "Add contact" button, the "Enter confirmation code" modal shows up on the screen. 
  A confirmation code will be sent to the user's email address. 
  If the confirmation code is valid the contact will be added to the user's address book.`,
};

export const AutoFillRequirementsFieldValues: any = {
  name: "Login",
  description: "As a user I want to login So that I can view products",
};

export const mapTemplateToGeneratePrompt: Record<string, any> = {
  [TemplateType.TEST_CASES]: generateTestCasePrompt,
  [TemplateType.HAPPY_PATH]: generateHappyPathPrompt,
  [TemplateType.USER_STORIES]: generateUserStories,
  [TemplateType.SAD_PATH]: generateSadPathPrompt,
  [TemplateType.REQUIREMENTS]: generateRequirementPrompt,
  [TemplateType.ACCEPTANCE_CRITERIA]: generateAcceptanceCriteriaBDD,
  [TemplateType.FEATURE_DESCRIPTION]: generateFeatureDescription,
  [TemplateType.EDGE_CASES]: generateEdgeCases,
};
