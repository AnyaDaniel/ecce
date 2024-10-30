import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/img-1.jpg'
import ts2 from '../../images/testimonial/img-2.jpg'
import ts3 from '../../images/testimonial/img-3.jpg'
import VideoModal from '../ModalVideo/VideoModal';
import SectionTitle from '../SectionTitle/SectionTitle';


const testimonial = [
    {
        id: '01',
        tImg: ts1,
        Des: "We had the pleasure of working with Atty Kemi for our business franchise purchase, and we couldn't be happier with the experience. She was incredibly thorough and approachable, ensuring we understood every step of the process. Her explanations were clear, and she was always accommodating to our needs. What stood out most was her responsiveness; she always replied promptly to our inquiries. We highly recommend Atty Kemi to anyone seeking legal assistance with franchise purchases and Real estate transactions. She truly exceeded our expectations.",
        Title: 'Napoleon Ebonite',
        Sub: "",
    },
    {
        id: '01',
        tImg: ts2,
        Des: "You can tell how successful a project will be by the quality of its foundation. This heralds ECCE Law at its infancy. From our initial booking, to meeting the Principal one-on-one where she tutored us meticulously about the various legal documents we would be signing, until the beautiful morning our realtor presented our home key to us as scheduled, ECCE law gave us timely correspondences with clear and detailed instructions. It was over-and-beyond personalized services that helped us complete our mortgage transaction within a really short timeframe. Communication was professional and she made it very easy to review documents on the go/electronically. On top of it, she sealed our working relationship with thoughtful gifts. Highly recommend",
        Title: 'Bisi & Wole Olabanji',
        Sub: "",
    },
    {
        id: '01',
        tImg: ts3,
        Des: "Oh wow! It was such a fantastic experience. Despite the fact  receiving our  mortgage documentation from the lenders late, our lawyer made sure we got the keys to our new home on our possession day without any hitch. The entire process was handled with high professionalism. We recommend their services to everyone. Great job!” ",
        Title: 'Olufisayo & Tosin',
        Sub: "",
    }
]

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
};

const Testimonial2 = () => {

    return (
        <section className="wpo-testimonial-section-s2 section-padding">
            <div className="container">
                <SectionTitle subTitle={'CLIENT TESTIMONIAL'} Title={'Experiences of Trust and Excellence'} />
                <div className="wpo-testimonial-wrap">
                    <div className="icon"><i className="fi flaticon-left-quote"></i></div>
                    <div className="wpo-testimonial-items wpo-testimonial-slide">
                        <Slider {...settings}>
                            {
                                testimonial.map((tesmnl, tsm) => (
                                    <div className="wpo-testimonial-item" key={tsm}>
                                        <div className="wpo-testimonial-text">
                                            <p>{tesmnl.Des}</p>
                                            <div className="wpo-testimonial-text-btm">
                                                <span>{tesmnl.Sub}</span>
                                                <h3>{tesmnl.Title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                    <div className="t-shape-1">
                        <svg width="152.000000pt" height="137.000000pt" viewBox="0 0 152.000000 137.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,137.000000) scale(0.100000,-0.100000)" stroke="none">
                                <path
                                    d="M101 1288 c171 -466 515 -851 954 -1070 126 -63 240 -107 373 -142 l92 -25 0 660 0 659 -725 0 -724 0 30 -82z" />
                            </g>
                        </svg>
                    </div>
                    <div className="t-shape-2">
                        <svg width="186.000000pt" height="202.000000pt" viewBox="0 0 186.000000 202.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,202.000000) scale(0.100000,-0.100000)" stroke="none">
                                <path
                                    d="M0 965 l0 -965 870 0 871 0 19 45 c67 157 56 324 -29 448 -87 127 -229 238 -648 507 -158 102 -337 220 -398 264 -238 170 -473 391 -609 574 -38 50 -71 92 -73 92 -1 0 -3 -434 -3 -965z" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial2;