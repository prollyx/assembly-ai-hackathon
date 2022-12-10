import useSWR from "swr";
import {fetcher} from "../fetcher";


const useGetAllProjects = () => {
    return useSWR("/api/projects", fetcher);
}

export {useGetAllProjects};