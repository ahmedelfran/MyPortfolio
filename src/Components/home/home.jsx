import React from 'react';
import './home.css';
import Me from '../../assets/me.jpg';
import ShapeCircle from '../../assets/shape-circle.svg';
import ShapeWawes from '../../assets/shape-wawes.svg';

const Home = () => {
    return (
        <>
            <div className='home section' id='home'>
                <div className='home__container container grid section__border'>
                    {/* =================== home data ======================= */}
                    <div className='home__data grid' >
                        <h1 className='home__title'>
                            Hi, I'm Ahmed <br />
                            Full Stack Developer <br />
                            {/* From Egypt <br /> */}
                        </h1>
                        <div className='home__blob grid' >
                            <div className='home__perfil' >
                                <img src={Me} alt='' />
                            </div>
                            <img src={ShapeWawes} alt='ShapeWawes' className='ShapeWawes' />
                            <img src={ShapeCircle} alt='ShapeCircle' className='ShapeCircle' />
                        </div>
                        <div className='home__social'>
                            <a href='https://www.linkedin.com/in/ahmed-s-elfran%D9%8D-4398611b7/' className='home__social__link' >
                                <i className="ri-linkedin-box-line"></i>
                            </a>
                            <a href='https://github.com/ahmedelfran' className='home__social__link' >
                                <i className="ri-github-line"></i>
                            </a>
                            <a href='https://www.facebook.com/a7med.elfran' className='home__social__link' >
                                <i class="ri-facebook-box-line"></i>
                            </a>

                        </div>
                    </div>
                    {/* ===================== Home info 1 ====================== */}
                    <div className='home__info'>
                        <div className='home__info1'>
                            <div>
                                <h3 className='home__info__title'>
                                    BIOGRAPHY
                                </h3>
                                <p className='home_info_des'>
                                    Hi, I'm Ahmed, an Ambitious Web Developer with very good experience in developing and integrating Front-End and Back-End based applications
                                </p>
                            </div>
                            <div>
                                <h3 className='home__info__title'>
                                    CONTACT
                                </h3>
                                <p className='home_info_des'>
                                    Benha, Egypt  <br />
                                    ahmedelfran343@gmail.com <br />
                                    +2) 01023858970  <br />
                                </p>
                            </div>
                            <div>
                                <h3 className='home__info__title'>
                                    SERVICES
                                </h3>
                                <p className='home_info_des'>
                                    Website Design <br />
                                    UI/UX Design <br />
                                    Animation <br />
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ===================== Home info 2 ====================== */}
                    <div className='home__info'>
                        <div className='home__info1'>
                            <div>
                                <h3 className='home__info__title'>
                                    YEARS OF EXPERIENCE
                                </h3>
                                <p className='home_info_num'>
                                    02+
                                </p>
                            </div>
                            <div>
                                <h3 className='home__info__title'>
                                    COMPLETED PROJECTS
                                </h3>
                                <p className='home_info_num'>
                                    15+
                                </p>
                            </div>
                            {/* <div>
                                <h3 className='home__info__title'>
                                    COMPANIES WORKED
                                </h3>
                                <p className='home_info_num'>
                                    07+
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
