import React, { Fragment, useEffect } from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { Link } from 'react-router-dom'
import Services from '../../api/service';
import Contact from './contact';
import Footer2 from '../../components/footer2/Footer2';
function Business() {
    useEffect(() => {
        document.getElementById("top").scrollIntoView({ behavior: 'smooth' });
    }, [])
    return (
        <Fragment>
            <Navbar3 hclass={'wpo-header-style-5'} />
            <div id="top"></div>
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
                                        <h2>{"Business Legal Services"}</h2>
                                    </div>
                                    <p>At our firm, we offer a holistic approach to business legal services, catering to companies of all sizes. Our focus is on providing practical, client-centered legal solutions that enable businesses to grow and thrive in today's complex regulatory environment. We ensure that every legal aspect of your business—from startup to restructuring—is carefully managed, so you can focus on what matters most: building your success.</p>
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

                                <Section title="Business Incorporation and Reorganization" content='Whether you’re starting a new venture or restructuring an existing one, the legal setup of your business is critical to its success. We guide clients through every step of incorporation, offering advice on entity selection (e.g., corporation, LLC, partnership), drafting founding documents, obtaining necessary permits, and ensuring full compliance with all applicable laws. Our reorganization services help businesses pivot or realign their structures, whether for operational efficiency, growth, or adapting to new market conditions. We make sure your business is set up to meet both current demands and future opportunities.' />
                                <Section title="Business Transactional Law" content='We specialize in facilitating seamless commercial transactions that drive your business forward. Our team assists in drafting, negotiating, and executing contracts for a broad range of business needs, including vendor agreements, employment contracts, supply chain deals, mergers, and acquisitions. We ensure that every transaction is legally sound, protects your interests, and aligns with your long-term business objectives. Additionally, we help with due diligence, IP protection, and compliance to minimize risks and secure favorable outcomes for your company.' />
                                <Section title="Corporate Governance" content='Effective corporate governance is essential for long-term success and stability. We provide expert legal guidance to help businesses establish strong governance frameworks that promote accountability, transparency, and ethical decision-making. We advise on the structuring and responsibilities of boards of directors, the implementation of corporate policies, and the management of internal and external compliance. Our services include the preparation of governance charters, board resolutions, and other governance-related documents, helping you stay compliant with evolving regulations while maintaining best practices.' />
                                <Section title="Company Secretarial Services" content='Navigating the corporate regulatory landscape can be time-consuming and complex. Our company secretarial services take the burden off your shoulders, ensuring that your business remains compliant with all statutory obligations. We maintain corporate records, manage filings with the relevant authorities, assist in organizing annual meetings, and draft necessary resolutions. Our team also supports the board of directors with critical insights and advice, ensuring that governance remains a priority and operations run smoothly.' />
                                <Section title="Project Management Services" content='Legal challenges often arise throughout the lifecycle of a project, from inception to completion. Our project management legal services are designed to provide comprehensive support, ensuring that each stage of the project adheres to legal and contractual obligations. Whether you’re managing large-scale infrastructure projects, software development, or construction, we offer services that cover risk assessment, contract negotiation, dispute resolution, and post-project compliance. Our goal is to help you complete your projects on time, within scope, and with minimal legal risks.' />
                                <Section title="Non-Profit and Charities:" content='We support non-profits and charitable organizations by offering specialized legal services that help them remain compliant while focusing on their missions. From incorporating your non-profit to obtaining tax-exempt status, managing charitable donations, and advising on governance practices, we provide end-to-end legal services that ensure your organization operates effectively within the regulatory framework. We also assist with grant compliance, fundraising laws, and board governance to safeguard your non-profit’s future.' />

                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Related Service</h3>
                                    </div>
                                    <div className="wpo-service-area">
                                        <div className="row align-items-center">
                                            {Services.slice(0, 3).map((service, srv) => (
                                                <Link className="col-lg-4 col-md-6 col-12" key={srv} to={"/service-single/" + (Number(srv) + 1)}>
                                                    <div className="wpo-service-item">
                                                        <i className={`fi ${service.icon}`} ></i>
                                                        <h2>{service.sTitle}</h2>
                                                        {/* <p>This shows for al</p> */}
                                                    </div>
                                                </Link>
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