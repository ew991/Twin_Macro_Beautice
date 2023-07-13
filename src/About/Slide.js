import React from "react";
import tw from "twin.macro";
import { styled } from "styled-components";
import Bg from '../asset/Group9.png';
const Box = styled.div`
margin-top: 150px;
background-image: url(${Bg});
background-repeat: no-repeat;
height: 529px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2px;
`;


const H3 = tw.h3`
max-w-[732px]
`;
const H4 = tw.h4`
`;
const H5 = tw.p`
text-center
max-w-[680px]
text-[#CACACA]
`;
const Slide = () => {
    return (
        <>
            <Box>
                <H4>Business Slogan</H4>
                <H3>Best responsibility and service
                    for our customers</H3>
                <H5>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</H5>

            </Box>

        </ >
    );
};

export default Slide;