import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import shape1 from '../../images/page-title-shape-1.png'
import shape2 from '../../images/page-title-shape-2.png'

const PageTitle = (props) => {
    return (
<<<<<<< HEAD
        <section className="page-title">
=======
        <section className="page-title" style={{background:`url("${props.img}")`}}>
>>>>>>> master
            <div className="page-inner-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <h2>{props.pageTitle}</h2>
                            <ol className="breadcrumb">
<<<<<<< HEAD
                                <li><Link to="/home">Home</Link></li>
=======
                                <li><Link to="/home3">Home</Link></li>
>>>>>>> master
                                <li><span>{props.pagesub}</span></li>
                            </ol>
                        </div>
                    </div>
                </div>
                <Fade top>
                    <div className="page-title-shape-1"></div>
                </Fade>
                <Fade top>
                    <div className="page-title-shape-2">
<<<<<<< HEAD
                        <img src={shape1} alt="" />
=======
                    <img src={shape1} alt="" />
>>>>>>> master
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="page-title-shape-3">
                        <img src={shape2} alt="" />
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default PageTitle;