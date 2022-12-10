import React, {FC} from 'react'
import {FormField} from '../shared/form-field';
import {useAddFeatureToProjectForm} from './use-add-feature-form';

export interface NewFeatureFormProps {
    onClose: VoidFunction
    projectId: string,
    projectName?: string,
    projectDescription?: string
}


const NewFeatureForm:FC<NewFeatureFormProps> = ({onClose,projectId, projectName, projectDescription}) => {

    const {onSubmit, register, isMutating} = useAddFeatureToProjectForm({projectId, projectName, projectDescription, onClose })

    return (
        <div className='my-4'>
        <p className='my-4'>Please try and be as detailed as you possibly can. The more information that is provided the better the results will be.</p>
        <div>
            <form onSubmit={onSubmit}>
                <FormField label='Feature Name' register={register('name', {required: true})}/>
                <FormField label='Feature Description' register={register('description', {required: true})} multiline/>
                <span className='flex items-center justify-between'>
                    <div>
                        <button type='submit' className='mr-4 '>{isMutating ? "Creating Feature... ⏱": "Create Feature 🥳"}</button>                        
                        <button className='mr-4' onClick={() => alert("Still needs to be implemented")}>Generate feature description ⚡️🤖</button>                      
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