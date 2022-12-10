export interface GenerateTestCasesArgs {
  name: string;
  description: string;
  requirements: string;
}

export interface GenerateRequirementsArgs {
  name: string;
  description: string;
}

export interface GenerateFeatureDescription {
  project_name: string;
  project_description: string;
  feature_name: string;
}

export interface GenerateUserStories {
  project_name: string;
  project_description: string;
  feature_name: string;
  feature_description: string;
}

export const generateTestCasePrompt = (args: GenerateTestCasesArgs) => {
  const { name, description, requirements } = args;

  return `
    Feature: ${name}
    Description: ${description}
    Requirements: ${requirements}

    Given the above information, create a list of test cases that you would use to test this feature. The result should start with "Verify that when ".
    `;
};

export const generateFeatureDescription = (
  args: GenerateFeatureDescription
) => {
  const { project_name, project_description, feature_name } = args;

  return `
    Project name: ${project_name}
    Project description: ${project_description}
    Feature name: ${feature_name}

    Given the above information, create a description for the above feature.
    `;
};

export const generateUserStories = (args: GenerateUserStories) => {
  const {
    project_name,
    project_description,
    feature_name,
    feature_description,
  } = args;

  return `
    Project name: ${project_name}
    Project description: ${project_description}
    Feature name: ${feature_name}
    Feature Description: ${feature_description}

    Given the above information, create a list of possible user stories for this feature using Gerkin format".
    `;
};

export const generateHappyPathPrompt = (args: GenerateTestCasesArgs) => {
  const { name, description, requirements } = args;

  return `
      Feature: ${name}
      Description: ${description}
      Requirements: ${requirements}

      Given the above information, create a list of happy paths for this feature.
      `;
};

export const generateSadPathPrompt = (args: GenerateTestCasesArgs) => {
  const { name, description, requirements } = args;

  return `
      Feature: ${name}
      Description: ${description}
      Requirements: ${requirements}

      Given the above information, create a list of sad path test cases for this feature.
      `;
};

export const generateRequirementPrompt = (args: GenerateRequirementsArgs) => {
  const { name, description } = args;

  return `
      Feature: ${name}
      Description: ${description}

      Given the above information, create a list of requirements for this feature.
      `;
};

export const generateAcceptanceCriteriaBDD = (args: GenerateUserStories) => {
  const {
    project_name,
    project_description,
    feature_name,
    feature_description,
  } = args;

  return `
    Project name: ${project_name}
    Project description: ${project_description}
    Feature name: ${feature_name}
    Feature Description: ${feature_description}

      Given the feature description,  create a list of all acceptance criteria scenarios using Gerkin format.
      `;
};

export const generateAcceptanceCriteriaRule = (args: GenerateTestCasesArgs) => {
  const { name, description, requirements } = args;

  return `
      Feature: ${name}
      Description: ${description}
      Requirements: ${requirements}


      Given the above information,  create all acceptance criteria scenarios for this using Rule-Oriented format.
      `;
};
