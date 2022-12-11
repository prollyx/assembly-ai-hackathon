import { GenericAIResponseArgs } from "../use-open-ai";

const promptTemplate = (args: GenericAIResponseArgs) => {
  const { feature, project } = args;

  return `Project: ${project?.name}
  Project description: ${project?.description}
  Feature: ${feature?.name}
  Description: ${feature?.description}
  ${feature?.requirements ? `Requirements: ${feature?.requirements}` : ""}
  ${
    feature?.acceptance_criteria
      ? `Acceptance Criteria: ${feature?.acceptance_criteria}`
      : ""
  }
  ${feature?.user_stories ? `User Stories: ${feature?.user_stories}` : ""} 
  `;
};

export const generateTestCasePrompt = (args: GenericAIResponseArgs) => {
  return `
    ${promptTemplate(args)}

    Given the above information, create a list of all the test cases that that would be used to test this feature. The result should start with "Verify that when".
    `;
};

export const generateFeatureDescription = (args: GenericAIResponseArgs) => {
  const { feature, project } = args;

  return `
    ${promptTemplate(args)}

    Given the above information, create a description for the above feature.
    `;
};

export const generateUserStories = (args: GenericAIResponseArgs) => {
  const { feature, project } = args;

  return `
  ${promptTemplate(args)}

    Given the above information, create a list of possible user stories for this feature using Gerkin format".
    `;
};

export const generateHappyPathPrompt = (args: GenericAIResponseArgs) => {
  return `
    ${promptTemplate(args)}

      Given the above information, create a list of happy paths for this feature.
      `;
};

export const generateSadPathPrompt = (args: GenericAIResponseArgs) => {
  return `
      ${promptTemplate(args)}

      Given the above information, create a list of sad path test cases for this feature.
      `;
};

export const generateRequirementPrompt = (args: GenericAIResponseArgs) => {
  return `
      ${promptTemplate(args)}

      Given the above information, create a detailed list of requirements for this feature.
      `;
};

export const generateAcceptanceCriteriaBDD = (args: GenericAIResponseArgs) => {
  return `
      ${promptTemplate(args)}

      Given the feature description, create a list of all acceptance criteria scenarios using Gerkin format.
      `;
};

export const generateAcceptanceCriteriaRule = (args: GenericAIResponseArgs) => {
  return `
    ${promptTemplate(args)}

      Given the above information, create all the possible acceptance criteria scenarios for this using Rule-Oriented format.
      `;
};

export const generateEdgeCases = (args: GenericAIResponseArgs) => {
  return `
      ${promptTemplate(args)}
  
        Given the above information, create all the possible edge cases for this feature.
        `;
};
