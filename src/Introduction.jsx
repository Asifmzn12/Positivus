/* eslint-disable react/no-unescaped-entities */

// import MySwiper from "./Components/HeroSwiper";
import { logo } from "./config/componylogo"
import "./Asset/Css/hero.css"
function Introduction() {


    return (
        <>
            <section>
                <div className="container hero-section py-lg-5 py-3 overflow-hidden">
                    <div className="row d-md-flex d-none py-4 gy-4 justify-content-center align-items-center">
                        <div className="col-md-6 ">
                            <div className="content d-flex flex-column gap-3 align-items-lg-start">
                                <div className="">
                                    <h1 className="">Navigating the digital landscape for success</h1>
                                    <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                                    <button className="consultbtn">Book a consultation</button>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 ">

                            <img src="images/Illustration.png" className="img-fluid "></img>

                        </div>
                    </div>
                    <div className="row d-md-none  py-4 gy-4 justify-content-center align-items-center">
                        <div className="col-12 ">
                            <div className="content d-flex flex-column gap-3 align-items-lg-start">
                                <div className="d-flex flex-column gap-3">
                                    <h1 className="">Navigating the digital landscape for success</h1>
                                    <img src="images/Illustration.png" className="img-fluid "></img>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 ">
                            <div className="content-mobile">
                                <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                                <button className="consultbtn w-100 ">Book a consultation</button>

                            </div>



                        </div>
                    </div>
                </div>
                <div className="container compony-logos">
                    <div className="row mx-1 mx-lg-0 gy-3 justify-content-center">
                        {logo.map((logos,i) => (
                            <div className="col-md-2 col-6 " key={i}>
                                <img src={logos.img} className="img-fluid" alt="logos" ></img>
                            </div>

                        ))}

                    </div>




                </div>




            </section>

        </>

    )
}

export default Introduction
