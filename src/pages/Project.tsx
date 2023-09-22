import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/ProjectList'
import '../styles/Project.css'

const Project = () => {
    const { id } = useParams<{ id: string }>()
    if (id === undefined) {
        return (
            <div className='project'>
                <h1>Project not found!</h1>
            </div>
        )
    } else {
        const project = projectList[parseInt(id)]
        if (project === undefined) {
            return (
                <div className='project'>
                    <h1>Project not found!</h1>
                </div>
            )
        } else {
            return (
                <div className='project'>
                    <h1>{project.name}</h1>
                    <img src={project.image} alt={project.name} />
                    <p>{project.description}</p>
                </div>
            )
        }
    }
}

export default Project