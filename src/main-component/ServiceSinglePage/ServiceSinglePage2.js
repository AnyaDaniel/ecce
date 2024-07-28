import React, { Fragment } from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Services from '../../api/service';
import ServiceSidebar from './sidebar'
import Contact from './contact';
import Footer2 from '../../components/footer2/Footer2';

const ServiceSinglePage2 = (props) => {
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
                                        {/* <h3>Our Capabilities</h3> */}
                                        {/* Estate Page and details */}
                                    </div>
                                    <h3>1. Commercial Real Estate: </h3>
                                    <p>Our commercial real estate services cover all aspects of commercial property transactions, including acquisitions, dispositions, leasing, and financing. We provide expert legal advice to ensure your commercial real estate deals are successful.</p>
                                    <h3>2. Residential Real Estate: </h3>
                                    <p>We assist clients with residential real estate transactions, from purchasing and selling homes to financing and leasing. Our team ensures that your residential real estate matters are handled with utmost importance for swift closure.</p>
                                    <h3>3. Residential Tenancies: </h3>
                                    <p>We provide legal support for residential tenancies, including lease agreements, tenant disputes, compliance with residential tenancy laws and legal representation. Our goal is to protect your rights and interests as a landlord or tenant.</p>
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
export default ServiceSinglePage2;
