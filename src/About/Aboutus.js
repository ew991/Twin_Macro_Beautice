import React from "react";
import tw from "twin.macro";
import AboutImg from '../asset/unsplash_DE6rYp1nAho.png'
const Box = tw.div`
p-[0 150px] mt-[125px]
`;
const H = tw.h5``;
const A = tw.h2` lg:max-w-[733px]`;
const P = tw.p` lg:max-w-[680px]`;
const Img = tw.img`

`;
const Box2 = tw.div`
p-[0 80px]
`
const Aboutus = () => {
    return (
        <>
            <Box>
                <H>About</H>
                <A>We are a leading beauty clinic that has been around since 2002</A>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</P>

            </Box>
            <Box2>

                <Img src={AboutImg} />
            </Box2>
        </ >
    );
};

export default Aboutus;