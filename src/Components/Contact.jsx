import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Asset/Css/contact.css"

function Contact() {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
    });

    const [formErrors, setFormErrors] = useState({});
    const [rows, setRows] = useState(2); // Default rows

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.user_name.trim()) {
            errors.user_name = "This field is required";
            isValid = false;
        }

        if (!formData.user_email.trim()) {
            errors.user_email = "This field is required";
            isValid = false;
        } else if (!isValidEmail(formData.user_email)) {
            errors.user_email = "Invalid email address";
            isValid = false;
        }

        if (!formData.subject.trim()) {
            errors.subject = "This field is required";
            isValid = false;
        }

        if (!formData.message.trim()) {
            errors.message = "This field is required";
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleNameChange = (e) => {
        const { value } = e.target;
        const regex = /^[a-zA-Z\s]*$/; // Only allows alphabetic characters and spaces
        if (regex.test(value)) {
            setFormData({ ...formData, user_name: value });
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            emailjs.sendForm("service_req", "template_01xbp3a", e.target, "m0vWn-8VGOdFYFC_k")
                .then((result) => {
                    console.log(result);
                    toast.success("Thank you for Your Message");
                }, (error) => {
                    console.log(error);
                    toast.error("Failed to send message. Please try again later.");
                });

            setFormData({
                user_name: "",
                user_email: "",
                subject: "",
                message: "",
            });
        }
    };

    const adjustTextareaRows = () => {
        if (window.innerWidth >= 991 && window.innerWidth <= 1399) {
            setRows(4);
        } else {
            setRows(8);
        }
    };

    useEffect(() => {
        adjustTextareaRows();
        window.addEventListener('resize', adjustTextareaRows);
        return () => window.removeEventListener('resize', adjustTextareaRows);
    }, []);

    return (
        <div className="container mb-3">
            <div className="row py-lg-4 py-2 my-3  aling-items-center justify-content-center justify-content-lg-start">
                <div className="col-lg-6">
                    <div className="gap-3 service-content d-flex flex-column flex-md-row align-items-center">
                        <h2 className="align-self-center align-self-lg-start">Contact</h2>
                        <p className="mb-0 text-center text-lg-start">Connect with Us: Let`&apos`ss Discuss Your Digital Marketing Needs</p>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <div className="row contact-row px-lg-4 px-1 py-5 overflow-x-hidden">
                <div className="col-lg-6">
                    <form onSubmit={sendEmail} className="contact-form">
                        <div className="row">
                            <div className="col-12 mb-3">
                                <label className="mb-2">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    id="user_name"
                                    placeholder="Enter Your Name"
                                    value={formData.user_name}
                                    onChange={handleNameChange}
                                />
                                {formErrors.user_name && <p className="error-message ms-2 text-danger">{formErrors.user_name}</p>}
                            </div>
                            <div className="col-12 mb-3">
                                <label className="mb-2">Email <sup className="fw-bold">*</sup></label>
                                <input
                                    type="email"
                                    name="user_email"
                                    id="user_email"
                                    placeholder="Enter Your Email"
                                    value={formData.user_email}
                                    onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                                />
                                {formErrors.user_email && <p className="error-message ms-2 text-danger">{formErrors.user_email}</p>}
                            </div>
                            <div className="col-12 mb-3">
                                <label className="mb-2">Message <sup className="fw-bold">*</sup></label>
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="60"
                                    rows={rows}
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                                {formErrors.message && <p className="ms-2 error-message text-danger">{formErrors.message}</p>}
                            </div>
                            <div className="col-md-12">
                                <button className="consultbtn w-100" type="submit">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-6 d-none d-lg-block text-end contact-us-img">
                    <img src="images/contact-illustration.png" className="img-fluid" alt="Contact Us" />
                </div>
            </div>
        </div>
    );
}

export default Contact;
