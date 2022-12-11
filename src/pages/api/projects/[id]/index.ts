import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { getProjectById } from "../../../../api/database/projects";
import { HTTPMethod } from "../../../../types";

export default withApiAuthRequired(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === HTTPMethod.GET) {
    const { id } = req.query;

    console.log({ id });

    await getProjectById(id as string)
      .then((result) => res.status(200).json(result))
      .catch((e) => res.status(400).send(e.message));
  }
});
