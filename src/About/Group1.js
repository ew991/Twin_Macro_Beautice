import React from "react";
import { styled } from "styled-components";

import BG2 from '../asset/BubbleBGAbt.png'
import Aboutus from "./Aboutus";
import ProfessionT from "../component/ProfessionTeam";




const GroupCpom = styled.div`
position: relative;
padding: 1px;

`;
const Img = styled.img`
position: absolute;
z-index: -10;
right: 0;
top: 510px;
`;
const Group1 = () => {
    return (
        <>
            <GroupCpom>
                <Aboutus />
                <Img src={BG2} />
                <ProfessionT />
            </GroupCpom>
        </  >
    );
};

export default Group1;