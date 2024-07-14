import "../Asset/Css/footer.css"
function Footer() {
    return (

        <div className=" py-md-4 fw-medium">
            <div className="container bg-footer">
                <footer className=" pt-4">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-md-4">
                      <img src="images/logo.svg" className="img-fluid" alt="footer-logo" />
                      
                      </div>
                      <div className="col-md-4">
                      <ul className=" list-unstyled d-flex gap-4 flex-column flex-md-row">
                          <li><a href="">About us</a></li>
                          <li><a href="">Services</a></li>
                          <li><a href="">Use Cases</a></li>
                          <li><a href="">Pricing</a></li>
                          <li><a href="">Blog</a></li>


                      </ul>
                      
                      </div>

                      <div className="col-md-4">
                      <div className="social d-flex align-items-center gap-2">
                              <div className="social-icons d-flex gap-3 justify-content-center justify-content-md-start">
                              <a href="https://linkedin.com/in/asif-ali-mzn" target="_blank" rel="noreferrer">
                                  <i className="fa-brands fa-linkedin-in" title="LinkedIn"></i>
                              </a>
                                  <a href="https://wa.me/9758680778" target="_blank" rel="noreferrer">
                                      <i className="fa-brands fa-facebook-f" title="facebook"></i>
                                  </a>
                                  <a href="mailto:aliiasif3958@gmail.com" target="_blank" rel="noreferrer">
                                      <i className="fa-regular fa-envelope" title="Mail"></i>
                                  </a>
                              </div>

                          </div>
                      
                      </div>

                    </div>

                </footer>

            </div>
        </div>

    )
}

export default Footer
