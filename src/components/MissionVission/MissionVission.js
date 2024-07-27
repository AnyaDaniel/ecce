import React from 'react'
import simg from '../../images/mission-shape.png'


const MissionVission = (props) => {
    return (
        <section className="wpo-mission-vission-section section-padding">
            <div className="container">
                <div className="row">
                    {/* <div className="col-lg-12 col-md-12 col-12">
                        <div className="wpo-mission-item">
                            <div className="wpo-mission-text">
                                <h2>Our Mission and Vission</h2>
                                <p>ECCE LAW is known for its client-centric approach and unwavering commitment to professionalism. We pride ourselves on delivering excellent and satisfactory legal service. 
We are dedicated to providing timely and transparent services, ensuring that clients are always well-informed and confident throughout their legal journey. We understand that every client and case is unique, which is why we approach each situation with empathy, taking the time to listen and tailor our solutions to meet individual needs.
At ECCE LAW, innovation is at the heart of our practice. We leverage the latest legal technologies and methodologies to deliver innovative solutions that set us apart from others. Our focus on excellent work and expertise ensures that we consistently achieve the best possible outcomes for our clients.
</p>
                                <h5>Lorem Ipsum is simply dummy text of the printing
                                    has been the industry standard dummy text ever since
                                    unknown printer took galley.</h5>
                            </div>
                            <div className="shape-1"></div>
                            <div className="shape-2"><img src={simg} alt=""/></div>
                        </div>
                    </div> */}
                    <div className="col-lg-8 col-md-12 col-12 mx-auto">
                        <div className="wpo-vission-item">
                            <div className="wpo-vission-text">
                            <h2 className='text-center'>About Ecce Law</h2>
                                <p>ECCE LAW is known for its client-centric approach and unwavering commitment to professionalism. We pride ourselves on delivering excellent and satisfactory legal service. 
                                We are dedicated to providing timely and transparent services, ensuring that clients are always well-informed and confident throughout their legal journey. We understand that every client and case is unique, which is why we approach each situation with empathy, taking the time to listen and tailor our solutions to meet individual needs.
                                At ECCE LAW, innovation is at the heart of our practice. We leverage the latest legal technologies and methodologies to deliver innovative solutions that set us apart from others. Our focus on excellent work and expertise ensures that we consistently achieve the best possible outcomes for our clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionVission;