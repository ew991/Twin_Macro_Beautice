import React from "react";
import { styled } from "styled-components";
import Bgretagel from '../asset/BackgroundSlider.png'
import Navbar2 from "./Navbar_";
import MainSlider from "./MainSlider";

const Reatcgel = styled.div`
background-image: url(${Bgretagel}) ;
background-repeat: no-repeat;
min-height: 918px;
padding-top:1px;
`;
const Retagel = () => {
    return (
        <>
            <Reatcgel>
                <Navbar2 />
                <MainSlider />
            </Reatcgel>

        </ >
    );
};

export default Retagel;