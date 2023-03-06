import React from 'react';
import './navbar.css';


const Navbar = () => {

    return (
        <>
        {/* show-when-mobile */}
        <div className='hide-when-mobile'>
            <nav className='nav container'>
                <a href='/#' className='nav__logo'>
                    Ahmed S. EL-Fran
                </a>
                <div className='nav__menu'>
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <a href='#home' className='nav_link'> Home </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#skills' className='nav_link'> Skills </a>
                        </li>
                        {/* <li className='nav__item'>
                            <a href='#project' className='nav_link'> Qualification </a>
                        </li> */}
                        <li className='nav__item'>
                            <a href='#services' className='nav_link'> Services </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#project' className='nav_link'> Projects </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#contact' className='nav_link'> Contact </a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>

        </>
    );
}

export default Navbar;
