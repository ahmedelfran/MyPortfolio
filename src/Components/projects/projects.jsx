import './projects.css';
import Project2 from '../../assets/project1.jpg';
import Github from '../../assets/github.jpg';
// =======================================================
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
// =======================================================

const Projects = () => {
    return (
        <>
            <div className='projects section' id='project'>
                <h2 className='section__title'>Projects</h2>
                <span className='section__subtitle'>Most recent work</span>
                <div className='container section__border'>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#000',
                            '--swiper-pagination-color': '#000',
                            '--swiper-navigation-top-offset': '25%',
                            '--swiper-navigation-sides-offset': '10px',
                            '--swiper-pagination-bottom': '5px',
                            '--swiper-pagination-bullet-size': '10px',
                            '--swiper-navigation-size': '30px',
                        }}
                        slidesPerView={2}
                        spaceBetween={30}
                        breakpoints={{
                            300: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            450: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            550: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            991: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            }
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <div className='projects__container'>
                            {/* =============== project 1 ============ */}
                            <SwiperSlide>
                                <div className='projects__content'>
                                    <div className='projects__content__card'>
                                        <img className='projects__img' src={Project2} alt='Project1' />
                                        <div>
                                            <span className='projects__subtitle'>Web</span>
                                            <h1 className='projects__title'>Photography Portfolio</h1>
                                            <a href="https://ahmedelfran.github.io/Photography-Portfolio/#about" target={'_blank'} rel="noreferrer"  className='projeces__button'>
                                                View demo <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* =============== project 2 ============ */}
                            <SwiperSlide>
                                <div className='projects__content'>
                                    <div className='projects__content__card'>
                                        <img className='projects__img' src={Project2} alt='Project2' />
                                        <div>
                                            <span className='projects__subtitle'>Web</span>
                                            <h1 className='projects__title'>Grocery store</h1>
                                            <a href="https://ahmedelfran.github.io/Market/" className='projeces__button'>
                                                View demo <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* =============== project 3 ============ */}
                            <SwiperSlide>
                                <div className='projects__content'>
                                    <div className='projects__content__card'>
                                        <img className='projects__img' src={Project2} alt='Project3' />
                                        <div>
                                            <span className='projects__subtitle'>Web</span>
                                            <h1 className='projects__title'>Movies</h1>
                                            <a href="https://ahmedelfran.github.io/Movies/" target={'_blank'} rel="noreferrer" className='projeces__button'>
                                                View demo <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* =============== project 4 ============ */}
                            <SwiperSlide>
                                <div className='projects__content'>
                                    <div className='projects__content__card'>
                                        <img className='projects__img' src={Project2} alt='Project3' />
                                        <div>
                                            <span className='projects__subtitle'>Web</span>
                                            <h1 className='projects__title'>BasicCrud ReactJs</h1>
                                            <a href="https://github.com/ahmedelfran/Basic_Crud-ReactJs" target={'_blank'} rel="noreferrer" className='projeces__button'>
                                                View demo <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* =============== project 5 ============ */}
                            <SwiperSlide>
                                <div className='projects__content'>
                                    <div className='projects__content__card'>
                                        <img className='projects__img' src={Project2} alt='Project3' />
                                        <div>
                                            <span className='projects__subtitle'>Web</span>
                                            <h1 className='projects__title'>RegisterSystem php</h1>
                                            <a href="https://github.com/ahmedelfran/Login-Register-System-php" target={'_blank'} rel="noreferrer" className='projeces__button'>
                                                View demo <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>{/* =============== project 6 ============ */}
                            <SwiperSlide>
                                <div className='projects__content'>
                                    <div className='projects__content__card'>
                                        <img className='projects__img' src={Project2} alt='Project3' />
                                        <div>
                                            <span className='projects__subtitle'>Web</span>
                                            <h1 className='projects__title'>stopwatch javascript</h1>
                                            <a href="https://ahmedelfran.github.io/StopWatch/" target={'_blank'} rel="noreferrer" className='projeces__button'>
                                                View demo <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* =============== project 7 ============ */}
                            <SwiperSlide>
                                <div className='projects__content'>
                                    <div className='projects__content__card'>
                                        <img className='projects__img' src={Project2} alt='Project3' />
                                        <div>
                                            <span className='projects__subtitle'>Web</span>
                                            <h1 className='projects__title'>Shokran</h1>
                                            <a href="https://ahmedelfran.github.io/Shokran/" target={'_blank'} rel="noreferrer" className='projeces__button'>
                                                View demo <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* =============== project 8 ============*/}
                            <SwiperSlide>
                                <div className='projects__content'>
                                    <div className='projects__content__card'>
                                        <img className='projects__img' src={Github} alt='Project4' />
                                        <div>
                                            <span className='projects__subtitle'>Animation</span>
                                            <h1 className='projects__title'>Animation Proto</h1>
                                            <a href='/#' target={'_blank'} rel="noreferrer" className='projeces__button'>
                                                View demo <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Projects;
