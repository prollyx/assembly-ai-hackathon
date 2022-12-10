import {Project} from '@prisma/client'
import React from 'react'
import {useGetAllProjects} from '../../../api/project/use-get-all-projects'
import EmptyProjectImage from '../create-new-project-page/empty-project'
import {ProjectCard} from '../project-card'
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link'

const ViewAllProjectsPage = () => {

    const {data, isLoading, error} = useGetAllProjects()

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Could not load projects</div>
    }

    let hasProjects = data && data.length > 0


    return (
        <div>
            <div className='flex justify-between'>
                <h1>Projects</h1>
                <Link href='/projects/create'>
                <button>Create project <AddIcon /></button>
                </Link>
            </div>
        <div className='main-content project-card-wrapper flex'>
            {
            hasProjects ? 
            data.map((project: Project) => <ProjectCard key={project.id} {...project}/>):   <div className=''>
            <EmptyProjectImage />
            </div>
            }
        </div>
        </div>
    )
}

export  {ViewAllProjectsPage}