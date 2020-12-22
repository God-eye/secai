import React, { Component } from "react";
import { Reveal } from "react-reveal/";
import Title from "./Title";
import { Link } from "react-scroll";

class bannerAbout extends Component {
  render() {
    return (
      <section className="frelencer_banner_area" id="about">
        <div className="home_bubble">
          <div className="bubble b_one"></div>
          <div className="bubble b_two"></div>
          <div className="bubble b_three"></div>
          <div className="bubble b_four"></div>
          <div className="bubble b_five"></div>
          <div className="bubble b_six"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="skill_content_two">
                <Reveal effect="fadeInUp" duration={700}>
                  <div className="skill_content_two">
                    <Title
                      btitle="THINK ➤ BUILD ➤ SHARE"
                      stitle="Let us worry about the Security"
                    />
                    <p>
                      <a href="#" style={{ fontWeight: "900" }}>
                        SecAI
                      </a>{" "}
                      - ( 'Sekai' ) is a blockchain powered decentralized code
                      sharing platform, that would ensure that a user is able to
                      use code without worrying about how to make it work, and
                      developers sharing their code can rest assured that their
                      code won't be stolen or reverse engineered.
                    </p>
                  </div>
                </Reveal>
              </div>
              <div className="frelencer_content">
                <Reveal effect="fadeInUp" duration={900}>
                  <Link
                    className="fadeInUp theme_btn active"
                    to="demo"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Use SecAI
                  </Link>
                </Reveal>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="frelencer_img">
                <Reveal effect="fadeInLeft" duration={1400}>
                  <img
                    className="f_img_one"
                    src={require("../image/f_man.png")}
                    alt=""
                  />
                </Reveal>
                <Reveal effect="fadeInRight" duration={1200}>
                  <img
                    className="f_img_two"
                    src={require("../image/table.png")}
                    alt=""
                  />
                </Reveal>
                <Reveal effect="fadeInDown" duration={1600}>
                  <img
                    className="f_img_three"
                    src={require("../image/cup.png")}
                    alt=""
                  />
                </Reveal>
                <Reveal effect="fadeInDown" duration={1600}>
                  <img
                    className="f_img_four"
                    src={require("../image/shadow.png")}
                    alt=""
                  />
                </Reveal>
                <Reveal effect="fadeInDown" duration={2000}>
                  <div className="f_img_five">
                    <img className="" src={require("../image/js.png")} alt="" />
                  </div>
                </Reveal>
                <div className="f_img_six">
                  <img className="" src={require("../image/css.png")} alt="" />
                </div>
                <div className="f_img_seven">
                  <img
                    className=""
                    src={require("../image/react.png")}
                    alt=""
                  />
                </div>
                <div className="f_img_eight">
                  <img
                    className=""
                    src={require("../image/hubspot.png")}
                    alt=""
                  />
                </div>
                <div className="f_img_nine">
                  <img
                    className=""
                    src={require("../image/php.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default bannerAbout;
