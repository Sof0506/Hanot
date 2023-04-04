import { team } from "@/typings";
export const fetchTeam=async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTeam`);
    const data = await res.json();
    const team:team = data.team;
    return team;
}