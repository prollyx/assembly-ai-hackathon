import {useForm} from "react-hook-form"
import {useAddProjectMutation} from "../../../api/project/use-add-project.mutation"
import {useNotification} from "../../../context/notification.provider"

const useAddProjectForm = () => {
    const {handleSubmit, register, reset} = useForm()
    const {showErrorNotification, showSuccessNotification} = useNotification()


    const {trigger, isMutating } = useAddProjectMutation({
        onSuccess: () => {
            showSuccessNotification('Project created successfully')
            reset()
            //TODO: redirect to project page
        },
        onError: () => {
            showErrorNotification('There was an error creating your project. Please try again.')
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
    }


}

export {useAddProjectForm}