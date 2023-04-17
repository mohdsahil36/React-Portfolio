import React from 'react';
import ProfileImage from '../assets/Profile-Photo.png';
import {motion} from 'framer-motion';

function AboutMe() {
    return (
            <div className='container-fluid aboutme-section' id="aboutMe">
                <div className='row'>
                    <div className='col-md-4 my-auto image-section'>
                        <img src={ProfileImage} alt="profile-image" />
                    </div>
                    <div className='col-md-8 data-section'>
                        <div className='names'>
                            <p className='firstname m-0'>Mohd Sahil</p>
                            <p className='lastname m-0'>Siddiqui</p>
                        </div>
                        <div className='infos'>
                            <div>
                                <ul className='p-0'>
                                    <motion.li whileHover={{ scale: 1.25 }}><span>Age :</span><span>24 Years</span></motion.li>
                                    <motion.li whileHover={{ scale: 1.25 }}><span>Nationality :</span><span>Indian</span></motion.li>
                                    <motion.li whileHover={{ scale: 1.25 }}><span>Language :</span><span>English, Hindi</span></motion.li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <motion.li whileHover={{ scale: 1.25 }}><span>Address :</span><span>Banglore</span></motion.li>
                                    <motion.li whileHover={{ scale: 1.25 }}><span>Phone :</span><span>+91 7398010954</span></motion.li>
                                    <motion.li whileHover={{ scale: 1.25 }}><span>Email :</span><span>mohdsahilsiddiqui36@gmail.com</span></motion.li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default AboutMe