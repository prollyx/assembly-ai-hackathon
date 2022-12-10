import type { NextApiRequest, NextApiResponse } from "next";
import {
  addProject,
  getAllUserProjectsFromEmail,
} from "../../../api/prisma-queries";
import { HTTPMethod } from "../../../types";
import { getSession } from "@auth0/nextjs-auth0";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession(req, res);
  console.log("session ", session);

  if (req.method === HTTPMethod.POST) {
    const data = req.body.arg;

    await addProject({
      ...data,
      user: { connect: { email: session?.user.email } },
    })
      .then((data) => res.status(200).json(data))
      .catch((e) => res.status(400).send(e.message));
  } else if (req.method === HTTPMethod.GET) {
    const projects = await getAllUserProjectsFromEmail(session?.user.email);

    res.status(200).json(projects);
  }
}
