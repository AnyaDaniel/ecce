import React from 'react'
import { Link } from 'react-router-dom'


const HeaderTopbar = () => {
    return (
        <div className="topbar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-lg-6 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><a className='text-white' href="tel:3062054081"><i className="fi flaticon-phone-call-1"></i>(306)-205-4081</a></li>
                                <li><a className='text-white' href="mailto:admin@eccelaw.com"><i className="fi flaticon-email-1"></i>admin@eccelaw.com</a></li>
                                <li><a className='text-white' href="https://maps.google.com/?q=Saskatoon+SK+Canada" target="_blank" rel="noopener noreferrer"><i className="fi flaticon-location"></i>Saskatoon SK Canada</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-sm-12 col-12">
                        <div className="contact-info">
                            {/* <ul>
                                <li><Link to="/about">Careers</Link></li>
                                <li><Link to="/blog">News & Media</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                            </ul> */}
                            <ul className="social">
                                <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                <li><Link to="/"><i className="ti-google"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;