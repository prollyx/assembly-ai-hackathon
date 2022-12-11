import useSWR from "swr";
import {fetcher} from "../fetcher";


const useGetAllProjects = () => {
    const {data, isLoading, error} =  useSWR("/api/projects/", fetcher);

    console.log({data});
    

    return {
        data, isLoading, error
    }
}

export {useGetAllProjects};