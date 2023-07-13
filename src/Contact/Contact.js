import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import ContactUs from "../component/ContactUs";
import Map from '../asset/map.png';
import tw from "twin.macro";


const Img = tw.img`
mt-[112px]
`;

const Contact = () => {
    return (
        <>
            <Navbar />
            <ContactUs />
            <Img src={Map} />
            <Footer />
        </  >
    );
};

export default Contact;