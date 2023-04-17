import React from 'react';
import {motion} from 'framer-motion';

function EducationAndExperience() {
    return (
            <div className='container-fluid experience' id='education'>
                <div className='row'>
                    <div className='col-sm-12 col-md-3 experience-head'>
                        <p className='experience-heading'>Education and Experience</p>
                    </div>
                    <div className='col-sm-12 col-md-9 experience-values'>
                        <div className='education-section'>
                            <div className='first-section'>
                                <motion.div className='education-head' whileHover={{ scale: 1.25 }}>
                                    <p className='education-heading'>Education</p>
                                </motion.div>
                                <div className='education-values'>
                                    <motion.div className='bachelors' whileHover={{ scale: 1.125 }}>
                                        <h3 className='degree'>Bachelor's Degree</h3>
                                        <p className='info'><i class="fa fa-clock-o" aria-hidden="true"></i>&emsp;2018-2022</p>
                                        <p className='info'><i class="fa fa-university" aria-hidden="true"></i>&emsp;SRM Institute of Science and Technology</p>
                                    </motion.div>
                                    <motion.div className='senior-secondary' whileHover={{ scale: 1.125 }}>
                                        <h3 className='degree'>Higher Secondary</h3>
                                        <p className='info'><i class="fa fa-clock-o" aria-hidden="true"></i>&emsp;2016-2017</p>
                                        <p className='info'><i class="fa fa-university" aria-hidden="true"></i>&emsp;Prabhat Public School</p>
                                    </motion.div>
                                    <motion.div className='high-school' whileHover={{ scale: 1.125 }}>
                                        <h3 className='degree'>High School</h3>
                                        <p className='info'><i class="fa fa-clock-o" aria-hidden="true"></i>&emsp;2014-2015</p>
                                        <p className='info'><i class="fa fa-university" aria-hidden="true"></i>&emsp;Swaraj India Public School</p>
                                    </motion.div>
                                </div>
                            </div>
                            <div className='second-section'>
                                <motion.div className='experience-head' whileHover={{ scale: 1.25 }}>
                                    <p className='experience-section-heading'>Experience</p>
                                </motion.div>
                                <div className='experience-values'>
                                    <motion.div className='job-role' whileHover={{ scale: 1.125 }}>
                                        <h3 className='job'>Associate FrontEnd Developer</h3>
                                        <p className='info'><i class="fa fa-clock-o" aria-hidden="true"></i>&emsp;2022-Now</p>
                                        <p className='info'><i class="fa fa-building" aria-hidden="true"></i>&emsp;Merkle Inspire</p>
                                    </motion.div>
                                    <motion.div className='job-role2' whileHover={{ scale: 1.125 }}>
                                        <h3 className='job'>UI Automation Developer</h3>
                                        <p className='info'><i class="fa fa-clock-o" aria-hidden="true"></i>&emsp;2021-2022</p>
                                        <p className='info'><i class="fa fa-building" aria-hidden="true"></i>&emsp;HighRadius Technologies Pvt Ltd</p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default EducationAndExperience