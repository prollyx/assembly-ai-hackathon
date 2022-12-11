import useSWR from "swr";
import {fetcher} from "../fetcher";


const useGetFeaturesByProjectId = (id: string) => {
    return useSWR(`/api/feature/${id}`, fetcher);
}

export {useGetFeaturesByProjectId};