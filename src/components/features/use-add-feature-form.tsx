import {useForm} from "react-hook-form"
import {useAddFeatureToProjectMuatation} from "../../api/features/use-add-feature-to-project-mutation"
import {useNotification} from "../../context/notification.provider"

export interface AddFeatureToProjectFormArgs {
    projectId: string,
    projectName?: string,
    projectDescription?: string,
    onClose?: VoidFunction
}

const useAddFeatureToProjectForm = (args: AddFeatureToProjectFormArgs) => {

    const {projectId} = args

    const {handleSubmit, register, reset} = useForm()
    const {showErrorNotification, showSuccessNotification} = useNotification()


    const {trigger, isMutating } = useAddFeatureToProjectMuatation(args.projectId, {
        onSuccess: () => {
            showSuccessNotification('Feature added')
            reset()
            args?.onClose?.()
        },
        onError: () => {
            showErrorNotification('There was an error creating this feature. Please try again.')
        }
    })

    const onSubmit = handleSubmit((data: any) => {    
            const body = {
                ...data,
                projectId
            }
            
            trigger(body)
        }
    )


    const generateFeatureDescription = () => {
        //TODO: generate feature description
        alert("Still needs to be implemented")
    }

    return {
        onSubmit,
        register,
        isMutating,
        generateFeatureDescription
    }


}

export {useAddFeatureToProjectForm}