import React, {Component} from 'react';
import Clientsliders from 'react-slick';
import Title from './Title';

class Clients extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            arrows: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
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
            <section className="clients_logo_area_two bg_color" id="clients">
                <div className="container">
                    <Title tCenter="text-center" stitle="Trusted by Great Partners"
                           btitle="Some of Great companies portfolios discribe."/>
                    <Clientsliders {...settings} className="clients_slider">
                        <div className="item">
                            <a href=".#"><img src={require('../image/1.png')} alt=""/></a>
                        </div>
                        <div className="item">
                            <a href=".#"><img src={require('../image/2.png')} alt=""/></a>
                        </div>
                        <div className="item">
                            <a href=".#"><img src={require('../image/3.png')} alt=""/></a>
                        </div>
                        <div className="item">
                            <a href=".#"><img src={require('../image/4.png')} alt=""/></a>
                        </div>
                        <div className="item">
                            <a href=".#"><img src={require('../image/5.png')} alt=""/></a>
                        </div>
                        <div className="item">
                            <a href=".#"><img src={require('../image/6.png')} alt=""/></a>
                        </div>
                        <div className="item">
                            <a href=".#"><img src={require('../image/5.png')} alt=""/></a>
                        </div>
                    </Clientsliders>
                </div>
            </section>
        );
    }

}

export default Clients;
