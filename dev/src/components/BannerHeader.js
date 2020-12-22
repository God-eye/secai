import React from 'react';
import Reveal from 'react-reveal/Reveal/';
import WaterWave from 'react-water-wave';
import useTypewriter from "react-typewriter-hook"
import {useState, useEffect, useRef} from "react";

const MagicOcean = [
    "We are Secure",
    "We use Blockchain",
    "We are a Marketplace",
];
let index = 0;

function BannerHeader() {
    const [magicName, setMagicName] = useState("A code sharing platform");
    const intervalRef = useRef({});
    const name = useTypewriter(magicName);
    useEffect(
        () => {
            intervalRef.current = setInterval(() => {
                index = index > 5 ? 0 : ++index;
                setMagicName(MagicOcean[index]);
            }, 6000);
            return function clear() {
                clearInterval(intervalRef.current);
            };
        },
        [magicName]
    );
    return (
        <section id="home">
            <WaterWave interactive={true} strength={100} dropRadius = {25} resolution = {128} perturbance = {0.02} className="banner_area banner_shap_two"
                       style={{width: '100%', height: '100%', backgroundSize: 'cover'}}
                       imageUrl={require("../image/secai-greenblack.png")}>
                {() => (
                    <div className="container">
                        <div className="banner_content text-left">
                            <Reveal effect="fadeInUp" duration={1500}>
                                <h2 className="wow fadeInLeft animated">SECAI</h2>
                            </Reveal>
                            <Reveal effect="fadeInUp" duration={2200}>
                                <h4 className="wow fadeInUp animated cursor">{name} &zwnj;</h4>
                            </Reveal>
                        </div>
                    </div>
                )}
            </WaterWave>
        </section>
    );
}

export default BannerHeader;
