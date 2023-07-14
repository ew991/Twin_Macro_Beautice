import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import ProfessionT from "../component/ProfessionTeam";
import AssistanceT from "./AssistanceTeam";
import SliderT from "./SliderTeam";
import Testimonials from "./Testimonials";




const Team = () => {
    return (
        <>
            <Navbar />
            <ProfessionT />
            <AssistanceT />
            <SliderT />
            <Testimonials />
            <Footer />
        </  >
    );
};

export default Team;