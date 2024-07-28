import React, { Fragment } from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Services from '../../api/service';
import ServiceSidebar from './sidebar'
import Contact from './contact';
import Footer2 from '../../components/footer2/Footer2';

const ServiceSinglePage3 = (props) => {
    const { id } = useParams()

    const serviceDetails = Services.find(item => item.Id === id)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar3 hclass={'wpo-header-style-5'} />
            <PageTitle pageTitle={serviceDetails.sTitle} pagesub={'Project'} />
            <div className="wpo-service-single-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-main-img">
                                        <img src={serviceDetails.sImgS} alt="" />
                                    </div>
                                    <div className="wpo-service-single-title">
                                        <h3>{serviceDetails.sTitle}</h3>
                                    </div>
                                    <p></p>
                                    <p>.</p>
                                    <div className="row mt-4">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={serviceDetails.ssImg1} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={serviceDetails.ssImg2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        {/* <h3>Business Incorporation and Reorganization: </h3> */}
                                    </div>
                                    <h3>1. Wills:  </h3>
                                    <p>We help clients draft and update wills to ensure that their final wishes are clearly expressed and legally binding. Our services include estate planning and ensure smooth asset distribution.</p>
                                    <h3>2. Power of Attorney:  </h3>
                                    <p>Our power of attorney services ensure that your financial and legal affairs are managed according to your wishes if you become unable to do so yourself. We draft and execute power of attorney documents tailored to your specific needs.</p>
                                    <h3>3. Health Care Directives:  </h3>
                                    <p>We assist clients in preparing health care directives that outline their medical treatment preferences. These directives provide guidance to healthcare providers and family members in the event of incapacitation.</p>
                                    <h3>4. Estate Administration and Probate:  </h3>
                                    <p>We offer comprehensive estate administration services, guiding executors and administrators through the probate process. Our team handles the legal complexities of validating wills and administering estates, ensuring that estates are settled efficiently and that the probate process is completed smoothly and in compliance with relevant regulations. </p>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        {/* <h3>Our approach</h3> */}
                                    </div>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean
                                        tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi
                                        eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit
                                        elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae
                                        id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem
                                        adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce
                                        vulputate diam interdum morbi ac a.</p> */}
                                </div>
                                <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        {/* <h3>Our Work Process</h3> */}
                                    </div>
                                    {/* <ul>
                                        <li>Non saed velit dictum quam risus pharetra esta.</li>
                                        <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                        <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                        <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                    </ul> */}
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Related Service</h3>
                                    </div>
                                    <div className="wpo-service-area">
                                        <div className="row align-items-center">
                                            {Services.slice(0,3).map((service, srv) => (
                                                <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                                    <div className="wpo-service-item">
                                                        <i className={`fi ${service.icon}`} ></i>
                                                        <h2>{service.sTitle}</h2>
                                                        {/* <p>Lacus, etiam sed est eu tempus need Temer diam congue.</p> */}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-contact-area">
                                        <div className="wpo-contact-title">
                                            {/* <h2>Have project in mind? Let's discuss</h2> */}
                                            {/* <p>Get in touch with us to see how we can help you with your project</p> */}
                                        </div>
                                        <div className="wpo-contact-form-area">
                                            {/* <Contact/> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <ServiceSidebar/> */}
                    </div>
                </div>
            </div>
            <Footer2/>
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage3;
