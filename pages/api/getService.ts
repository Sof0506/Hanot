import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} 
from "next-sanity";
import {sanityClient} 
from "../../purple-frog";
import { service } from '../../typings';
const query = groq`
*[_type == "service"]

`
type Data={
    service:service[]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const service : service[]= await sanityClient.fetch(query)
    res.status(200).json({ service })
  }
