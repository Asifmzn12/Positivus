import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../Asset/Css/footer.css"
function Footer() {
    return (

        <div className=" fw-medium">
            <div className="container bg-footer py-lg-4 px-3">
                <footer className=" pt-4">
                    <div className="row p-lg-4 p-2 gy-4 justify-content-between align-items-center">
                        <div className="col-lg-3">
                            <img src="images/footerlogo.png" className="img-fluid" alt="footer-logo" />

                        </div>
                        <div className="col-lg-7">
                            <ul className="  navlinks mb-0 list-unstyled d-flex gap-4 flex-column flex-md-row justify-content-start justify-content-lg-center">
                                <li><a href="">About us</a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">Use Cases</a></li>
                                <li><a href="">Pricing</a></li>
                                <li><a href="">Blog</a></li>


                            </ul>

                        </div>

                        <div className="col-lg-2">
                            <div className="social d-flex align-items-center gap-2 justify-content-start justify-content-lg-end">
                                <div className="social-icons d-flex gap-3 justify-content-center justify-content-md-start">
                                    <a href="https://linkedin.com/in/asif-ali-mzn" target="_blank" rel="noreferrer">
                                        <i className="fa-brands fa-linkedin-in" title="LinkedIn"></i>
                                    </a>
                                    <a href="https://wa.me/9758680778" target="_blank" rel="noreferrer">
                                        <i className="fa-brands fa-facebook-f" title="facebook"></i>
                                    </a>
                                    <a href="mailto:aliiasif3958@gmail.com" target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-x-twitter" title='twitter'></i>                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="row gy-4 p-lg-4 p-2 justify-content-between align-items-center">
                        <div className="col-md-4 contactdetails d-flex flex-column gap-3">
                        <h4>Contact : </h4>
                            <p>Email: info@positivus.com</p>
                            <p>Phone: 555-567-8901</p>
                            <p>Address: 1234 Main St <br></br>
                            Moonstone City, Stardust State 12345</p>


                        </div>
                        <div className="col-lg-7">
                            <Form>
                                <div className='row gy-3 justify-content-center'>
                                    <div className="col-md-6">
                                        <Form.Group className="" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter email" className='emailbox' />

                                        </Form.Group>

                                    </div>
                                    <div className='col-md-6 '>
                                        <Button className='formbtn fw-medium' type="submit">
                                          Subscribe to news
                                        </Button>

                                    </div>

                                </div>


                            </Form>


                        </div>
                        
                     </div>

                     <div className='bordr-bottom mt-3'></div>
                     <div className=' p-lg-4 p-2 footer-bottom d-flex flex-column flex-md-row gap-3 mt-3 '>
                      <p>© 2024 Positivus. All Rights Reserved. </p>
                       <a href='' className='text-light'>Privacy Policy</a>

                       <p>Made by Asif Ali</p>
                     
                     </div>

                </footer>

            </div>
        </div>

    )
}

export default Footer
