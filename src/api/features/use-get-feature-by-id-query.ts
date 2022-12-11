import useSWR from "swr";
import {fetcher} from "../fetcher";


const useGetFeatureById = (id: string) => {
    const {data, isLoading, error} =  useSWR(`/api/feature/${id}`, fetcher);
    
    return {
        data, isLoading, error
    }
}

export {useGetFeatureById};