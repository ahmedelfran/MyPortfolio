import React from 'react';
import './services.css';

const Services = () => {
    return (
        <>
            <div className='services section' id='services'>
                <h2 className='section__title'>Services</h2>
                <span className='section__subtitle'>What i offer</span>
                <div className='services__container container grid section__border'>
                    <div className='services__card'>
                        <i className="ri-layout-line"></i>
                        <h2 className='services__title'>
                            Web  <br />
                            Development
                        </h2>
                        <p className='services__des'>designing responsive and flexible websites with client side <br />

                            developing websites with server side</p>
                        <div className='services__border'></div>
                    </div>
                    <div className='services__card'>
                        <i className="ri-code-line"></i>
                        <h2 className='services__title'>
                            Website <br />
                            Design
                        </h2>
                        <p className='services__des'>Service that provides the best quality and at
                            the request of the client, with professional
                            work and customer support</p>
                        <div className='services__border'></div>
                    </div>
                    <div className='services__card'>
                        <i className="ri-quill-pen-line"></i>
                        <h2 className='services__title'>
                        content  <br />
                        creation
                        </h2>
                        <p className='services__des'>Service that provides the best quality and at
                            the request of the client, with professional
                            work and customer support</p>
                        <div className='services__border'></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
