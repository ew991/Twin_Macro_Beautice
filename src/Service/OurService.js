import React from "react";
import tw from "twin.macro";
import anh1 from '../asset/unsplash_5TJ0Hoy5FLY.png'
import anh2 from '../asset/unsplash_ZOT2Mewzmh8.png'
import anh3 from '../asset/unsplash_gzfIO69Q6eM.png'
import anh4 from '../asset/unsplash_pTrhfmj2jDA1.png'
const Box = tw.div`
flex flex-col text-center mt-[125px]
`;
const Box2 = tw.div`
flex flex-col gap-[68px] items-center justify-center mt-[70px] overflow-auto
`;
const Box2_1 = tw.div`
flex flex-row gap-[84px]
`;
const Text1 = tw.h5`
`;
const Text2 = tw.h2`
`;
const Text3 = tw.p`
`;
const Img = tw.img`

`;

const OurService = () => {
    return (
        <>
            <Box>
                <Text1>Our Services</Text1>
                <Text2>We focus on your beauty</Text2>
                <Text3>Lorem ipsum dolor sit amet</Text3>
            </Box>
            <Box2>
                <Box2_1><Img src={anh1} />
                    <Img src={anh2} /></Box2_1>
                <Box2_1><Img src={anh3} />
                    <Img src={anh4} /></Box2_1>


            </Box2>

        </  >
    );
};

export default OurService;