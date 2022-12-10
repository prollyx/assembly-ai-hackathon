import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import type { NextApiRequest, NextApiResponse } from "next";
import {
  addFeature,
  getProjectFeatures,
} from "../../../../api/database/features";
import { HTTPMethod } from "../../../../types";

export default withApiAuthRequired(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === HTTPMethod.POST) {
    const data = req.body.arg;

    await addFeature({
      name: data.feature_name,
      description: data.description,
      project: { connect: { id: data.projectId as string } },
    })
      .then((data) => res.status(200).json(data))
      .catch((e) => res.status(400).send(e.message));
  } else if (req.method === HTTPMethod.GET) {
    const pid = req.query.projectId;
    const features = await getProjectFeatures(pid as string);

    res.status(200).json(features);
  }
});
