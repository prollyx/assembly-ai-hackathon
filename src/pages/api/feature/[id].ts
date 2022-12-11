import {NextApiRequest, NextApiResponse} from "next";
import {getProjectFeatures} from "../../../api/database/features";
import {HTTPMethod} from "../../../types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === HTTPMethod.POST) {
        const body = req.body.arg

        console.log({body});
        
        res.status(200).json({body})

    } else if (req.method === HTTPMethod.GET) {
        const id = req.query.id as string;

        const projectId = req.query.projectId as string;
    
        console.log({projectId});

        const features = await getProjectFeatures(id as string);
    
        res.status(200).json(features);
    }
   
}