import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import ProfessionT from "../component/ProfessionTeam";
import CardConten from "../component/Cardconten";
import Group from '../asset/Group.png';
import Group2 from '../asset/Group2.png';
import Aboutus from "./Aboutus";
import Slide from "./Slide";
import Client from "./Client";




const About = () => {
    return (
        <>

            <Navbar />
            <Aboutus />
            <ProfessionT />
            <Slide />
            <CardConten
                CheckSide={true}
                CheckBtn={false}
                Cardimg={Group}
                h1text='Our Vision'
                h2text='We are the best beauty clinic'

                h3text={<>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.<br /><br /> Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</>}
                Cardbutton='Learn More' />
            <CardConten
                CheckSide={false}
                CheckBtn={false}
                Cardimg={Group2}
                h1text='Our Mission'
                h2text='Special & premium service
                to any clients'
                h3text={<>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.<br /><br /> Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</>}
                Cardbutton='Learn More' />
            <Client />
            <Footer />


        </  >
    );
};

export default About;