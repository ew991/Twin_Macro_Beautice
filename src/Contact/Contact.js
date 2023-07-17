import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Map from '../asset/map.png';
import tw from "twin.macro";
import GetInTouch from "./GetInTouch";
import ContactUsF from "./ContactForm";


const Img = tw.img`
mt-[112px]
`;

const Contact = () => {
    return (
        <>
            <Navbar />
            <ContactUsF />
            <Img src={Map} />
            <GetInTouch />
            <Footer />
        </  >
    );
};

export default Contact;