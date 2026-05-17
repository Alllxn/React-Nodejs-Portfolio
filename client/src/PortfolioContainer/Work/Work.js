import React from 'react';
import './Work.css';
import Projects from './Projects/Projects';
import myData from './Projects/Projects.json';
import { useLanguage } from '../../context/LanguageContext';

export default function Work(){
    const { t } = useLanguage();

    const project = myData.Projects.map(function(object, i){
        const locale = t.work.projects[i];
        return(
            <Projects project={{
                ...object,
                Name: locale.name,
                Description: locale.description,
                Notes: locale.notes,
            }} key={i}/>
        );
    });

    return(
        <section id="work-container" className='component'>
            {/* TODO: añadir proyectos de AYESA */}
            <h2 className='magic-background-underline load-animation-element'>{t.work.title}</h2>
            <ol id="work-wrap">
                {project}
            </ol>
        </section>
    );
};