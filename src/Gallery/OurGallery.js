import React from "react";
import tw from "twin.macro";
import anh1 from '../asset/unsplash_FVh_yqLR9eA1.png'
import anh2 from '../asset/unsplash_3ewkNkfJj2k.png'
import anh3 from '../asset/unsplash_xayCTz6N2nM.png'
import anh4 from '../asset/unsplash_Pe9IXUuC6QU.png'
import anh5 from '../asset/unsplash_fvInY-Gh7sc.png'
import anh6 from '../asset/unsplash_HEde-a_T4E8.png'
import anh7 from '../asset/unsplash_9Wa1HgE1XlA.png'
import anh8 from '../asset/unsplash_PqyzuzFiQfY.png'
import anh9 from '../asset/unsplash_4SUyx4KQ5Ik.png'
import { styled } from "styled-components";

const Container = tw.div`
p-[0 150px]
`;
const Box = tw.div`
flex flex-col  mt-[125px]
`;
const Box2 = tw.div`
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[36px] mt-[75px] overflow-auto max-h-[750px]
`;
const Box2_1 = tw.div`
flex flex-col  lg:flex-row gap-[84px]
`;
const Text1 = tw.h5`
`;
const Text2 = tw.h2`
[letter-spacing: 0.1px] 
lg:min-w-[615px]
text-[36px]
`;
const Text3 = tw.p`
`;
const Text3p = tw.p`
text-start max-w-[660px] mt-[66px]
`;
const Img = tw.img`

`;
const TextBl = styled.span`
color: #091156;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 1.6px;
`;
const OurGallery = () => {
    return (
        <>
            <Container>
                <Box>
                    <Text1>Our Gallery</Text1>
                    <Box2_1>
                        <Text2>Check out the collection pictures from our clinic</Text2>
                        <Text3>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Text3>
                    </Box2_1>

                </Box>
                <Box2>
                    <Img src={anh1} />
                    <Img src={anh2} />
                    <Img src={anh3} />
                    <Img src={anh4} />
                    <Img src={anh5} />
                    <Img src={anh6} />
                    <Img src={anh7} />
                    <Img src={anh8} />
                    <Img src={anh9} />
                </Box2>
                <Text3p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim, <TextBl>our teams.</TextBl></Text3p>

            </Container>

        </  >
    );
};

export default OurGallery;