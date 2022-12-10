// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, User } from "@prisma/client";

type Data = {
  name: string;
};

export default function handler(res: NextApiResponse<User[] | Data>) {
  const prisma = new PrismaClient();

  async function main() {
    // Connect the client
    await prisma.$connect();
    // ... you will write your Prisma Client queries here

    await prisma.user.create({
      data: {
        firstname: "John",
        lastname: "Doe 3",
        email: "John3@gmail.com",
      },
    });
  }

  main()
    .then(async () => {
      const allUsers = await prisma.user.findMany();
      res.status(200).json(allUsers);

      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      res.status(401).json({ name: "Internal Server Error" });
      process.exit(1);
    });
}
