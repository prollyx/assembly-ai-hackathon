import {useState} from "react";
import useSWR from "swr";
import {fetcher} from "../fetcher";


const useGetProjectById = (id: string) => {
    const [isReady, setIsReady] = useState(false);

    const fetch = () => {
        setIsReady(true);
    }

    const result =  useSWR(`/api/projects/${id}`, fetcher, {suspense: true});

    return {
        ...result,
        fetch
    }
}

export {useGetProjectById};