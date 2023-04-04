import { ProjectInfo } from "../typings";
export const fetchProjectInfo=async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjectInfo`);
    const data = await res.json();
    const projectInfo:ProjectInfo = data.projectInfo;
    return projectInfo;
}