import Link from 'next/link'
import React, {FC} from 'react'

export interface ProjectCardProps {
    name: string,
    description: string,
    id: string,
}

const ProjectCard: FC<ProjectCardProps> = ({ description, id, name}) => {
    return (
        <Link href={`/projects/${id}`}>
        <div className='project-card'>
            <h2 className='mb-2'>{name}</h2>
            <p className='project-card-description'>{description}</p>
        </div>
        </Link>
    )
}

export {ProjectCard}