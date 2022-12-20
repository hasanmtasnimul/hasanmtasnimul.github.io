import React from 'react'

export default function () {
    return (
        <div id='projects' className='lh-sm py-5'>
            <h2 className='fw-semibold text-center'>Projects</h2>
            <div className='container'>
                <div className='row align-items-center justify-content-center' style={{ minHeight: '80vh' }}>
                    <div className='col row gy-3 gy-lg-0 g gx-sm-4  justify-content-center justify-content-sm-between'>
                        <div className='col-10 col-sm-6 col-md-4'>
                            <div className='card shadow' >
                                <img className='card-img-top border-bottom' src="./quiz-app.gif" />
                                <div className='card-body d-flex flex-column'>
                                    <h4 className='card-title'>React Quiz App</h4>
                                    <p className='card-text text-muted'>My first React pet project utilizing core concepts of React like functional components, props, conditional rendering, useState, useEffect and useRef. For styling basic CSS Flexbox was used.</p>
                                    <div className='row g-1 mt-auto'>
                                        <a href="https://react-quiz-app-weld.vercel.app/" class="col-12 col-lg btn btn-primary me-lg-1" target='_blank'>Demo</a>
                                        <a href="https://github.com/hasanmtasnimul/react-quiz-app" class="col-12 col-lg btn btn-outline-primary" target='_blank'>Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-10 col-sm-6 col-md-4 d-flex align-items-stretch'>
                            <div className='card shadow' >
                                <img className='card-img-top border-bottom' src="./portfolio.gif" />
                                <div className='card-body d-flex flex-column '>
                                    <h4 className='card-title'>My Portfolio Website</h4>
                                    <p className='card-text text-muted'>This was compeleted using react library. For styling bootstrap was utilized.</p>
                                    <div className='row g-1 mt-auto'>
                                        <a href="https://hasanmtasnimul.github.io" class="col-12 col-lg btn btn-primary me-lg-1" target='_blank'>Demo</a>
                                        <a href="https://github.com/hasanmtasnimul/hasanmtasnimul.github.io" class="col-12 col-lg btn btn-outline-primary" target='_blank'>Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-10 col-sm-6 col-md-4 d-flex align-items-stretch' >
                            <div className='card shadow'>
                                <img className='card-img-top border-bottom' src="./working-on-it.gif" style={{ width: '300px !important' }} />
                                <div className='card-body d-flex flex-column '>
                                    <h4 className='card-title'>Ongoing Project</h4>
                                    <p className='card-text text-muted'>Project Details will be added later after completion.</p>
                                    <div className='row g-1 mt-auto'>
                                        <a href="#" class="col-12 col-lg btn btn-primary disabled me-lg-1">Demo</a>
                                        <a href="#" class="col-12 col-lg btn btn-outline-primary disabled">Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
