import Accordion from 'react-bootstrap/Accordion';

import "../Asset/Css/services.css"
import { servicelogo } from "../config/componylogo"
import { teamImg,faq } from '../config/componylogo';

function Services() {
    return (
        <div className="services">
            <div className="container overflow-hidden">
                <div className="row gy-4 py-lg-4 py-2  aling-items-center justify-content-center justify-content-lg-start">
                    <div className="col-lg-7">

                        <div className="gap-3 my-4 service-content d-flex flex-column flex-md-row">
                            <h2 className="align-self-center align-self-lg-start">Services</h2>
                            <p className="mb-0 text-center text-lg-start">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
                        </div>

                    </div>
                </div>

            </div>


            <div className="container mb-3">
                <div className="row py-3 gy-3 justify-content-between justify-content-center ">

                    {servicelogo.map((services, i) => (
                        <div className="col-md-6 d-flex flex-column " key={i} >
                            <div className={`${services.background} d-flex flex-column flex-xl-row justify-content-around card-box py-4 px-4 gap-4  gap-lg-0`}>

                                <div className=" d-flex flex-column gap-5  ">
                                    <div className="d-flex flex-column align-self-start">
                                        <h3 className="mb-0">{services.title1}</h3>
                                        <h3 className="mb-0">{services.title2}</h3>

                                    </div>
                                    <a className="text-decoration-none d-none d-xl-block" href="#" >
                                        <div className="arricon d-flex align-items-center gap-3">
                                            <img src="images/Arrow 1.svg" className="img-fluid"></img>
                                            <p className="mb-0">Learn more</p>
                                        </div>

                                    </a>
                                </div>
                                <div className="illustration text-end">
                                    <img src={services.img} className="img-fluid"></img>
                                </div>
                                <a className="text-decoration-none d-xl-none" href="#" >
                                    <div className="arricon d-flex align-items-center gap-3">
                                        <img src="images/Arrow 1.svg" className="img-fluid"></img>
                                    </div>

                                </a>

                            </div>

                        </div>



                    ))}

                </div>

            </div>
            <div className="container mb-3">
                <div className="row bg-about mx-1 mx-lg-0  justify-content-center">
                    <div className="col-md-10 col-lg-6 d-flex align-items-center ">
                        <div className="content d-flex flex-column gap-3 align-items-lg-start py-3">
                            <div className="p-lg-4 p-3">
                                <h3 className="mb-0 fw-bold">Let’s make things happen</h3>
                                <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                                <button className="consultbtn">Get your free proposal</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-end starImg d-none d-lg-block">
                        <img src="images/star.png" className="img-fluid "></img>
                    </div>

                </div>


            </div>

            <div className="container  mb-3">
                <div className="row py-lg-4 py-2  gy-3 aling-items-center justify-content-center justify-content-lg-start">
                    <div className="col-lg-8">

                        <div className="gap-3 service-content d-flex flex-column flex-md-row">
                            <h2 className="align-self-center align-self-lg-start text-nowrap">Case Studies</h2>
                            <p className="mb-0 text-center text-lg-start">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
                        </div>

                    </div>

                    <div className="row my-lg-4 my-2  gy-3 case-studies py-3">
                        <div className="col-md-6 col-lg-4 d-flex">
                            <div className="case-content card-1 px-4 py-5">
                                <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                                <a className="text-decoration-none " href="#" >
                                    <div className="arricon d-flex align-items-center gap-3">
                                        <p className="mb-0 " >Learn more</p>
                                        <img src="images/Arrow 1.svg" className="img-fluid"></img>
                                    </div>

                                </a>


                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-flex">
                            <div className="case-content card-2 px-4 py-5">
                                <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                                <a className="text-decoration-none " href="#" >
                                    <div className="arricon d-flex align-items-center gap-3">
                                        <p className="mb-0 ">Learn more</p>
                                        <img src="images/Arrow 1.svg" className="img-fluid"></img>
                                    </div>

                                </a>


                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-flex">
                            <div className="case-content card-3 px-4 py-5">
                                <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                                <a className="text-decoration-none " href="#" >
                                    <div className="arricon d-flex align-items-center gap-3">
                                        <p className="mb-0">Learn more</p>
                                        <img src="images/Arrow 1.svg" className="img-fluid"></img>
                                    </div>

                                </a>


                            </div>
                        </div>


                    </div>
                </div>

            </div>
            <div className="container mb-3  ">
                <div className="row gy-3 aling-items-center justify-content-center justify-content-lg-start">
                    <div className="col-lg-8">

                        <div className="gap-3 service-content d-flex flex-column flex-md-row align-items-center">
                            <h2 className="align-self-center align-self-lg-start text-center">Our Working Process </h2>
                            <p className="mb-0 text-center text-lg-start  ">Step-by-Step Guide to Achieving Your Business Goals</p>
                        </div>

                    </div>
                    
                    <div className="row  gy-3 ">
                    <Accordion defaultActiveKey="0" className="custom-accordion ">
                        {
                            faq.map((items, i) => (

                                <Accordion.Item eventKey={i} key={i} className='mb-4'>
                                    <Accordion.Header>
                                        <div className='d-flex gap-3 align-items-center mx-2'>
                                            <h1 className="accordion-number mb-0">0{i+1}</h1>
                                            <h4 className='accordion-title mb-0'>{items.title}</h4>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                     <p className='accordintext'>
                                     During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                                     
                                     </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                    
                            ))

                        }

                            </Accordion>


                       

                    </div>
                </div>

            </div>
            <div className='container team mb-3' >
                <div className="row  py-lg-4 py-2 my-3 gy-3 aling-items-center justify-content-center justify-content-lg-start">
                    <div className="col-lg-5">

                        <div className="gap-3 service-content d-flex flex-column flex-md-row">
                            <h2 className="align-self-center align-self-lg-start">Team</h2>
                            <p className="mb-0 text-center text-lg-start">Meet the skilled and experienced team behind our successful digital marketing strategies</p>
                        </div>

                    </div>
                </div>

                <div className='row gy-4'>

                    {teamImg.map((team, i) => (
                        <div className="col-md-6 col-lg-4" key={i}>
                            <div className='teams-card'>
                                <div className='team-card-content d-flex justify-content-between'>
                                    <img src={team.img} className='img-fluid' alt="" />
                                    <div className='align-self-end text-center'>
                                        <h4 className='mb-0'>{team.name}</h4>
                                        <p className='mb-0'>{team.designation}</p>
                                    </div>
                                    <a className='text-decoration-none '>
                                        <img src='images/Social icon.svg' className='img-fluid'></img>
                                    </a>
                                </div>
                                <hr className='mt-4 fw-bold' />
                                <p className=''>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
                            </div>


                        </div>


                    ))}

                    <div className='text-end mt-4'>
                        <button className="consultbtn seemore  ">See all team</button>

                    </div>


                </div>

            </div>
        </div>

    )
}

export default Services
