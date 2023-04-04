import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from "next-sanity";
import {sanityClient} from "../../purple-frog";
import { ProjectInfo} from '../../typings';
const query = groq`
*[_type == "projectInfo"]
`;
type Data={
  projectInfo:ProjectInfo;
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const projectInfo : ProjectInfo = await sanityClient.fetch(query)
    res.status(200).json({ projectInfo })
  }
