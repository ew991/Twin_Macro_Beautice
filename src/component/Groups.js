import React from "react";
import { styled } from "styled-components";
import CoreService from "./CoreService";
import AboutUs from "./AboutUs";
import BG2 from '../asset/Bubble11.png'



const GroupCpom = styled.div`
position: relative;
padding: 1px;

`;
const Img = styled.img`
position: absolute;
z-index: -10;
right: 0;
top: 705px;
`;
const Groups = () => {
    return (
        <>
            <GroupCpom>
                <CoreService />
                <Img src={BG2} />
                <AboutUs />
            </GroupCpom>
        </  >
    );
};

export default Groups;