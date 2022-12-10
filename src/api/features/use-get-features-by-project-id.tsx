import useSWR from "swr";
import {fetcher} from "../fetcher";


const useGetFeaturesByProjectId = (id: string) => {
    return useSWR(`/api/projects/${id}/features`, fetcher);
}

export {useGetFeaturesByProjectId};