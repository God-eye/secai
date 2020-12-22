import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal/';
import Title from './Title';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: {name: "", fromEmail: "", subject: "", body: "", phone: ""},
            submitting: false,
            error: null,
            sent: false,
            validationErrors: {name: "", fromEmail: "", subject: "", phone: ""},
            errorCount: null,
            successMessage: ""
        }
    }

    isValidForm = (errors, message) => {
        let valid = true;
        if (!message.name || !message.fromEmail || !message.subject || !message.phone || !message.body) {
            return false;
        }
        Object.values(errors).forEach(
            val => val.length > 0 && (valid = false)
        );
        return valid;
    }

    onClick = async event => {
        event.preventDefault()
        if (!this.isValidForm(this.state.errors, this.state.message)) {
            return
        }
        this.setState({submitting: true})

        const {name, fromEmail, subject, body, phone} = this.state.message

        const response = await fetch("https://alexkutalo.com/email", {
            method: "post",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            body: new URLSearchParams({name, fromEmail, subject, body, phone}).toString(),
        })
        if (response.status === 200) {
            this.setState({
                error: null,
                submitting: false,
                sent: true,
                message: {
                    name: "",
                    fromEmail: "",
                    subject: "",
                    body: "",
                    phone: "",
                },
                successMessage: "Thank you for contacting me."
            })
        } else {
            const json = await response.json()
            this.setState({
                error: json.error,
                submitting: false,
            })
        }
    }

    onChange = event => {
        const name = event.target.getAttribute("name")
        const value = event.target.value;
        const errors = this.state.validationErrors;
        switch (name) {
            case 'name':
                errors.name =
                    value.length < 3
                        ? 'Name must be at least 3 characters long!'
                        : '';
                break;
            case 'subject':
                errors.subject =
                    value.length < 3
                        ? 'Subject must be at least 3 characters long!'
                        : '';
                break;
            case 'phone':
                errors.phone =
                    value.length < 9
                        ? 'Phone must be at least 9 characters long!'
                        : '';
                break;
            case 'fromEmail':
                errors.fromEmail =
                    (/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i).test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            default:
                break;
        }
        this.setState({errors, message: {...this.state.message, [name]: value}})
    }

    render() {
        const {validationErrors, message, submitting} = this.state;
        return (
            <section className="contact-area contact-area-two" id="contacts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="get_info">
                                <Title stitle="Get in Touch" btitle="Talk or Meet with Me"/>
                                <div className="media get_item">
                                    <i className="flaticon-phone"></i>
                                    <div className="media-body">
                                        <h6>Call Me Now</h6>
                                        <p>206-432-5221</p>
                                    </div>
                                </div>
                                <div className="media get_item">
                                    <i className="flaticon-chat"></i>
                                    <div className="media-body">
                                        <h6>Contact Me on Skype</h6>
                                        <p>live:alhappyma</p>
                                    </div>
                                </div>
                                <div className="media get_item">
                                    <i className="flaticon-pin"></i>
                                    <div className="media-body">
                                        <h6>Get Me Here</h6>
                                        <p>98102 - Seattle, WA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <Reveal effect="fadeInRight" duration={800}>
                                <div className="input_form">
                                    <Title stitle="Contact us" btitle="Let me know here Know Here"/>
                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text"
                                                       id="name"
                                                       name="name"
                                                       className="form-control"
                                                       placeholder="Your Name*"
                                                       value={message.name}
                                                       onChange={this.onChange}
                                                />
                                                {validationErrors.name.length > 0 &&
                                                <span className='error'>{validationErrors.name}</span>} &zwnj;
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text"
                                                       id="fromEmail"
                                                       name="fromEmail"
                                                       className="form-control"
                                                       placeholder="Your Email*"
                                                       value={message.fromEmail}
                                                       onChange={this.onChange}
                                                />
                                                {validationErrors.fromEmail.length > 0 &&
                                                <span className='error'>{validationErrors.fromEmail}</span>} &zwnj;
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text"
                                                       id="subject"
                                                       name="subject"
                                                       className="form-control"
                                                       placeholder="Subject*"
                                                       value={message.subject}
                                                       onChange={this.onChange}
                                                />
                                                {validationErrors.subject.length > 0 &&
                                                <span className='error'>{validationErrors.subject}</span>} &zwnj;
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text"
                                                       id="phone"
                                                       name="phone"
                                                       className="form-control"
                                                       placeholder="Phone*"
                                                       value={message.phone}
                                                       onChange={this.onChange}
                                                />
                                                {validationErrors.phone.length > 0 &&
                                                <span className='error'>{validationErrors.phone}</span>} &zwnj;
                                            </div>
                                        </div>
                                        <textarea
                                            name="body"
                                            id="body"
                                            className="form-control"
                                            rows="6"
                                            placeholder="Your Message ..."
                                            value={message.body}
                                            onChange={this.onChange}
                                        />
                                        <div className="success">{this.state.successMessage}&zwnj;</div>
                                        <button
                                            type="submit"
                                            className="btn send_btn theme_btn"
                                            disabled={submitting}
                                            onClick={this.onClick}
                                        >
                                            Send Message
                                        </button>

                                    </form>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;
