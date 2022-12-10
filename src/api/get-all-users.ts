import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();

    return users;
  } catch (e) {
    throw new Error("e");
  }
};
