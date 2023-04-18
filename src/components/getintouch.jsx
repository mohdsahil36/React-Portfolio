import React from 'react';
import {motion} from 'framer-motion';

function getintouch(){
    return(
            <div className='container-fluid getintouch-section' id='getintouch'>
                <div className='row'>
                    <div className='col-sm-12 col-md-3 getintouch-head'>
                        <p className='getintouch-heading'>Get In Touch</p>
                    </div>
                    <div className='col-sm-12 col-md-9 getintouch-values'>
                        <div className='first-contact'>
                            <motion.div className='phone' whileHover={{ scale: 1.15 }}>
                                <i className="fa fa-phone connect-icon" aria-hidden="true"></i>
                                <p>
                                    <span className='small-text'>Phone</span>
                                    7398010954
                                </p>
                            </motion.div>
                            <motion.div className='address' whileHover={{ scale: 1.15 }}>
                                <i className="fa fa-map-marker connect-icon" aria-hidden="true"></i>
                                <p>
                                    <span className='small-text'>Address</span>
                                    Bengaluru,India
                                </p>
                            </motion.div>
                        </div>
                        <div className='second-contact'>
                            <motion.div className='email' whileHover={{ scale: 1.15 }}>
                                <i className="fa fa-envelope-o connect-icon" aria-hidden="true"></i>
                                <p>
                                    <span className='small-text'>Email</span>
                                    mohdsahilsiddiqui36@gmail.com
                                </p>
                            </motion.div>
                            <motion.div className='new-connections' whileHover={{ scale: 1.15 }}>
                                <i className="fa fa-share-alt connect-icon" aria-hidden="true"></i>
                                <p>
                                    <span className='small-text'>Let's Connect</span>
                                    <span>
                                        <a href="https://www.linkedin.com/in/mohd-sahil-siddiqui-021a11201/" target='_blank' className='text-white'><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </span>
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default getintouch