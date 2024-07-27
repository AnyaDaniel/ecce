import React from 'react'
import { Link } from 'react-router-dom'
import abimg from '../../images/about/Always a trusted partner.png'
import shape1 from '../../images/about/shape-1.png'
import shape2 from '../../images/about/shape-2.png'
import shape3 from '../../images/about/dele.png'
import shape4 from '../../images/about/timely.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const About2 = (props) => {
    return(
        <section className="wpo-about-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <div className="inner-img">
                                    <img src={abimg} alt="Mrs Kemi"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <h4>Behold Ecce Law!</h4>
                            <h2>Always a trusted partner</h2>
                            <p>Ecce law stands for commitment to professionalism and quality service. We aim to simplify the complexities of law for you, providing you with high quality legal services. By focusing on our strengths in specific areas of law, we are able to deliver excellent work, making us a dependable firm dedicated to your success.</p>
                            <div className="text-sub-wrap">
                                <div className="text-sub-item">
                                <span className=""><img src={shape3} alt=""/></span>
                                    <h5>Excellent and Satisfactory Delivery.</h5>
                                </div>
                                <div className="text-sub-item">
                                <span className=""><img src={shape4} alt=""/></span>
                                    <h5>Always Timely and Transparent</h5>
                                </div>
                            </div>
                            <Link onClick={ClickHandler} className="theme-btn" to="/about">About Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1"><img src={shape1} alt=""/></div>
            <div className="shape-2"><img src={shape2} alt=""/></div>
        </section>
    )
}

export default About2;