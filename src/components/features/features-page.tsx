import {Feature} from '@prisma/client'
import Link from 'next/link'
import React, {FC, useState} from 'react'
import {useGetFeaturesByProjectId} from '../../api/features/use-get-features-by-project-id'
import EmptyProjectImage from '../projects/create-new-project-page/empty-project'
import {ProjectCard} from '../projects/project-card'
import AddIcon from '@mui/icons-material/Add';
import {NewFeatureForm} from './new-feature-form'
import {useProjectContext} from '../../context/project.provider'


export interface FeaturesPageProps {
    projectId: string
}

const FeaturesPage:FC<FeaturesPageProps> = ({projectId}) => {

    const [isFeatureFormVisible, setIsFeatureFormVisible] = useState(false)

    const {data, isLoading, error} = useGetFeaturesByProjectId(projectId)
    
    let hasFeatures = data && data.length > 0

    const {activeProject} = useProjectContext()

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Could not load projects</div>
    }

    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-gray-400'>Project: {activeProject?.name}</h2>
                    <h1>Features</h1>
                </div>
                <button onClick={() => setIsFeatureFormVisible(true)}>Create Feature <AddIcon /></button>
            </div>
           {isFeatureFormVisible && <NewFeatureForm projectId={projectId} onClose={() => setIsFeatureFormVisible(false)}/>}
            <div className='main-content project-card-wrapper flex'>
                {
                hasFeatures ? 
                data?.map((feature: Feature) => <ProjectCard key={feature.id} {...feature}/>):   <div className=''>
                <EmptyProjectImage />
                </div>
                }
            </div>
        </div>
    )
}

export {FeaturesPage}