import type { NextApiRequest, NextApiResponse } from "next";

import { HTTPMethod } from "../../../types";
import { getSession } from "@auth0/nextjs-auth0";
import {addProject, getAllUserProjectsFromEmail} from "../../../api/database/projects";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession(req, res);

  if (req.method === HTTPMethod.POST) {
    const data = req.body.arg;

    try {
      const project = await addProject(data);
      res.status(200).json(project);
    } catch (error: any) {
      res.status(400).send(error);
    }

    // await addProject({
    //   ...data,
    //   user: { connect: { email: session?.user.email } },
    // })
    //   .then((data) => res.status(200).json(data))
    //   .catch((error) => {
    //    res.status(400).send(error)
    //   });
  } else if (req.method === HTTPMethod.GET) {
    const projects = await getAllUserProjectsFromEmail(session?.user.email);

    res.status(200).json(projects);
  }
}
