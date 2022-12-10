import React from 'react'
import {useGetAllProjects} from '../../../api/project/use-get-all-projects'

const ViewAllProjectsPage = () => {

    const {data} = useGetAllProjects()

    return (
        <div>
        <h1>View All Projects Page</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export  {ViewAllProjectsPage}