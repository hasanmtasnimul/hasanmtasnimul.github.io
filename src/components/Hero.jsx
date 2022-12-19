import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
    return (
        <div className='p-5' id='hero'>
            <div className='container d-flex justify-content-center'>
                <div className='row align-items-center justify-content-center'>
                    <div className="col-5 d-none d-sm-block">
                        <img className='img-fluid' src="./hero-img.png" alt="" />
                    </div>
                    <div className='col-10 col-sm-8 col-md-6 col-lg-6' style={{ color: '#fff' }}>
                        <h2 className='fw-normal '>Hey, It's <span className='fw-semibold' style={{ color: '#ffae52' }}>Tasnimul!</span> </h2>
                        <p className='lh-sm opacity-75'>I am excited to share with you some of the projects I have worked on and the skills I have developed. If you have any questions or would like to work together, don't hesitate to contact me.</p>
                        <div className=''>
                            <a href='#skills' className=' fw-light col-12 col-sm-5 btn btn-outline-light p-1 me-1 mb-2 mb-sm-0' >
                                View Projects
                            </a>
                            <a href='mailto:hasan.mtasnimul@gmail.com' className='fw-light col-12 col-sm-4 btn btn-link ' style={{ color: '#fff' }}>Reach Me <FontAwesomeIcon icon={faArrowRight} fontSize='small' /> </a>
                        </div>
                    </div>
                </div>
            </div >
        </div>

    )
}
