import React, { Fragment } from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Services from '../../api/service';
import ServiceSidebar from './sidebar'
import Contact from './contact';
import Footer2 from '../../components/footer2/Footer2';
import Business from './Business';
import RealEstate from './RealEstate';
import Estate from './Estate';
import AiGovernace from './AiGovernace';

const ServiceSinglePage = (props) => {
    const { id } = useParams()

    // const serviceDetails = Services.find(item => item.Id === id)

    // const ClickHandler = () => {
    //     window.scrollTo(10, 0);
    // }

    const pages = [<></>, <Business />, <RealEstate />,<Estate />,<AiGovernace/>]

    return pages[Number(id)]
};
export default ServiceSinglePage;
