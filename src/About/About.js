import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Slide from "./Slide";
import tw from "twin.macro";
import Group1 from "./Group1";
import Group2abt from "./Group2";




const About = () => {
    const Wrapper = tw.div`
    relative
  `;

    const BackgroundImage = tw.div`
    absolute
    top-0
    left-0
    right-0
    bottom-0
    bg-cover
    bg-center
    z-0
  `;
    return (
        <>
            <Wrapper>
                <BackgroundImage
                    css={{
                        backgroundImage: 'url(../asset/Vector11.png)',
                    }}
                />
                <Navbar />
                <Group1 />
                <Slide />
                <Group2abt />
                <Footer />

            </Wrapper>
        </  >
    );
};

export default About;