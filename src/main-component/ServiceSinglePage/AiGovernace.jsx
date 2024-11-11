import React, { Fragment, useEffect } from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { Link } from 'react-router-dom'
import Services from '../../api/service';
import Contact from './contact';
import Footer2 from '../../components/footer2/Footer2';
function AiGovernace() {
    useEffect(() => {
        document.getElementById("top").scrollIntoView({ behavior: 'smooth' });
    }, [])
    return (
        <Fragment>
            <Navbar3 hclass={'wpo-header-style-5'} />
            <div id="top"></div>
            <PageTitle pageTitle={"AI Governance"} pagesub={'AI Governance'} />
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
                                        <h3>{"AI Governance"}</h3>
                                    </div>
                                    <p> Our AI governance services help businesses navigate the legal complexities surrounding the implementation and use of artificial intelligence. We provide guidance on compliance with data privacy regulations, intellectual property rights, and ethical considerations. As AI becomes a larger part of business operations, we ensure that your AI systems are legally sound, compliant, and aligned with ethical standards. From drafting AI policies to managing risks, we help businesses integrate AI responsibly and effectively.</p>
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

                                {/* <Section title="Wills" content='A properly drafted will is the cornerstone of any estate plan. We work closely with our clients to understand their specific needs, ensuring that their assets are distributed as intended. Our wills are designed to minimize legal challenges and ensure a smooth transition of assets to beneficiaries. We also offer ongoing support for updating wills as circumstances evolve.' />
                                <Section title="Power of Attorney" content='A power of attorney is an essential document that ensures your financial and legal affairs are managed by a trusted individual if you are unable to do so yourself. We draft tailored power of attorney documents, providing peace of mind that your affairs will be handled according to your preferences in the event of incapacity.' />
                                <Section title="Health Care Directives" content='Health care directives are legal instructions for your medical treatment should you become incapacitated. We help clients establish clear directives, ensuring that their treatment preferences are respected and followed by medical professionals and family members. Our health care directive services provide peace of mind that your healthcare decisions will reflect your values and desires.' />
                                <Section title="Estate Administration and Probate" content='Administering an estate can be a complex process that requires legal expertise. We guide executors and administrators through the probate process, ensuring that all assets are properly managed and distributed in accordance with the deceased’s will. Our team handles the legal complexities of probate, from validating wills to settling disputes, ensuring that the estate is administered efficiently and in compliance with the law.' /> */}

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

export default AiGovernace