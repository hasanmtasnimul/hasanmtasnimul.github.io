import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
    return (
        <div id='footer' className='pt-2'>
            <div className='container'>
                <div className='text-light text-center py-3'>
                    <a href="#" className='text-decoration-none link-secondary'>
                        <FontAwesomeIcon icon={faArrowUp} className='me-2' />
                        back to top
                    </a>
                    <div className='display-5 fst-italic'>
                        &copy;hasanmtasnimul
                    </div>
                </div>
            </div>

        </div>
    )
}
