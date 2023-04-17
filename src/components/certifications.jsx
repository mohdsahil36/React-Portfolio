import React from 'react';
import {motion} from 'framer-motion';

function certifications(){
    return(
            <div className='container-fluid certifications' id='certifications'>
                <div className='row'>
                    <div className='col-sm-12 col-md-3 certifications-head'>
                        <p className='certifications-heading'>Certifications</p>
                    </div>
                    <div className='col-sm-12 col-md-9 certifications-values'>
                        <ul className='certifications-list'>
                            <li className='certificaions-list-values'><a href="https://drive.google.com/file/d/1WLfh4q00kho_n3Ji9P65fNxuLImeMclz/view?usp=drivesdk" target='_blank'>Apache Spark(TM) SQL</a></li>
                            <li className='certificaions-list-values'><a href="https://drive.google.com/file/d/1dhNNOknGEadRS-42R2ExQlWl_FJYI60x/view?usp=drivesdk" target='_blank'>Cloud Computing</a></li>
                            <li className='certificaions-list-values'><a href="https://www.linkedin.com/learning/certificates/b806489f6f106bbbb1c206918ea58170bea054a60ff5eb7a944058cb61f3988a" target='_blank'>React JS</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}
export default certifications
