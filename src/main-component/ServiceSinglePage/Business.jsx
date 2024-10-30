import React, { Fragment } from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Services from '../../api/service';
import ServiceSidebar from './sidebar'
import Contact from './contact';
import Footer2 from '../../components/footer2/Footer2';
function Business() {
    return (
        <Fragment>
            <Navbar3 hclass={'wpo-header-style-5'} />
            <PageTitle pageTitle={"Business"} pagesub={'Business'} />
            <div className="wpo-service-single-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-main-img">
                                        <img src={""} alt="" />
                                    </div>
                                    <div className="wpo-service-single-title">
                                        <h2>{"Business"}</h2>
                                    </div>
                                    <p>Comprehensive business legal services including incorporation, governance, transactional law,
                                        . and project management tailored to support corporate operations and growth.</p>
                                    <p>.</p>
                                    <div className="row mt-4">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={""} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={""} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>Business Incorporation and Reorganization</h3>
                                    </div>
                                    <p>Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id
                                        risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                                        sollicitudin diam.</p>
                                    <ul>
                                        <li>Business Incorporation and Reorganization:</li>
                                        <li>Business Transactional Law:</li>
                                        <li>Corporate Governance:</li>
                                        <li>Company Secretarial Services:</li>
                                        <li>Project Management Services:</li>
                                        <li>Non-Profit and Charities:</li>
                                    </ul>
                                </div> */}

                                {/* <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>Corporate Governance</h3>
                                    </div>
                                    <ul>
                                        <li>Non saed velit dictum quam risus pharetra esta.</li>
                                        <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                        <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                        <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                    </ul>
                                </div> */}

                                <Section title="Business Incorporation and Reorganization" content='We provide comprehensive support for business incorporation and reorganization, ensuring that your business is set up for success from the start. Our team assists with entity selection, structuring, and compliance to facilitate smooth and efficient operations.' />
                                <Section title="Business Transactional Law" content='Our expertise in business transactional law covers a wide range of commercial transactions, including contract  and agreements, negotiations and intellectual property. We ensure that your business transactions are executed seamlessly and in compliance with relevant regulations.' />
                                <Section title="Corporate Governance" content='We offer guidance on best practices in corporate governance, helping businesses establish effective governance structures and policies. Our services include advising on board composition, fiduciary duties, and regulatory compliance to promote transparency and accountability' />
                                <Section title="Company Secretarial Services" content='Our company secretarial services ensure that your business remains compliant with statutory and regulatory requirements. We handle corporate filings, maintain statutory registers, and provide support for board meetings and resolutions.' />
                                <Section title="Project Management Services" content='We assist with the legal aspects of project management, from planning and execution to completion. Our team provides legal oversight to ensure that your projects are delivered in accordance with contractual obligations.' />
                                <Section title="Non-Profit and Charities:" content='We offer legal services for non-profits and charities, including incorporation, governance, and compliance with charitable regulations. Our goal is to help these organizations achieve their missions while maintaining legal and regulatory compliance.' />

                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Related Service</h3>
                                    </div>
                                    <div className="wpo-service-area">
                                        <div className="row align-items-center">
                                            {Services.slice(0, 3).map((service, srv) => (
                                                <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                                    <div className="wpo-service-item">
                                                        <i className={`fi ${service.icon}`} ></i>
                                                        <h2>{service.sTitle}</h2>
                                                        {/* <p>This shows for al</p> */}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-contact-area">
                                        <div className="wpo-contact-title">
                                            <h2>Let's discuss</h2>
                                            <p>Get in touch with us </p>
                                        </div>
                                        <div className="wpo-contact-form-area">
                                            <Contact />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <ServiceSidebar /> */}
                    </div>
                </div>
            </div>
            <Footer2 />
            <Scrollbar />
        </Fragment>
    )
}

function Section({ title = "", content = "" }) {
    return <div className="wpo-service-single-item">
        <div className="wpo-service-single-title">
            <h3>{title}</h3>
        </div>
        <p>{content}</p>
    </div>
}

export default Business