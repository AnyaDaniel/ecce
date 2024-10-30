import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import abimg from '../../images/about/trust.png'
=======
import abimg from '../../images/about/img7.jpg'
import shap from '../../images/about/buiz.png'
>>>>>>> master

const ClickHandler = (props) => {
    window.scrollTo(10, 0);
}


const About4 = (props) => {
    return (
        <section className="wpo-about-section-s4 section-padding pb-120">
            <div className="container">
                <div className="wpo-about-inner">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                {/* <h4>TRUSTED PARTNER</h4> */}
                                <h2>TRUSTED PARTNER</h2>
                                <p>Whether you need assistance with corporate commercial law, real estate transactions, estate administration, or AI governance, ECCE LAW is here to provide reliable, expert guidance every step of the way. Our commitment to excellence and client satisfaction makes us your trusted partner in navigating complex legal landscapes.</p>
                                <div className="text-sub-wrap">
                                    <div className="text-sub-item">
<<<<<<< HEAD
                                        <i className="fi flaticon-tax"></i>
                                        <h5>Perfect solution of business
                                            and financial planning.</h5>
=======
                                    <span className=""><img src={shap} alt=""/></span>
                                        {/* <i className="fa fa-clock"></i> */}
                                        <h5>Dependable law firm dedicated to your success</h5>
>>>>>>> master
                                    </div>
                                </div>
                                <Link onClick={ClickHandler} className="theme-btn" to="/service">Our Services</Link>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-wrap">
                                <div className="wpo-about-img">
                                    <div className="inner-img">
                                        <img src={abimg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-ab"></div>
        </section>
    )
}

export default About4;