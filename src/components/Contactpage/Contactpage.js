import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const Contactpage = () => {

    return(
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-place"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Address</h2>
                                            <p>#400 - 111 2nd Avenue South, Saskatoon, SK S7K 1K6</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email Us</h2>
                                            <p>admin@eccelaw.com</p>
<<<<<<< HEAD
=======
                                            <br></br>
>>>>>>> master
                                            {/* <p>helloyou@gmail.com</p> */}
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                                            <p>+1 (306)-205-4081</p>
<<<<<<< HEAD
=======
                                            <br></br>
>>>>>>> master
                                            {/* <p>+1 800 123 654 987</p> */}
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="wpo-contact-title">
<<<<<<< HEAD
                            <h2>Have Any Question?</h2>
                            <p>It is a long established fact that a reader will be distracted
                                content of a page when looking.</p>
=======
                            <h2>Reach Out To Us</h2>
                            <p>We are here for you. Tell us how we may help you.</p>
>>>>>>> master
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm/>
                        </div>
                    </div>                
                </div>
            </div> 
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.315351968981!2d-106.66694352344214!3d52.12858487196117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6d7116aaaab%3A0xb4144d19264fa27!2s111%202%20Ave%20S%20Unit%20400%2C%20Saskatoon%2C%20SK%20S7K%201K6%2C%20Canada!5e0!3m2!1sen!2sng!4v1721768505170!5m2!1sen!2sng"></iframe>               
                 </div>
            </section>
        </section>
     )
        
}

export default Contactpage;
