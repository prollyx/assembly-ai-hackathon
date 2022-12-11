import {NextApiRequest, NextApiResponse} from "next";
import {getProjectFeatures, updateFeature} from "../../../api/database/features";
import {HTTPMethod} from "../../../types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === HTTPMethod.POST) {
        const body = req.body.arg   
        
        const featureId = body.id

        const args = body
        delete args.id
    
        console.log({args});

        await updateFeature(featureId, body)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).send(error))

    } else if (req.method === HTTPMethod.GET) {
        const id = req.query.id as string;

        const projectId = req.query.projectId as string;
    
        console.log({projectId});

        const features = await getProjectFeatures(id as string);
    
        res.status(200).json(features);
    }
   
}