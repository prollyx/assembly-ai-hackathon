
import type { NextApiRequest, NextApiResponse } from "next";
import {addProject, getAllProjects} from "../../../api/prisma";
import {HTTPMethod} from "../../../types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === HTTPMethod.POST) {
      const data = req.body.arg  

      await addProject({ ...data, user: {connect: {id: "6393ec8624e6d523b5e67d7e"}}})
      .then(data =>res.status(200).json(data))
      .catch(e => res.status(400).send(e.message))
      
    } else if (req.method === HTTPMethod.GET) {
      const projects = await getAllProjects()

      res.status(200).json(projects)
    }
  }