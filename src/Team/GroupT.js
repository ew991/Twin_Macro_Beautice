import React from "react";
import { styled } from "styled-components";

import BG2 from '../asset/BubbleBGAbt.png'
import AssistanceT from "./AssistanceTeam";
import ProfessionT from "../component/ProfessionTeam";



const GroupCpom = styled.div`
position: relative;
padding: 1px;

`;
const Img = styled.img`
position: absolute;
z-index: -10;
right: 0;
top: 50px;
`;
const GroupT = () => {
    return (
        <>
            <GroupCpom>
                <ProfessionT />
                <Img src={BG2} />
                <AssistanceT />
            </GroupCpom>
        </  >
    );
};

export default GroupT;