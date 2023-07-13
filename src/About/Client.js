import React from "react";
import tw from "twin.macro";
import { styled } from "styled-components";
import ClientLg from '../asset/Clients Logo.png'

const Box = styled.div`

margin-top: 130px;



display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2px;
`;



const H3 = tw.h5`
max-w-[732px]
`;
const H4 = tw.h2`
`;
const H5 = tw.p`

`;
const Img = tw.img`
mt-[94px]
`;
const Client = () => {
    return (
        <>
            <Box>
                <H4>Our Clients</H4>
                <H3>Well-known agencies</H3>
                <H5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</H5>
                <Img src={ClientLg} />
            </Box>

        </ >
    );
};

export default Client;