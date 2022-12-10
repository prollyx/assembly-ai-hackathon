import { User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getAllUsers } from "../../api/get-all-users";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[] | Data>
) {
  const users = await getAllUsers();

  res.status(200).json(users);
}
