import React from 'react';

function navbar(){
    return(
        <div className='container-fluid navigationbar'>
            <nav class="navbar sticky-top navbar-expand-lg p-0 navigation">
                <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ps-3 pt-3">
                        <li className='nav-item'>
                            <a href="#home" className='nav-link'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#aboutMe" className='nav-link'>About</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#skills" className='nav-link'>My Skills</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#education" className='nav-link'>Education and Experience</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#certifications" className='nav-link'>Certifications</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#getintouch" className='nav-link'>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default navbar