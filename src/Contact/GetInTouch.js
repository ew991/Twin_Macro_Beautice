import React from "react";
import tw from "twin.macro";
import Phone from '../asset/Phone.png';
import Address from '../asset/Address.png';
import Mail from '../asset/Mail.png';
import star from '../asset/Star.png';
const GetInTouch = () => {
    const Title = tw.div`
    text-center mt-[118px] 
    `;
    const Img = tw.img`
    `;
    const Box1 = tw.div`
    flex items-center justify-center gap-[91px] mt-[61px] p-[0 150px]
    `;
    const Box2 = tw.div`
    flex flex-col items-center justify-center gap-[33px]
    `;
    const P = tw.p`
text-[14px] max-w-[544px] text-center
`;
    return (
        <>
            <Title>
                <h5>Get in Touch</h5>
                <h2>Get direct handling by us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
            </Title>
            <Box1>

                <Img src={Address} />
                <Img src={Phone} />
                <Img src={Mail} />

            </Box1>

        </>
    );
};

export default GetInTouch;