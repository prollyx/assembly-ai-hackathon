import useSWRMutation from 'swr/mutation'
import {RequestDefaultArgs} from '../../types'
import {sendRequest} from '../send-request'

const useAddFeatureToProjectMuatation = (id: string,{onSuccess, onError}: RequestDefaultArgs) => {
    return useSWRMutation(`/api/projects/${id}/features`, sendRequest, {
        onSuccess: () => onSuccess?.(),
        onError: () => onError?.()
        
    })
}

export { useAddFeatureToProjectMuatation}