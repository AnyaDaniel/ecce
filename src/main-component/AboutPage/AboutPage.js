import React, { Fragment } from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3';
<<<<<<< HEAD
import PageTitle from '../../components/pagetitle/PageTitle'
=======
import PageTitle from '../../components/pagetitle/pageTitle2'
>>>>>>> master
import Scrollbar from '../../components/scrollbar/scrollbar'
import MissionVission from '../../components/MissionVission/MissionVission';
import About4 from '../../components/about4/about4';
import Skill2 from '../../components/Skill2/Skill2';
import TeamSection from '../../components/TeamSection/TeamSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import FunFact from '../../components/FunFact/FunFact';
import Footer2 from '../../components/footer2/Footer2';
<<<<<<< HEAD
=======
import abimg from '../../images/service/About Us Banner 2.png'
>>>>>>> master


const AboutPage = () => {
    return (
        <Fragment>
            <Navbar3/>
<<<<<<< HEAD
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <MissionVission/>
            <About4/>
=======
            <PageTitle pageTitle={'About Us'} pagesub={'About'} img={abimg}  />
            <MissionVission/>
            <About4/>
            <div id="principal"></div>
>>>>>>> master
            <Skill2/>
            <TeamSection tClass={'wpo-team-section-s3'}/>
            {/* <Testimonial/> */}
            {/* <FunFact fClass={'wpo-fun-fact-section-s2 pt-0'}/> */}
            <Footer2/>
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
