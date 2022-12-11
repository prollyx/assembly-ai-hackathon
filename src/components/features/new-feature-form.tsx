import React, {FC} from 'react'
import {useProjectContext} from '../../context/project.provider';
import {GenericAIResponseArgs} from '../../lib/use-open-ai';
import {useTemplateConfig} from '../../lib/use-template-config';
import {FormField} from '../shared/form-field';
import {useAddFeatureToProjectForm} from './use-add-feature-form';

export interface NewFeatureFormProps {
    onClose: VoidFunction
    projectId: string,
    projectName?: string,
    projectDescription?: string
}


const NewFeatureForm:FC<NewFeatureFormProps> = ({onClose,projectId, projectName, projectDescription}) => {

    const {onSubmit, register, isMutating, watch, setValue} = useAddFeatureToProjectForm({projectId, projectName, projectDescription, onClose, })

    const {templateConfig} = useTemplateConfig()

    const {onSubmit: autoGenerateFeatureDescription} = templateConfig['FEATURE_DESCRIPTION']

    const {activeProject} = useProjectContext() 

    return (
        <div className='my-4'>
        <p className='my-4'>Please try and be as detailed as you possibly can. The more information that is provided the better the results will be.</p>
        <div>
            <form onSubmit={onSubmit}>
                <FormField label='Feature Name' register={register('feature_name', {required: true})}/>
                <FormField label='Feature Description' register={register('description', {required: true})} autogenerateFunction={() => {
                    const args: GenericAIResponseArgs = {
                        project: activeProject,
                        feature: {
                            name: watch('feature_name'),
                            description: watch('description'),
                            id: "",
                            acceptance_criteria: null,
                            requirements: null,
                            projectId: activeProject.id,
                            test_cases: null,
                            user_stories: null
                        }
                    }
                    console.log({args});
                    
                    autoGenerateFeatureDescription(args).then((data) =>setValue('description', data)
                    )
                }} autogenerateLoading={false} multiline/>
                <span className='flex items-center justify-between'>
                    <div>
                        <button type='submit' className='mr-4 '>{isMutating ? "Creating Feature... ⏱": "Create Feature 🥳"}</button>                                          
                    </div>
                    <div>
                        <button className='bg-gray-300 text-red-700' onClick={onClose}>Cancel</button>
                    </div>
                </span>
            </form>
        </div>
        </div>
    )
}

export  {NewFeatureForm}