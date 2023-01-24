import React from 'react';

let projectsContent: JSX.Element[] = [];

let projectsData = [
    {
        title: 'Units Converter',
        description: 'desc',
        tags: 'Typescript',
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
    return <div className='projects'>{projectsContent}</div>;
}

export default Projects;
