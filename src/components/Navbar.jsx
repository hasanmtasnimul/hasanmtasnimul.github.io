import React from 'react'
import { faBarsStaggered, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
export default function Navbar() {
    return (
        <div id='navbar' className=''>
            <nav class="navbar navbar-expand-md h-100 shadow">
                <div class="container-fluid">
                    <a class="navbar-brand fst-italic" href="#">{'<hasanmtasnimul />'}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBarsStaggered} />
                    </button>
                    <div class="collapse navbar-collapse text-center fw-light" id="navbarNavDropdown">
                        <ul class="navbar-nav mx-md-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#hero">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#skills">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#projects">Projects</a>
                            </li>
                        </ul>
                        <ul className='navbar-nav d-flex flex-row justify-content-center'>
                            <li className="nav-item me-3 me-lg-0">
                                <a href="https://www.linkedin.com/in/hasanmtasnimul/" className="nav-link" target='_blank'>
                                    <FontAwesomeIcon icon={faLinkedin} size='2x' />
                                </a>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <a href="https://github.com/hasanmtasnimul" className="nav-link" target='_blank'>
                                    <FontAwesomeIcon icon={faGithubSquare} size='2x' />
                                </a>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <a href="mailto:hasan.mtasnimul@gmail.com" className="nav-link" target='_blank'>
                                    <FontAwesomeIcon icon={faEnvelope} size='2x' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
