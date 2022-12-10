import React, {FC} from 'react'

export interface ProjectCardProps {
    name: string,
    description: string,
    id: string,
}

const ProjectCard: FC<ProjectCardProps> = ({ description, id, name}) => {
    return (
        <div className='project-card'>
            <h2 className='mb-2'>{name}</h2>
            <p>{description}</p>
        </div>
    )
}

export {ProjectCard}