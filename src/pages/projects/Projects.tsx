import React from 'react';

import '../../styles/pages/projects/projects.scss';

import triangle from '../../assets/triangle.svg';
import github from '../../assets/github.svg';
let projectsContent: JSX.Element[] = [];

let projectsData = [
    {
        title: 'Units Converter',
        description:
            'VS Code extenion used to convert unit to other type like px to rem',
        tags: 'Typescript',
        link: 'item',
    },
];

projectsData.forEach((el) => {
    projectsContent.push(
        <div className='projects-item'>
            <p className='projects-item__title'>{el.title}</p>
            <p className='projects-item__description'>{el.description}</p>

            <div className='projets-item__bottom'>
                <div className='projects-item__tag-container'>
                    <div className='projects-item__tag-left'>
                        <img
                            className='projects-item__triangle'
                            src={triangle}
                            alt=''
                        />
                        <div className='projects-item__tag'>{el.tags}</div>
                    </div>

                    <img
                        className='projects-item__icon'
                        src={github}
                        alt='link to project in github'
                    />
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
