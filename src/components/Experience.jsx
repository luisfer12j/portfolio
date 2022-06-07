import React from 'react';
import '../styles/Experience.css'


const Experience = () => {
    return (
        <section className='experience'>
            <div className='experience--description'>
                <div className='experience--p'>
                    <h3>Academlo</h3>
                    <p>Bootcamp de Desarrollo Web Full Stack</p>
                </div>
            </div>
            <div className='buttons--container'>
                <a href="../document/Curriculum_Luis-Sanchez.pdf" download={'../document/Curriculum_Luis-Sanchez.pdf'}>
                Dowload CV <i className="fa-solid fa-download download"></i>
                </a>
            </div>
        </section>
    );
};

export default Experience;