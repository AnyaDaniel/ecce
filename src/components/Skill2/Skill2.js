import React from 'react'
import Fade from 'react-reveal/Fade';
import shape1 from '../../images/progress-shape-1.png';
import shape2 from '../../images/progress-shape-2.png';
import abimg from '../../images/about/Kemi.jpeg'


const Skill2 = (props) => {
    return (
        <section className="wpo-skill-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="wpo-skill-text">
                            <h2>Meet kemi</h2>
                            <p><span id="target-text">Kemi is a dedicated</span> lawyer with over 6 years working with a top Canadian law firm with extensive experience in commercial and transactional corporate law in Canada and internationally. Her practice focuses on residential and commercial real estate, contract drafting and negotiation, corporate governance, compliance, and estate administration.
Throughout her career, Kemi has provided strategic legal counsel and delivered high-quality solutions to a diverse range of clients. She has coordinated and facilitated numerous real estate transactions, from inception to closing, reprenting buyers and vendors in various transactions. Her experience includes drafting, negotiating, and finalizing commercial agreements, conducting due diligence reviews, and providing comprehensive legal opinions.
Kemi holds an MBA from the University of Wales, UK, and is a certified Project Management Professional (PMP). As a member in good standing with the Law Society of Saskatchewan, she is committed to upholding the highest standards of professionalism and ethical practice.
Outside of her legal work, Kemi is passionate about volunteering, music, tennis, and initiatives geared toward food provision. She has traveled extensively, gaining valuable insights and experiences from countries like Switzerland, France, Wales, the USA, England, and South Africa.
Kemi looks forward to offering her expertise to address your legal needs with diligence and integrity.
</p>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-wrap">
                                <div className="wpo-about-img">
                                    <div className="inner-img">
                                        <img src={abimg} alt="Kemi" />
                                    </div>
                                </div>
                            </div>
                    </div>
                    {/* <div className="col-lg-6 offset-lg-1 col-md-12 col-12">
                        <div className="wpo-skill-progress">
                            <div className="wpo-progress-single">
                                <h5 className="progress-title">Financial Investment</h5>
                                <div className="progress">
                                    <Fade left>
                                        <div className="progress-bar"
                                            data-wow-delay=".3s" role="progressbar" style={{ width: `${75}%` }} aria-valuenow="90"
                                            aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </Fade>
                                </div>
                                <span className="progress-number">75%</span>
                            </div>

                            <div className="wpo-progress-single">
                                <h5 className="progress-title">Business Analysis</h5>
                                <div className="progress">
                                    <Fade left>
                                        <div className="progress-bar" data-wow-duration="0.7s"
                                            data-wow-delay=".3s" role="progressbar" style={{ width: `${80}%` }} aria-valuenow="75"
                                            aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </Fade>
                                </div>
                                <span className="progress-number">80%</span>
                            </div>

                            <div className="wpo-progress-single">
                                <h5 className="progress-title">Tax Management</h5>
                                <div className="progress">
                                    <Fade left>
                                        <div className="progress-bar" data-wow-duration="0.9s"
                                            data-wow-delay=".3s" role="progressbar" style={{ width: `${85}%` }} aria-valuenow="95"
                                            aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </Fade>
                                </div>
                                <span className="progress-number">85%</span>
                            </div>
                            <div className="wpo-progress-single">
                                <h5 className="progress-title">Financial Advices</h5>
                                <div className="progress">
                                    <Fade left>
                                        <div className="progress-bar" data-wow-duration="1.1s"
                                            data-wow-delay=".3s" role="progressbar" style={{ width: `${95}%` }} aria-valuenow="95"
                                            aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </Fade>
                                </div>
                                <span className="progress-number">95%</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="pr-shape-1"><img src={shape1} alt=""/></div>
            <div className="pr-shape-2"><img src={shape2} alt=""/></div>
        </section>
    )
}

export default Skill2;