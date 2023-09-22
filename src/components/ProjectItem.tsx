import { useNavigate } from "react-router-dom";

const ProjectItem = ({ img, name, id }: { img: string; name: string; id: number }) => {
    const navigate = useNavigate();

    return (
        <div className="projectItem" onClick={() => {navigate("/projects/" + id);}}>
            <div className="backgroundImage" style={{backgroundImage: `url(${img})`}}></div>
            <h1>{name}</h1>
        </div>
    )
}

export default ProjectItem