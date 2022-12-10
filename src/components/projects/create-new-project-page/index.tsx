import {CircularProgress} from '@mui/material';
import React from 'react'
import {FormField} from '../../shared/form-field';
import {useAddProjectForm} from './use-add-project-form';


const CreateProject = () => {

    const {onSubmit, register, isMutating} = useAddProjectForm()

    return (
        <div>
        <h1>Create a new project</h1>
        <p className='mt-4'>Please try and be as detailed as you possibly can. The more information that is provided the better the results will be.</p>
        <div className='main-content'>
            <form onSubmit={onSubmit}>
                <FormField label='Project Name' register={register('name', {required: true})}/>
                <FormField label='Project Description' register={register('description', {required: true})} multiline/>
                <span className='flex items-center'>
                <button type='submit' className='mr-4 '>Create project 🥳</button>
                {isMutating && <CircularProgress className='text-teal-800' size={24} />}
                </span>
            </form>
        </div>
        </div>
    )
}

export  {CreateProject}