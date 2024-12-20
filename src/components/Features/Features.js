import React from 'react'
import { Link } from 'react-router-dom'
import fImg1 from '../../images/features/Business Transactions.png'
import fImg2 from '../../images/features/Real Estate.png'

const Features = (props) => {
    return (
        <section className="wpo-features-section">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-lg-6 col-md-6 col-12">
                        <div className="wpo-features-item">
                            <div className="wpo-features-img">
                                <img src={fImg1} alt="" />
                            </div>
                            <div className="wpo-features-text">
                                <h4><Link to="/service-single/1">Business Transaction <i
                                    className="fi flaticon-long-arrow-pointing-to-the-right"></i></Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-12">
                        <div className="wpo-features-item">
                            <div className="wpo-features-img">
                                <img src={fImg2} alt="" />
                            </div>
                            <div className="wpo-features-text">
                                <h4><Link to="/service-single/2">Real Estate <i
                                    className="fi flaticon-long-arrow-pointing-to-the-right"></i></Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;