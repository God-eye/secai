import React, {Component} from 'react';
import Title from './Title';
import Fade from 'react-reveal/Fade';

class Services extends Component {
    render() {
        return (
            <section className="work_area bg_color seo_service_info" id="service">
                <div className="container seo_service_info">
                    <Title tCenter="text-center" stitle="Why US?"
                           btitle="How projects should be"/>
                    <Fade bottom cascade duration={1000}>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="work_item wow fadeInUp seo_service_item"
                                     data-wow-delay="0.1s">
                                    <img className="work_img"
                                         src={require(`../image/service-1.png`)} alt=""/>
                                    <h2 className="t_color">Think</h2>
                                    <p>There are many variations of pssages of Lorm available, bu in some form, Lorem
                                        Ipsum is simply dummy text.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="work_item wow fadeInUp seo_service_item"
                                     data-wow-delay="0.1s">
                                    <img className="work_img"
                                         src={require(`../image/service-3.png`)} alt=""/>
                                    <h2 className="t_color">Build</h2>
                                    <p>There are many variations of pssages of Lorm available, bu in some form, Lorem
                                        Ipsum is simply dummy text.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="work_item wow fadeInUp seo_service_item"
                                     data-wow-delay="0.1s">
                                    <img className="work_img"
                                         src={require(`../image/service-2.png`)} alt=""/>
                                    <h2 className="t_color">Share</h2>
                                    <p>There are many variations of pssages of Lorm available, bu in some form, Lorem
                                        Ipsum is simply dummy text.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="work_item wow fadeInUp seo_service_item"
                                     data-wow-delay="0.1s">
                                         
                                    <img className="work_img"
                                         src={require(`../image/service-2.png`)} alt=""/>
                                    <h2 className="t_color">Security</h2>
                                    <p>There are many variations of pssages of Lorm available, bu in some form, Lorem
                                        Ipsum is simply dummy text.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="work_item wow fadeInUp seo_service_item"
                                     data-wow-delay="0.1s">
                                         
                                    <img className="work_img"
                                         src={require(`../image/service-2.png`)} alt=""/>
                                    <h2 className="t_color">Binary Compilation</h2>
                                    <p>There are many variations of pssages of Lorm available, bu in some form, Lorem
                                        Ipsum is simply dummy text.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="work_item wow fadeInUp seo_service_item"
                                     data-wow-delay="0.1s">
                                         
                                    <img className="work_img"
                                         src={require(`../image/service-2.png`)} alt=""/>
                                    <h2 className="t_color">Decentralization</h2>
                                    <p>There are many variations of pssages of Lorm available, bu in some form, Lorem
                                        Ipsum is simply dummy text.</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        )
    }
}

export default Services;
