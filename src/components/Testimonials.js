import React, {Component} from 'react';
import Title from './Title';
import Fade from 'react-reveal/Fade';
import Slider from 'react-slick';

class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 7000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className="testimonial_area_two" id="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Title stitle="Customer feedback" btitle="What our customers say about John.."/>
                            <Fade bottom cascade>
                                <div className="wow fadeInUp" data-wow-delay="0.3s">
                                    <p>Horse play chinwag bog-standard loo cup of char fanny around tinkety tonk old
                                        fruit bog me old mucker is bits and bobs, mush cheeky bugger nancy boy.!</p>
                                </div>
                                <div className="slider_nav">
                                    <i className="arrow_carrot-left_alt2 prev" onClick={this.previous}></i>
                                    <i className="arrow_carrot-right_alt2 next" onClick={this.next}></i>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial_slider_info">
                                <div className="stratup_testimonial_info d-flex align-items-center">
                                    <Slider ref={c => (this.slider = c)}
                                            className="testimonial_slider_four" {...settings}>
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../image/testimonials/brent-burghdorf.jpg')} alt=""/>
                                            </div>
                                            <p>Alexey was smart, fast and reliable.</p>
                                            <h5>Brent Burghdorf</h5>
                                            <h6>Co-Founder / Creative Director</h6>
                                            <h6 className="company">IMPRiNT Creative</h6>
                                        </div>
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../image/testimonials/daniel-barnett.jpg')} alt=""/>
                                            </div>
                                            <p>Alexey commits to timely schedules and the quality of his work speaks for
                                                itself. He really cares about what he does and does a great job.
                                                I would hire Alexey for any front-end development work again, involving
                                                HubSpot, Wordpress, and really anything else web-related.
                                                He particularly did a great job delivering responsive, mobile
                                                experiences.</p>
                                            <h5>Daniel Barnett</h5>
                                            <h6>Co-Founder & CMO</h6>
                                            <h6 className="company">Brightr</h6>
                                        </div>
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../image/testimonials/stephen-samson.jpg')} alt=""/>
                                            </div>
                                            <p>Alexey did everything very quick and professionally. Was honest about
                                                work he was not an expert in and did great work on what he is an expert
                                                it. We are very pleased with his work, will hire again.</p>
                                            <h5>Stephen Samson</h5>
                                            <h6>CEO</h6>
                                            <h6 className="company">accuhealth.</h6>
                                        </div>
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../image/testimonials/kurt-lambert.jpg')} alt=""/>
                                            </div>
                                            <p>Alexey did a great job with the email templates we tasked him with. He
                                                was great at communicating throughout the project and the development
                                                was high quality.</p>
                                            <h5>Kurt Lambert</h5>
                                            <h6>Vice President of SEO & DevOps</h6>
                                            <h6 className="company">Silverback Strategies</h6>
                                        </div>
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../image/testimonials/natalie-young.jpg')} alt=""/>
                                            </div>
                                            <p>Great to work with Alexey. He is super responsive and deliver the work
                                                fast. Would definitely hire him again.</p>
                                            <h5>Natalie Young</h5>
                                            <h6>CTO & Co-Founder</h6>
                                            <h6 className="company">XPath Media Inc.</h6>
                                        </div>
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../image/testimonials/nate-brochin.jpg')} alt=""/>
                                            </div>
                                            <p>Alexey was great. Very prompt responses, excellent communication. He was
                                                able to explain clearly and simply what steps he took to complete the
                                                assignment. I will hire again very soon!</p>
                                            <h5>Nate Brochin</h5>
                                            <h6>Sr. Brand Strategist</h6>
                                            <h6 className="company">Screaming Garlic Inc.</h6>
                                        </div>
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../image/testimonials/tavis-david.jpg')} alt=""/>
                                            </div>
                                            <p>Working with Alexey was a breeze. We had the challenge of creating an
                                                interactive module on our website and Alexey was able to provide a
                                                solution that we can reuse in the future. Communication was straight
                                                forward and clear between us despite us being located in different parts
                                                of the world. I would definitely work with Alexey again in the
                                                future.</p>
                                            <h5>Tavis David</h5>
                                            <h6>Digital Marketing Manager</h6>
                                            <h6 className="company">Airthings</h6>
                                        </div>
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../image/testimonials/carey-bardshaw.jpg')} alt=""/>
                                            </div>
                                            <p>Highly recommend working with Alexey. He is responsive and knows what he
                                                is doing. He was also able to suggest creative work-arounds to solve
                                                some of our challenges within Shopify. Will definitely hire him
                                                again.</p>
                                            <h5>Carey Bardshaw</h5>
                                            <h6>President and Co-Founder</h6>
                                            <h6 className="company">Creative Butter</h6>
                                        </div>
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../image/testimonials/chou-yang.jpg')} alt=""/>
                                            </div>
                                            <p>Alexey is fast, competent, extremely talented and skilled.</p>
                                            <h5>Chou Yang</h5>
                                            <h6>Product Marketing Manager</h6>
                                            <h6 className="company">mabl</h6>
                                        </div>
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../image/testimonials/laurence-carver.jpg')} alt=""/>
                                            </div>
                                            <p>We’ve worked with Alexey twice now and the level of his work a
                                                communication is spot on. Will 100% work with him again.</p>
                                            <h5>Laurence Carver</h5>
                                            <h6>Product & Design</h6>
                                            <h6 className="company">Blink</h6>
                                        </div>
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../image/testimonials/leonard-yambao.jpg')} alt=""/>
                                            </div>
                                            <p>Worked with Alex on a project that required a short turnaround and he
                                                knocked it out of the park!</p>
                                            <h5>Leonard Yambao</h5>
                                            <h6>Senior Campaign Strategist</h6>
                                            <h6 className="company">Kajabi</h6>
                                        </div>
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../image/testimonials/jon-cumberworth.jpg')} alt=""/>
                                            </div>
                                            <p>Alexey was great with communication and asked a lot of questions up front
                                                to make sure he understood what we were looking for. He stayed in
                                                contact and I never had to check in on him. Made a good landing page
                                                that we can reuse, so exactly what we were looking for.</p>
                                            <h5>Jon Cumberworth</h5>
                                            <h6>CEO</h6>
                                            <h6 className="company">Client Chat Live</h6>
                                        </div>
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../image/testimonials/tony-holbrook.jpg')} alt=""/>
                                            </div>
                                            <p>Alexey is a great resource that we will use again! We ended up getting
                                                tied up in other projects and he patiently helped us work through the
                                                project and jumped back in whenever we asked.
                                            </p>
                                            <h5>Tony Holbrook</h5>
                                            <h6>CEO / Co-Founder</h6>
                                            <h6 className="company">BestBox Fitness Inc.</h6>
                                        </div>
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../image/testimonials/logan-rittenberg.jpg')}
                                                     alt=""/>
                                            </div>
                                            <p>Alexey is great. Easy to work with, accommodating, and sticks to the
                                                timeline.</p>
                                            <h5>Logan Rittenberg</h5>
                                            <h6>Marketing Growth</h6>
                                            <h6 className="company">American Estate & Trust</h6>
                                        </div>
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../image/testimonials/aj-wilson.jpg')}
                                                     alt=""/>
                                            </div>
                                            <p>Alexey did a fantastic job with our project. He completed the work
                                                quickly, accurately, and communication was fast and easy. We will
                                                continue working with on future projects. I highly recommend him.</p>
                                            <h5>AJ Wilson</h5>
                                            <h6>COO</h6>
                                            <h6 className="company">Chris Kresser LLC</h6>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonials;
