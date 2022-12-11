import {CircularProgress} from '@mui/material'
import {Feature} from '@prisma/client'
import React, {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import {useUpdateFeatureMutation} from '../../api/features/use-update-feature-mutation'
import {useNotification} from '../../context/notification.provider'
import {useTemplateConfig} from '../../lib/use-template-config'
import {TemplateType} from '../../types'

export interface TemplateProps {
    title: string,
    description: string,
    label: string,
    feature: Feature
}

const Template = () => {

    const title = 'Test Cases'
    const autogenerateFunction = () => {}
    const autogenerateLoading = false
    const generateButtonText = 'Generate Test Cases ⚡️🤖'
    const templateType: TemplateType = TemplateType.TEST_CASES
    const fieldName = 'test_cases'
    const feature: Feature = {
        id: "featureid",
        name: "name",
        description: "descr",
        projectId: "projectid",
        acceptance_criteria: "acceptance criteria",
        test_cases: "test cases",
        user_stories: "user stories",
        requirements: "requirements"
    }

    const args = {
        ...feature,
        fieldName
    }

    const [isGenerateButtonClicked, setIsGenerateButtonClicked] = useState(false)

    const {showErrorNotification, showSuccessNotification} = useNotification()

    const {isMutating, trigger} = useUpdateFeatureMutation(feature.id, {
        onSuccess: () => {
            showSuccessNotification('Feature added')
        },
        onError: () => {
            showErrorNotification('Uh oh, something went wrong. Please try again.')
        }
    })

    const {register, handleSubmit, setValue} = useForm()
 

    const {templateConfig} = useTemplateConfig()

    const {onSubmit: autoGenerateFeatureDescription} = templateConfig[templateType]


    const onGenerateButtonClick = () => {
        setIsGenerateButtonClicked(true)
        autogenerateFunction()
    }

    const onSubmit = (data: any) => {
        const args = {
            ...feature,
            ...data
        }

        console.log({args});
        
        trigger(args)
    }

    useEffect(() => {
        setValue(fieldName, feature[fieldName])
    }, [])

    /**
     * 1. get the current selected template
     * 2. check if the user aready has values for that template type
     * 3. if they do, show the values
     * 4. if they don't, then when the user clicks the generate button, we should generate the values
     * 5. the user can then save that template to thier account
     */

    return (
        <div>
            <div className='flex justify-between'>
                <h1>{title}</h1>
                <>
                    <button className={`generate-button mr-4 ${!isGenerateButtonClicked && 'generate-button-pulse'}`} onClick={onGenerateButtonClick}>{generateButtonText}</button>
                    {autogenerateLoading && <CircularProgress className='text-teal-800' size={24} />}
                </>
            </div>
            <p className='mt-4'>Click on the <b>{generateButtonText}</b> button to quickly generate {title.toLowerCase()} for this feature</p>
            <p className='mt-2'>You can also type in your own {title.toLowerCase()} or add to the auto generated response.</p>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-4'> 
                <textarea cols={30} rows={10} {...register(fieldName)} />
                <span className='flex items-center mt-4'>
                    <button type='submit' className='mr-4'>Save {title}</button>
                    {isMutating && <CircularProgress className='text-teal-800' size={24} />}
                </span>
            </form>
        </div>
    )
}

export {Template}