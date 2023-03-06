import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './contact.css';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_wsgxuu5',
            'template_jspal0f',
            form.current,
            'Phmbh-ufGJFg8vZ8g'
        )
            .then((result) => {
                alert('mensagem enviada com sucesso! :) ')
            }, (error) => {
                alert(error.message);
            });
        e.target.reset();
    };


    return (
        <>
            <div className='contact section' id='contact'>
                <h2 className='section__title'>Contact Me</h2>
                <span className='section__subtitle'>Get in touch</span>
                <div className='contact__container container  section__border'>
                    <div className='contact__content'>
                        <h3 className='contact__title'>
                            <i className="ri-chat-3-line"></i> Talk to me
                        </h3>
                        <div className='contact__info'>
                            <div className='contact__data'>
                                <span className='contact__data__title'>Email</span>
                                <span className='contact__data__info'>ahmedelfran343@gmail.com</span>
                            </div>
                            <div className='contact__data'>
                                <span className='contact__data__title'>Whatsapp</span>
                                <span className='contact__data__info'>+2 01023858970</span>
                                <a href='https://api.whatsapp.com/send/?phone=201023858970&text&type=phone_number&app_absent=0' className='contact__button'>
                                    Write me <i className="ri-arrow-right-line"></i>
                                </a>
                            </div>
                            <div className='contact__data'>
                                <span className='contact__data__title'>Messenger</span>
                                <span className='contact__data__info'>@a7med.elfran</span>
                                <a href='https://m.me/a7med.elfran' className='contact__button'>
                                    Write me <i className="ri-arrow-right-line"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='contact__content'>
                        <h3 className='contact__title'>
                            <i className="ri-send-plane-line"></i> Write me your project
                        </h3>
                        {/* ================ form ================= */}
                        <form ref={form} onSubmit={sendEmail} className='contact__form'>
                            <div className='contact__form__div'>
                                <label className='contact__form__tag'>Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Write your name"
                                    required=""
                                />
                            </div>
                            <div className='contact__form__div'>
                                <label className='contact__form__tag'>Mail</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Write your email"
                                    required=""
                                />
                            </div>
                            <div className='contact__form__div contact__form__area'>
                                <label className='contact__form__tag'>Project</label>
                                <textarea
                                    name="message"
                                    placeholder="Write your project"
                                />
                            </div>
                            <button type="submit" className='contact__button'>
                                Submit <i className="ri-arrow-right-up-line"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Contact;
