import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactapi } from "./config/contactcustomapi";

function Contact() {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
    });

    const [formErrors, setFormErrors] = useState({});

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

    return (
        <div className="container py-5">
            <ToastContainer />
            <h2 className="text-center mb-md-5 mb-4">Contact</h2>

            <div className="row justify-content-md-around justify-content-center gap-md-2 gap-lg-0 gap-4">
                <div className="col-md-5 d-flex flex-column gap-3 gap-lg-5">
                    {contactapi.map((contactinfo, index) => (
                        <div key={index} className="d-flex contact-info align-items-center">
                            <div>
                                <i>{<contactinfo.icon />}</i>
                            </div>
                            <div>
                                <h5>{contactinfo.heading}</h5>
                                <h6>{contactinfo.text}</h6>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-7">
                    <form onSubmit={sendEmail} className="contact-form">
                        <div className="row email-me">
                            <div className="col-md-6">
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
                            <div className="col-md-6">
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
                            <div className="col-md-12">
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Enter Subject"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                                {formErrors.subject && <p className="error-message ms-2 text-danger">{formErrors.subject}</p>}
                            </div>
                            <div className="col-md-12 mb-2">
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="60"
                                    rows="8"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                                {formErrors.message && <p className="ms-2 error-message text-danger">{formErrors.message}</p>}
                            </div>
                            <div className="col-md-12">
                                <button className="site-btn-outline" type="submit">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
