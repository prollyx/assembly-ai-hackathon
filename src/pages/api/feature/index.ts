
import type { NextApiRequest, NextApiResponse } from "next";
import {addFeature, getProjectFeatures} from "../../../api/database/features";
import {HTTPMethod} from "../../../types";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === HTTPMethod.POST) {
      console.log("req.body", req.body);
      
      const data = req.body.arg 

      console.log({data});
      

      await addFeature({ name: data.feature_name, description: data.description, project: {connect: {id: data.projectId as string}}})
      .then(data =>res.status(200).json(data))
      .catch(e => res.status(400).send(e.message))

     
    }
  }