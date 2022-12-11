import { Feature, Project, Responses, User, Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";

export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();

    return users;
  } catch (e) {
    console.log(e);

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

/** get user */
export async function getUserFromEmail(email?: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: { email: email },
    });

    return user;
  } catch (e) {
    throw new Error("user not found");
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
