import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHtml5,
    faCss3,
    faJs,
    faPython,
    faBootstrap,
    faReact,
    faNode,
    faGit,
    faFigma
} from '@fortawesome/free-brands-svg-icons';

export default function Skills() {
    return (
        <div id='skills' className='pt-4' style={{ background: '#B0DDE4 !important' }}>
            <h2 className='fw-semibold text-center'> Skills </h2>
            <div className='section-name-border'></div>
            <div className='container'>
                <div className='row align-items-center' style={{ minHeight: '40vh' }}>
                    <div className="row col justify-content-center">
                        <FontAwesomeIcon className='col-4 col-md-3 col-lg-2 mb-3 mb-md-5' icon={faHtml5} size='3x' />
                        <FontAwesomeIcon className='col-4 col-md-3 col-lg-2 mb-3 mb-md-5' icon={faCss3} size='3x' />
                        <FontAwesomeIcon className='col-4 col-md-3 col-lg-2 mb-3 mb-md-5' icon={faJs} size='3x' />
                        <FontAwesomeIcon className='col-4 col-md-3 col-lg-2 mb-3 mb-md-5' icon={faPython} size='3x' />
                        <FontAwesomeIcon className='col-4 col-md-3 col-lg-2 mb-3 mb-md-5' icon={faBootstrap} size='3x' />
                        <FontAwesomeIcon className='col-4 col-md-3 col-lg-2 mb-3 mb-md-5' icon={faReact} size='3x' />
                        <FontAwesomeIcon className='col-4 col-md-3 col-lg-2 mb-3 mb-md-5' icon={faNode} size='3x' />
                        <FontAwesomeIcon className='col-4 col-md-3 col-lg-2 mb-3 mb-md-5' icon={faGit} size='3x' />
                        <FontAwesomeIcon className='col-4 col-md-3 col-lg-2 mb-3 mb-md-5' icon={faFigma} size='3x' />
                    </div>
                </div>
            </div>
        </div>

    )
}
