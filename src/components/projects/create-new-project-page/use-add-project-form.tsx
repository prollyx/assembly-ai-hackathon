import {useRouter} from "next/router"
import {useForm} from "react-hook-form"
import {useAddProjectMutation} from "../../../api/project/use-add-project.mutation"
import {useNotification} from "../../../context/notification.provider"

const useAddProjectForm = () => {
    const {handleSubmit, register, reset} = useForm()
    const {showErrorNotification, showSuccessNotification} = useNotification()
    const {push}  = useRouter()


    const {trigger, isMutating, error } = useAddProjectMutation({
        onSuccess: () => {
            showSuccessNotification('Project created successfully')
            reset()
            push('/projects')
        },
        onError: (e) => {        
            showErrorNotification(e.message)
        }
    })

    const onSubmit = handleSubmit((data: any) => {       
        trigger(data)
    }
)
    return {
        onSubmit,
        register,
        isMutating,
        error
    }


}

export {useAddProjectForm}