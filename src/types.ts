export interface ProjectInput {
  name: string;
  description: string;
  userId: string;
}

export enum HTTPMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  TRACE = "TRACE",
  CONNECT = "CONNECT",
}

export interface RequestDefaultArgs {
  onSuccess?: VoidFunction;
  onError?: VoidFunction;
}

export enum TemplateType {
  TEST_CASES = "TEST_CASES",
  HAPPY_PATH = "HAPPY_PATH",
  SAD_PATH = "SAD_PATH",
  REQUIREMENTS = "REQUIREMENTS",
  USER_STORIES = "USER_STORIES",
  ACCEPTANCE_CRITERIA = "ACCEPTANCE_CRITERIA",
  // RULE_TYPE_ACCEPTANCE_CRITERIA = "RULE_TYPE_ACCEPTANCE_CRITERIA",
}
