import React from 'react';
import {motion} from 'framer-motion'; 

function myskills(){
    return(
            <div className='myskills container-fluid' id='skills'>
                <div className='row'>
                    <div className='col-sm-12 col-md-3 skills-head'>
                        <p className='mySkills-heading'>My Skills</p>
                    </div>
                    <div className='col-sm-12 col-md-9 skills'>
                        <div className='skills-outer'>
                            <div>
                                <motion.span
                                    initial={{ rotate: 0 }}
                                    whileHover={{ rotate: -30 }}
                                ><motion.i class="devicon-html5-plain" whileHover={{ rotate: 30 }}></motion.i></motion.span>
                                <h4>HTML</h4>
                            </div>
                            <div>
                                <motion.span
                                    initial={{ rotate: 0 }}
                                    whileHover={{ rotate: -30 }}
                                ><motion.i class="devicon-css3-plain" whileHover={{ rotate: 30 }}></motion.i></motion.span>
                                <h4>CSS</h4>
                            </div>
                        </div>
                        <div className='skills-outer'>
                            <div>
                                <motion.span
                                    initial={{ rotate: 0 }}
                                    whileHover={{ rotate: -30 }}
                                ><motion.i class="devicon-sass-original" whileHover={{ rotate: 30 }}></motion.i></motion.span>
                                <h4>SASS</h4>
                            </div>
                            <div>
                                <motion.span
                                    initial={{ rotate: 0 }}
                                    whileHover={{ rotate: -30 }}
                                ><motion.i class="devicon-bootstrap-plain" whileHover={{ rotate: 30 }}></motion.i></motion.span>
                                <h4>Bootstrap</h4>
                            </div>
                        </div>
                        <div className='skills-outer'>
                            <div>
                                <motion.span
                                    initial={{ rotate: 0 }}
                                    whileHover={{ rotate: -30 }}
                                ><motion.i class="devicon-javascript-plain" whileHover={{ rotate: 30 }}></motion.i></motion.span>
                                <h4>Javascript</h4>
                            </div>
                            <div>
                                <motion.span
                                    initial={{ rotate: 0 }}
                                    whileHover={{ rotate: -30 }}
                                ><motion.i class="devicon-jquery-plain" whileHover={{ rotate: 30 }}></motion.i></motion.span>
                                <h4>jQuery</h4>
                            </div>
                        </div>
                        <div className='skills-outer'>
                            <div>
                                <motion.span
                                    initial={{ rotate: 0 }}
                                    whileHover={{ rotate: -30 }}
                                ><motion.i class="devicon-react-original" whileHover={{ rotate: 30 }}></motion.i></motion.span>
                                <h4>React</h4>
                            </div>
                            <div>
                                <motion.span
                                    initial={{ rotate: 0 }}
                                    whileHover={{ rotate: -30 }}
                                ><motion.i class="devicon-nextjs-original" whileHover={{ rotate: 30 }}></motion.i></motion.span>
                                <h4>NextJS</h4>
                            </div>
                        </div>
                        <div className='skills-outer'>
                            <div>
                                <motion.span
                                    initial={{ rotate: 0 }}
                                    whileHover={{ rotate: -30 }}
                                ><motion.i class="devicon-github-original" whileHover={{ rotate: 30 }}></motion.i></motion.span>
                                <h4>Git</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default myskills