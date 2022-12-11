import Link from 'next/link'
import React, {FC} from 'react'

export interface ProjectCardProps {
    name: string,
    description: string,
    id: string,
    onClick?: VoidFunction,
    ignoreLink?: boolean
}

const ProjectCard: FC<ProjectCardProps> = ({ description, id, name, onClick, ignoreLink}) => {


    if (ignoreLink)  {
        return (
            <div className='project-card' onClick={onClick}>
                <h2 className='mb-2'>{name}</h2>
                <p className='project-card-description'>{description}</p>
            </div>
        )
    }

    return (
        <Link href={`/projects/${id}`}>
            <div className='project-card' onClick={onClick}>
                <h2 className='mb-2'>{name}</h2>
                <p className='project-card-description'>{description}</p>
            </div>
        </Link>
    )
}

export {ProjectCard}