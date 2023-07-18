import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import SliderT from "./SliderTeam";
import Testimonials from "./Testimonials";
import GroupT from "./GroupT";




const Team = () => {
    return (
        <>
            <Navbar />
            <GroupT />
            <SliderT />
            <Testimonials />
            <Footer />
        </  >
    );
};

export default Team;