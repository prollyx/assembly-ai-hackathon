import useSWRMutation from 'swr/mutation'
import {} from '../../types'
import {sendRequest} from '../send-request'

const useAddProject = () => {
    return  useSWRMutation('/api/projects', sendRequest)
}

export { useAddProject}