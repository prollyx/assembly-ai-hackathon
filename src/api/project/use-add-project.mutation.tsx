import useSWRMutation from 'swr/mutation'
import {RequestDefaultArgs} from '../../types'
import {sendRequest} from '../send-request'

const useAddProjectMutation = ({onSuccess, onError}: RequestDefaultArgs) => {
    return useSWRMutation('/api/projects', sendRequest, {
        onSuccess: () => onSuccess?.(),
        onError: (err) => onError?.(err),
        throwOnError: false
    })
}

export { useAddProjectMutation}