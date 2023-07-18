import React from "react";
import MainSlider from "./MainSlider";
import { styled } from "styled-components";
import BG1 from '../asset/GroupBG9.png'
import Navbar from "./navbar";



const GroupCpom = styled.div`
background-image: url(${BG1});
background-repeat: no-repeat;
padding: 1px;

`;
const Group = () => {
    return (
        <>
            <GroupCpom>
                <Navbar />
                <MainSlider />
            </GroupCpom>
        </  >
    );
};

export default Group;