import React from 'react';
import { useState } from 'react';
import '../styles/Main.css'

const Main = () => {
    const [isVisible, setIsVisible] = useState(true);


    return (
        <section className='main'>
            <div className='main-buttons--container'>
                <button className={`background ${isVisible?'':'checked'}`} onClick={()=>setIsVisible(true)}>Projects</button>
                <button className={`background ${isVisible?'checked':''}`} onClick={()=>setIsVisible(false)}>Skills</button>
            </div>
            {
            isVisible ?
                <section className='projects'>
                    <div className='projects--container'>
                        <ul className='projects--list'>
                            <li className='project--card'>
                                <img src="https://indiehoy.com/wp-content/uploads/2018/08/rick-and-morty.jpg" alt="" />
                                <div className='hover'>
                                    <p>Web</p>
                                    <h2>Rick and Morthy Wiki</h2>
                                    <a className='icon--container' href='https://rick-and-morty-simple.netlify.app'><i className="fa-solid fa-link"></i></a>
                                </div>
                            </li>
                            <li className='project--card'>
                                <img src="https://www.howtogeek.com/wp-content/uploads/2016/02/img_56d0640e108ff.png?width=1198&trim=1,1&bg-color=000&pad=1,1" alt="" />
                                <div className='hover'>
                                    <p>Web</p>
                                    <h2>Weather App</h2>
                                    <a className='icon--container' href='https://flamboyant-meninsky-f1a9a6.netlify.app'><i className="fa-solid fa-link"></i></a>
                                </div>
                            </li>
                            <li className='project--card'>
                                <img src="https://home.pokemon.com/assets/img/screens/es/p06_01.jpg" alt="" />
                                <div className='hover'>
                                    <p>Web </p>
                                    <h2>Pokedex(comming soon...)</h2>
                                    <a className='icon--container' href=''><i className="fa-solid fa-link"></i></a>
                                </div>
                            </li>
                            <li className='project--card'>
                                <img src="https://recursosmarketing.net/wp-content/uploads/2020/07/recursos-de-marketing-para-tiendas-online.jpg" alt="" />
                                <div className='hover'>
                                    <p>Web </p>
                                    <h2>e-commerce</h2>
                                    <a className='icon--container' href='https://ecommerce-mf.netlify.app/'><i className="fa-solid fa-link"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            :
                <section className='skills'>
                    <div className='skills--container'>
                        <div className='skills-front'>
                            <h2 className='margin'>Frontend Developer</h2>
                            <div className='skills-front--description'>
                                <i className="fa-solid fa-circle-check"></i>
                                <div>
                                    <h3>HTML</h3>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                            <div className='skills-front--description'>
                                <i className="fa-solid fa-circle-check"></i>
                                <div>
                                    <h3>CSS</h3>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                            <div className='skills-front--description'>
                                <i className="fa-solid fa-circle-check"></i>
                                <div>
                                    <h3>JavaScript</h3>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                            <div className='skills-front--description'>
                                <i className="fa-solid fa-circle-check"></i>
                                <div>
                                    <h3>React JS</h3>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                            <div className='skills-front--description'>
                                <i className="fa-solid fa-circle-check"></i>
                                <div>
                                    <h3>Git</h3>
                                    <p>Basic</p>
                                </div>
                            </div>
                        </div>
                        <div className='skills-back margin'>
                            <h2 className='margin'>Backend Developer</h2>
                            <div>
                                <p>Comming soon...</p>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </section> 
    );
};

export default Main;