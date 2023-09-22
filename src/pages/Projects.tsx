import ProjectItem from "../components/ProjectItem"
import { projectList } from "../helpers/ProjectList"
import '../styles/Projects.css'

const Projects = () => {
    return (
        <div className="projects">
            <h1 className="projectsTitle">Projects</h1>
            <div className="projectsList">
                {projectList.map((project, idx) => {
                    return (
                        <ProjectItem key={idx} img={project.image} name={project.name} id={idx} />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
