import React, { Fragment } from 'react';
import Features from '../../components/Features/Features';
import About2 from '../../components/about2/about2';
import Footer from '../../components/footer/Footer';
import Hero2 from '../../components/hero2/Hero2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import Skill from '../../components/Skill/Skill';
import Logo from '../../images/logo.png'
import Navbar3 from '../../components/Navbar3/Navbar3';


const HomePage3 = () => {
    return (
        <Fragment>
            <Navbar3 topbarNone={'wpo-header-style-1'} hclass={'wpo-header-style-1'} Logo={Logo} />
            <Hero2 />
            <Features />
            <ServiceSectionS2 />
            <About2 />
            <Skill />
            {/* <FunFact fClass={'wpo-fun-fact-section-s2'}/>
            <TeamSection tClass={'wpo-team-section-s2'}/>
            <Subscribe/>
            <ProjectSection2/> */}
            <Testimonial2 />
            {/* <BlogSection/>
            <PartnerSectionS2/> */}
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage3;