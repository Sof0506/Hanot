import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} 
from "next-sanity";
import {sanityClient} 
from "../../purple-frog";
import {team } from '../../typings';
const query = groq`
*[_type == "team"]

`
type Data={
    team:team[]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const team : team[]= await sanityClient.fetch(query)
    res.status(200).json({ team })
  }
