import React, { Fragment, useEffect } from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { Link } from 'react-router-dom'
import Services from '../../api/service';
import ServiceSidebar from './sidebar'
import Contact from './contact';
import Footer2 from '../../components/footer2/Footer2';
function RealEstate() {
    useEffect(() => {
        document.getElementById("top").scrollIntoView({ behavior: 'smooth' });
    }, [])
    return (
        <Fragment>
            <div id="top"></div>
            <Navbar3 hclass={'wpo-header-style-5'} />
            <PageTitle pageTitle={"Real Estate"} pagesub={'Real Estate'} />
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
                                        <h3>{"Real Estate Legal Services"}</h3>
                                    </div>
                                    <p> We provide strategic legal counsel in real estate matters, assisting clients with both commercial and residential transactions. Whether you're a developer, property manager, landlord, or tenant, we guide you through the legal complexities to ensure smooth and successful property dealings.</p>
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

                                <Section title="Commercial Real Estate: " content='Commercial real estate transactions often involve significant financial and legal risks. Our legal team provides detailed due diligence, helping you navigate complex contracts, financing, leasing arrangements, acquisitions, and dispositions. We assist with negotiating terms, resolving disputes, and ensuring compliance with zoning laws, environmental regulations, and other legal requirements. Our deep understanding of commercial real estate law ensures that your transactions are profitable, legally sound, and timely executed.' />
                                <Section title="Residential Real Estate:" content='Our residential real estate services provide expert legal advice and representation for buyers, sellers, and landlords. Whether you are purchasing a home, selling property, or navigating a residential lease, we ensure that your transactions are secure, compliant, and in your best interest. We handle all aspects of the process, from offer negotiations to closing documentation, providing peace of mind at every stage. Our team ensures that title searches, property inspections, and financing arrangements are thoroughly reviewed to protect your investment.' />
                                <Section title=" Residential Tenancies: " content='For landlords and tenants alike, we provide dedicated legal support in navigating tenancy laws. Our services include drafting and reviewing lease agreements, resolving landlord-tenant disputes, and representing clients in eviction proceedings. We ensure that all parties are compliant with applicable tenancy laws, and we strive to resolve disputes quickly and effectively to minimize disruption and legal risk.' />

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
                                            <p>Get in touch with us</p>
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

export default RealEstate