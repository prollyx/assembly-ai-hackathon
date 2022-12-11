import {Feature} from '@prisma/client'
import useSWRMutation from 'swr/mutation'
import {RequestDefaultArgs} from '../../types'
import {sendRequest} from '../send-request'

const useUpdateFeatureMutation = (featureId: string,{onSuccess, onError}: RequestDefaultArgs) => {
    return useSWRMutation(`/api/feature/${featureId}`, sendRequest, {
        onSuccess: () => onSuccess?.(),
        onError: (e) => onError?.(e),
        throwOnError: false
    })
}

export { useUpdateFeatureMutation }