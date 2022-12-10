import { Project, Prisma, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

/** add Project */
export async function addProject(
    input: Prisma.ProjectCreateInput
  ): Promise<Project> {
    return new Promise(async (resolve, reject) => {
      await prisma.project
        .create({ data: input })
        .then((data) => resolve(data))
        .catch((error) => {
               reject(error)
        });
    })
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
  
  /** Get all user projects */
  export async function getAllUserProjectsFromEmail(
    email: string,
  ): Promise<Project[]> {
    try {
      const projects = await prisma.project.findMany({
        where: { user: { email: email } },
      });
  
      return projects;
    } catch (e) {
      throw new Error("projects not found");
    }
  }

  export async function getProjectById(
    id: string,
  ): Promise<Project> {
    try {
      const project = await prisma.project.findFirstOrThrow({
        where: {id},
      });
  
      return project;
    } catch (e) {
      throw new Error("projects not found");
    }
  }

