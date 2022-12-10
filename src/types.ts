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
  CONNECT = "CONNECT"
}

export interface RequestDefaultArgs {
  onSuccess?: VoidFunction,
  onError?: VoidFunction,
}
