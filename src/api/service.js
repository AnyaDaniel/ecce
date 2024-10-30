import simg from '../images/service/1.jpg'
import simg2 from '../images/service/2.jpg'
import simg3 from '../images/service/3.jpg'
import simg4 from '../images/service/4.jpg'

import sImgS1 from '../images/service-single/img-1.jpg'
import sImgS2 from '../images/service-single/img-2.jpg'
import sImgS3 from '../images/service-single/img-3.jpg'
import sImgS4 from '../images/service-single/img-4.jpg'

import sSingleimg1 from '../images/service-single/2.jpg'
import sSingleimg2 from '../images/service-single/3.jpg'

import bizImg from  "../images/service/Services icons SVG/3.png"
import realEstate from  "../images/service/Services icons SVG/2.png"
import estate from  "../images/service/Services icons SVG/1.png"
import ai from "../images/service/Services icons SVG/AI.svg"




const Services = [
    {
        Id: '1',
        sImg:simg,
        sImgS:sImgS1,
        sTitle: 'Business',
        description:'Comprehensive business legal services including incorporation, governance, transactional law, and project management tailored to support corporate operations and growth',
        des2:'',
        des3:'',
        des4:"",
        icon:<img src={bizImg} alt="business"/>,
        ssImg1:sSingleimg1,
        ssImg2:sSingleimg2,
    },
    {
        Id: '2',
        sImg:simg2,
        sImgS:sImgS2,
        sTitle: 'Real Estate',
        description:'Expert legal assistance in commercial and residential real estate transactions, leasing, and tenancy matters, ensuring smooth and compliant property dealings.',
        des2:'',
        des3:'',
        // icon:'flaticon-team',
        ssImg1:sSingleimg1,
        ssImg2:sSingleimg2,
        icon:<img src={realEstate} alt="real estate"/>
    },
    {
        Id: '3',
        sImg:simg3,
        sImgS:sImgS3,
        sTitle: 'Wills & Estates',
        description:'Specialized estate planning and administration services, including wills, powers of attorney, and probate, to manage and transfer assets efficiently and legally.',
        des2:'',
        des3:'',
        // icon:'flaticon-taxes',
        ssImg1:sSingleimg1,
        ssImg2:sSingleimg2,
        icon:<img src={estate} alt="estate"/>
    },
    {
        Id: '4',
        sImg:simg4,
        sImgS:sImgS4,
        sTitle: ' AI Governance',
        description:'Legal guidance on AI implementation and compliance, addressing ethical considerations, regulatory requirements, and governance to ensure responsible AI usage.',
        des2:'',
        des3:'',
        // icon:'flaticon-tax',
        ssImg1:sSingleimg1,
        ssImg2:sSingleimg2,
        icon:<img src={ai} alt="estate"/>

    }
]    

export default Services;