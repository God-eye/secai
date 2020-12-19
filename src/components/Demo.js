import React, {Component} from 'react';
import Title from './Title';
import Slider from 'react-slick';

class Demo extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            pauseOnHover: true,
            autoplaySpeed: 5000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <section className="portfolio_slider_area" id="demo">
                <div className="container">
                    <Title tCenter="text-center" stitle="Marketplace" btitle="Trending projects"/>
                    <Slider {...settings} className="portfolio_slider">
                        <div className="p_item">
                            <div className="portfolio_content">
                                <a href="Portfolio"><img src={require('../image/new1.jpg')} alt=""/></a>
                                <div className="text">
                                    <a href="Portfolio"><h4>Poluchoromatic Logo</h4></a>
                                    <a href="Portfolio#">Branding Design</a>
                                </div>
                            </div>
                        </div>
                        <div className="p_item">
                            <div className="portfolio_content">
                                <a href="Portfolio"><img src={require('../image/portfolio1.jpg')} alt=""/></a>
                                <div className="text">
                                    <a href="Portfolio"><h4>Poluchoromatic Logo</h4></a>
                                    <a href="Portfolio#">Logo Design</a>
                                </div>
                            </div>
                        </div>
                        <div className="p_item">
                            <div className="portfolio_content">
                                <a href="Portfolio"><img src={require('../image/portfolio2.jpg')} alt=""/></a>
                                <div className="text">
                                    <a href="Portfolio"><h4>Creative Design</h4></a>
                                    <a href="Portfolio#">App Design</a>
                                </div>
                            </div>
                        </div>
                        <div className="p_item">
                            <div className="portfolio_content">
                                <a href="Portfolio"><img src={require('../image/portfolio1.jpg')} alt=""/></a>
                                <div className="text">
                                    <a href="Portfolio"><h4>John Portfolio Logo</h4></a>
                                    <a href="Portfolio#">UI/UX Design</a>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        )
    }
}

export default Demo;
