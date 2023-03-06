import * as React from 'react';
import './navbar.css';

const Menubar = () => {

    return (
        <>
            <div className='show-when-mobile'>
                <nav className='menuBar container'>
                    <a href='#home' className='menu__logo'>
                        Ahmed
                    </a>
                    <div className='menu__list'>
                            <a href='#home' className='menu_link'>
                                <i class="ri-home-5-line"></i>
                            </a>
                        
                            <a href='#skills' className='menu_link'>
                                <i class="ri-trophy-line"></i>
                            </a>
                        
                            <a href='#services' className='menu_link'>
                                <i class="ri-briefcase-line"></i>
                            </a>
                        
                            <a href='#project' className='menu_link'>
                                <i class="ri-image-line"></i>
                            </a>
                        
                            <a href='#contact' className='menu_link'>
                                <i class="ri-chat-3-line"></i>
                            </a>
                    </div>
                </nav>

            </div>
        </>
    );
}

export default Menubar;
