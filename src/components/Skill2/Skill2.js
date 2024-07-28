import React, { useEffect } from 'react';
import { Link, useHref, useLocation } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import shape1 from '../../images/progress-shape-1.png';
import shape2 from '../../images/progress-shape-2.png';
import abimg from '../../images/about/Kemi.jpeg';

const Skill2 = (props) => {
    const location = useLocation()
    useEffect(()=>{
        if(location.hash === "#principal"){
            document.querySelector(location.hash).scrollIntoView({behavior:"smooth"});
        }
    },[])
    return (
        <>
        <section className="wpo-skill-section-s2 section-padding" id="principal">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-12 ">
                        <div className="wpo-skill-text">
                            <h2>Meet Kemi</h2>
                            <p>
                                <span id="target-text">
                                    Kemi is a dedicated
                                </span> lawyer with over 6 years working with a top Canadian law firm with extensive experience in commercial and transactional corporate law in Canada and internationally. Her practice focuses on residential and commercial real estate, contract drafting and negotiation, corporate governance, compliance, and estate administration.
                                Throughout her career, Kemi has provided strategic legal counsel and delivered high-quality solutions to a diverse range of clients. She has coordinated and facilitated numerous real estate transactions, from inception to closing, representing buyers and vendors in various transactions. Her experience includes drafting, negotiating, and finalizing commercial agreements, conducting due diligence reviews, and providing comprehensive legal opinions.
                                Kemi holds an MBA from the University of Wales, UK, and is a certified Project Management Professional (PMP). As a member in good standing with the Law Society of Saskatchewan, she is committed to upholding the highest standards of professionalism and ethical practice.
                                Outside of her legal work, Kemi is passionate about volunteering, music, tennis, and initiatives geared toward food provision. She has traveled extensively, gaining valuable insights and experiences from countries like Switzerland, France, Wales, the USA, England, and South Africa.
                                Kemi looks forward to offering her expertise to address your legal needs with diligence and integrity.
                            </p>
                        </div>
                    </div>
                    <div className='col'></div>
                    <div className="col-lg-5 col-12 ">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <div className="inner-img">
                                    <img src={abimg} alt="Kemi" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pr-shape-1"><img src={shape1} alt="" /></div>
            <div className="pr-shape-2"><img src={shape2} alt="" /></div>
        </section>
        
        </>
    );
}

export default Skill2;
