import React from "react";
import Navbar from "./navbar";
import MainSlider from "./MainSlider";
import ProfessionT from "./ProfessionTeam";
import CoreService from "./CoreService";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <MainSlider />
            <CoreService />
            <AboutUs />
            <ProfessionT />
            <ContactUs />
            <Footer />
        </  >
    );
};

export default Home;