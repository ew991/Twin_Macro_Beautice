import React from "react";
import Footer from "../component/footer";
import Retagel from "./Retacgel";
import CardConten from "../component/Cardconten";
import Group from '../asset/Group.png';
import Theblog from "./TheBlog";



const HomePlus = () => {
    return (
        <>
            <Retagel />
            <CardConten CheckSide={true} CheckBtn={true} Cardimg={Group} h1text='About Us' h2text='We are the best beauty clinic' h3text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.' Cardbutton='Learn More' />
            <Theblog />
            <Footer />
        </  >
    );
};

export default HomePlus;