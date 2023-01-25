import React from 'react';

import '../../styles/pages/projects/projects.scss';

let projectsContent: JSX.Element[] = [];

let projectsData = [
    {
        title: 'Units Converter',
        description:
            'VS Code extenion used to convert unit to other type like px to rem',
        tags: 'Typescript',
        link: '',
    },
];

projectsData.forEach((el) => {
    projectsContent.push(
        <div className='projects-item'>
            <p className='projects-item__title'>{el.title}</p>
            <p className='projects-item__description'>{el.description}</p>
            <div className='projets-item__bottom'>
                <div className='projects-item__tag-container'>
                    <div className='projects-item__tag'>{el.tags}</div>
                </div>
            </div>
        </div>
    );
});

function Projects() {
    return (
        <div className='projects'>
            <h2>Projects</h2>

            <div className='projects__container'>{projectsContent}</div>
        </div>
    );
}

export default Projects;
