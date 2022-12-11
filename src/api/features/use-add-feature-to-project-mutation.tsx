import useSWRMutation from 'swr/mutation'
import {RequestDefaultArgs} from '../../types'
import {sendRequest} from '../send-request'

const useAddFeatureToProjectMuatation = (id: string,{onSuccess, onError}: RequestDefaultArgs) => {
    return useSWRMutation(`/api/feature`, sendRequest, {
        onSuccess: () => onSuccess?.(),
        onError: (e) => onError?.(e)
        
    })
}

export { useAddFeatureToProjectMuatation}