import React from 'react'
import {useForm} from 'react-hook-form'
import {FormField} from '../../shared/form-field';
import {useAddProject} from '../../../api/project/use-add-project';
import {useNotification} from '../../../context/notification.provider';


const CreateProject = () => {

    const {handleSubmit, register} = useForm()

    const {showSuccessNotification} = useNotification()

    const {trigger} = useAddProject()

    const onSubmit = (data: any) => {       
        trigger(data)
    }

    return (
        <div>
        <h1>Create a new project</h1>
        <p className='mt-4'>Please try and be as detailed as you possibly can. The more information that is provided the better the results will be.</p>
        <div className='main-content'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormField label='Project Name' register={register('name')}/>
                <FormField label='Project Description' register={register('description')} multiline/>
                <button type='submit'>Create project 🥳</button>
                <button onClick={() => showSuccessNotification("Testingh 1,2,3")}>Show Success</button>
            </form>
        </div>
        </div>
    )
}

export  {CreateProject}