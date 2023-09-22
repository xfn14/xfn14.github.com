import FFSImg from '../assets/projects/FolderFastSync.png';
import SolarSystemImg from '../assets/projects/solarsystem.png';

interface Project {
    name: string,
    description: string,
    image: string,
    link: string | null,
    github: string,
    tags: string[]
}

export const projectList: Project[] = [
    {
        name: 'Solar System Simulation',
        description: 'A simulation of the solar system using OpenGL and C++.',
        image: SolarSystemImg,
        link: null,
        github: 'https://github.com/xfn14/cg',
        tags: ['C++', 'OpenGL']
    },
    {
        name: 'Folder Fast Sync',
        description: 'A program that syncs two folders using Java.',
        image: FFSImg,
        link: null,
        github: 'https://github.com/xfn14/ffs',
        tags: ['Java']
    },
]