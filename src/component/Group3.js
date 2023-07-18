import React from "react";
import { styled } from "styled-components";

import BG2 from '../asset/BackgroundBubbleH1.png'
import ContactUs from "./ContactUs";
import ProfessionT from "./ProfessionTeam";



const GroupCpom = styled.div`
position: relative;
padding: 1px;

`;
const Img = styled.img`
position: absolute;
z-index: -10;
left: 0;
top: 850px;
`;
const Group3 = () => {
    return (
        <>
            <GroupCpom>
                <ProfessionT />
                <Img src={BG2} />
                <ContactUs />
            </GroupCpom>
        </  >
    );
};

export default Group3;