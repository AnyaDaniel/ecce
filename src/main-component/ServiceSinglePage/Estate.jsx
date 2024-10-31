import React, { Fragment, useEffect } from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { Link } from 'react-router-dom'
import Services from '../../api/service';
import Contact from './contact';
import Footer2 from '../../components/footer2/Footer2';
function Estate() {
    useEffect(() => {
        document.getElementById("top").scrollIntoView({ behavior: 'smooth' });
    }, [])
    return (
        <Fragment>
            <Navbar3 hclass={'wpo-header-style-5'} />
            <div id="top"></div>
            <PageTitle pageTitle={"Wills & Estates"} pagesub={'Wills & Estates'} />
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
                                        <h3>{"Wills & Estate"}</h3>
                                    </div>
                                    <p> Expert legal assistance in commercial and residential real estate transactions, leasing, and tenancy matters, ensuring smooth and compliant property dealings..</p>
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

                                <Section title="Wills" content='We help clients draft and update wills to ensure that their final wishes are clearly expressed and legally binding. Our services include estate planning and ensure smooth asset distribution.' />
                                <Section title="Power of Attorney" content='Our power of attorney services ensure that your financial and legal affairs are managed according to your wishes if you become unable to do so yourself. We draft and execute power of attorney documents tailored to your specific needs.' />
                                <Section title="Health Care Directives" content='We assist clients in preparing health care directives that outline their medical treatment preferences. These directives provide guidance to healthcare providers and family members in the event of incapacitation.' />
                                <Section title="Estate Administration and Probate" content='We offer comprehensive estate administration services, guiding executors and administrators through the probate process. Our team handles the legal complexities of validating wills and administering estates, ensuring that estates are settled efficiently and that the probate process is completed smoothly and in compliance with relevant regulations. ' />

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

export default Estate