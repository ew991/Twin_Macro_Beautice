
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import CardConten from "../component/Cardconten";
import Animation1 from '../asset/Animation11.png';
import Animation2 from '../asset/Animation22.png';
import Animation3 from '../asset/Animation33.png';
import OurService from "./OurService";
import MSlider from "./Slider";
import Accordion from "../component/Accordion";

import React, { useState } from 'react';
import Collapse from "../component/Accordion";



const Service = () => {
    const [activeSection, setActiveSection] = useState(null);

    const handleAccordionClick = (sectionId) => {
        setActiveSection(sectionId === activeSection ? null : sectionId);
    };
    return (
        <>
            <Navbar />
            <OurService />
            <CardConten
                CheckSide={true}
                CheckBtn={false}
                Cardimg={Animation1}
                h1text='About Us'
                h2text='We are the best beauty clinic'
                h3text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.'
                h4text='Make an Appointment'
                h5text='>>'
                Cardbutton='Learn More' />
            <CardConten
                CheckSide={false}
                CheckBtn={false}
                Cardimg={Animation2}
                h1text='About Us'
                h2text='We are the best beauty clinic'
                h3text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.'
                h4text='Make an Appointment'
                h5text='>>'
                Cardbutton='Learn More' />
            <CardConten
                CheckSide={true}
                CheckBtn={false}
                Cardimg={Animation3}
                h1text='About Us'
                h2text='We are the best beauty clinic'
                h3text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.'
                h4text='Make an Appointment'
                h5text='>>'
                Cardbutton='Learn More' />
            <MSlider />
            <Collapse />
            <Footer />
        </  >
    );
};

export default Service;