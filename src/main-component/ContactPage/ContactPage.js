import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3';
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '../../images/logo.png'
import Footer2 from '../../components/footer2/Footer2';
<<<<<<< HEAD
=======
import abimg from '../../images/service/Contact us banner 2.png'
>>>>>>> master

const ContactPage =() => {
    return(
        <Fragment>
            <Navbar3 Logo={Logo}/>
<<<<<<< HEAD
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'}/> 
=======
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'}  img={abimg} /> 
>>>>>>> master
            <Contactpage/>
            <Footer2/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;

