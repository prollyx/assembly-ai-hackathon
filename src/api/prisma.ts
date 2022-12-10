import {
  Feature,
  Prisma,
  PrismaClient,
  Project,
  Responses,
  User,
} from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();

    return users;
  } catch (e) {
    throw new Error("e");
  }
};

/** add user */
export async function addUser(
  userInput: Prisma.UserCreateInput
): Promise<User> {
  try {
    const user = await prisma.user.create({ data: userInput });

    return user;
  } catch (e) {
    throw new Error("e");
  }
}
/** get user */
export async function getUser(userId: string): Promise<User> {
  try {
    const user = await prisma.user.findUniqueOrThrow({ where: { id: userId } });

    return user;
  } catch (e) {
    throw new Error("user not found");
  }
}

/** add Project */
export async function addProject(
  input: Prisma.ProjectCreateInput
): Promise<Project> {
  try {
    const project = await prisma.project.create({ data: input });

    return project;
  } catch (e) {
    throw new Error("projects not found");
  }
}

/** update Project */
export async function updateProject(
  input: Prisma.ProjectCreateInput
): Promise<Project> {
  try {
    const project = await prisma.project.update({
      where: { id: input.id },
      data: input,
    });

    return project;
  } catch (e) {
    throw new Error("project not updated");
  }
}

/** delete Project */
export async function deleteProject(
  input: Prisma.ProjectCreateInput
): Promise<Project> {
  try {
    const project = await prisma.project.delete({
      where: { id: input.id },
    });

    return project;
  } catch (e) {
    throw new Error("project not deleted");
  }
}

/** Get all user projects */
export async function getAllUserProjects(userId: string): Promise<Project[]> {
  try {
    const projects = await prisma.project.findMany({ where: { id: userId } });

    return projects;
  } catch (e) {
    throw new Error("projects not found");
  }
}

/** get project features */
export async function addFeature(
  input: Prisma.FeatureCreateInput
): Promise<Feature> {
  try {
    const feature = await prisma.feature.create({
      data: input,
    });

    return feature;
  } catch (e) {
    throw new Error("feature not added");
  }
}

export async function updateFeature(
  input: Prisma.FeatureCreateInput
): Promise<Feature> {
  try {
    const feature = await prisma.feature.update({
      where: { id: input.id },
      data: input,
    });

    return feature;
  } catch (e) {
    throw new Error("feature not updated");
  }
}

export async function deleteFeature(
  input: Prisma.FeatureCreateInput
): Promise<Feature> {
  try {
    const feature = await prisma.feature.delete({
      where: { id: input.id },
    });

    return feature;
  } catch (e) {
    throw new Error("feature not deleted");
  }
}

/** get project features */
export async function getProjectFeatures(
  projectId: string
): Promise<Feature[]> {
  try {
    const project = await prisma.feature.findMany({
      where: { projectId: projectId },
    });

    return project;
  } catch (e) {
    throw new Error("projects not found");
  }
}

export async function addResponse(
  input: Prisma.ResponsesCreateInput
): Promise<Responses> {
  try {
    const response = await prisma.responses.create({
      data: input,
    });

    return response;
  } catch (e) {
    throw new Error("response not added");
  }
}
