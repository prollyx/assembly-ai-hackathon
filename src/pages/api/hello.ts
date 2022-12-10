// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, User } from "@prisma/client";

type Data = {
  name: string;
};

const prisma = new PrismaClient();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[] | Data>
) {
  async function main() {
    // Connect the client
    await prisma.$connect();
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
