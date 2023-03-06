
import './skills.css';
import HTML from '../../assets/html-1.svg';
import CSS from '../../assets/css-3.svg';
import JavaScript from '../../assets/logo-javascript.svg';
import React from '../../assets/react-2.svg';
import Git from '../../assets/git-icon.svg';
import Bootstrap from '../../assets/bootstrap-5-1.svg';
import Php from '../../assets/php-1.svg';
import Laravel from '../../assets/laravel-3.svg';
import MySql from '../../assets/mysql-4.svg';

const Skills = () => {
    return (
        <>
            <div className='skills section' id='skills'>
                <h2 className='section__title'>Skills</h2>
                <span className='section__subtitle'>My favorite skills</span>
                <div className='skills__container container section__border'>
                    {/* ======================== SKILLS 1 ========================== */}
                    <div className='skills__content'>
                        <h3 className='skills__title'>
                            <i className="ri-braces-line"></i>Frontend Developer
                        </h3>
                        <div className='skills__info'>

                            <div className='skills__data'>
                                <div className='skills__blob'>
                                    <img src={HTML} alt='Skills img' />
                                </div>
                                <h3 className='skills__name'>HTML</h3>
                                <span className='skills_subtitle'>Intermediate</span>
                            </div>

                            <div className='skills__data'>
                                <div className='skills__blob'>
                                    <img src={CSS} alt='Skills img' />
                                </div>
                                <h3 className='skills__name'>CSS</h3>
                                <span className='skills_subtitle'>Advanced</span>
                            </div>

                            <div className='skills__data'>
                                <div className='skills__blob'>
                                    <img src={JavaScript} alt='Skills img' />
                                </div>
                                <h3 className='skills__name'>JavaScript</h3>
                                <span className='skills_subtitle'>Intermediate</span>
                            </div>

                            <div className='skills__data'>
                                <div className='skills__blob'>
                                    <img src={Bootstrap} alt='Skills img' />
                                </div>
                                <h3 className='skills__name'>Bootstrap</h3>
                                <span className='skills_subtitle'>Basic</span>
                            </div>

                            <div className='skills__data'>
                                <div className='skills__blob'>
                                    <img src={React} alt='Skills img' />
                                </div>
                                <h3 className='skills__name'>React</h3>
                                <span className='skills_subtitle'>Basic</span>
                            </div>

                            

                        </div>
                    </div>
                    {/* ======================== SKILLS 2 ========================== */}
                    <div className='skills__content'>
                        <h3 className='skills__title'>
                            <i className="ri-pantone-line"></i>Web Designer
                        </h3>
                        <div className='skills__info'>

                            <div className='skills__data'>
                                <div className='skills__blob'>
                                    <img src={Php} alt='Skills img' />
                                </div>
                                <h3 className='skills__name'>Php</h3>
                                <span className='skills_subtitle'>Advanced</span>
                            </div>

                            <div className='skills__data'>
                                <div className='skills__blob'>
                                    <img src={Laravel} alt='Skills img' />
                                </div>
                                <h3 className='skills__name'>Laravel</h3>
                                <span className='skills_subtitle'>Basic</span>
                            </div>

                            <div className='skills__data'>
                                <div className='skills__blob'>
                                    <img src={MySql} alt='Skills img' />
                                </div>
                                <h3 className='skills__name'>MySql</h3>
                                <span className='skills_subtitle'>Intermediate</span>
                            </div>

                            <div className='skills__data'>
                                <div className='skills__blob'>
                                    <img src={Git} alt='Skills img' />
                                </div>
                                <h3 className='skills__name'>Git</h3>
                                <span className='skills_subtitle'>Intermediate</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Skills;
