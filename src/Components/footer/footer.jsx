import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='footer__container container'>
                    <h1 className='footer__title'>Ahmed S.Elfran</h1>
                    <p>Full Stack Developer</p>

                    <div className='footer__list'>
                        <a href='#home' className='footer__link'>Home</a>
                        <a href='#skills' className='footer__link'>Skills</a>
                        <a href='#project' className='footer__link'>Projects</a>
                    </div>
                    <div className='home__social'>
                        <a href='https://www.linkedin.com/in/ahmed-s-elfran%D9%8D-4398611b7/'  className='home__social__link' >
                            <i className="ri-linkedin-box-line"></i>
                        </a>
                        <a href='https://github.com/ahmedelfran'  className='home__social__link' >
                            <i className="ri-github-line"></i>
                        </a>
                        <a href='https://www.facebook.com/a7med.elfran/'  className='home__social__link' >
                            <i className="ri-facebook-box-line"></i>
                        </a>
                    </div>
                    <span className='footer__copy'>
                        &#169; Copyright Ahmed Elfran. All rights reserved
                    </span>
                </div>
            </footer>
        </>
    );
}

export default Footer;
