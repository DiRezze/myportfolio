import React from 'react';
import { projects } from '../const/projects';
import ProjectCard from './projectCard';

const ProjectList = () => {
    return(
        <section className="project-list">
            {projects.map(project => (
                <ProjectCard 
                    key={project.id}
                    title={project.name} 
                    description={project.desc}
                    imgSrc={project.img}
                    stack={project.stack}
                />
            ))}
        </section>
    )
}

export default ProjectList;
