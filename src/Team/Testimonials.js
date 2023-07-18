import React from "react";
import tw from "twin.macro";
import arrleft from '../asset/arrow-left.svg';
import arrRight from '../asset/arrow-right.svg';
import avatar from '../asset/unsplash_Z5g_6TLS6Ho.png';
import star from '../asset/Star.png';
const Testimonials = () => {
    const Title = tw.div`
    text-center mt-[118px] 
    `;
    const Img = tw.img`
    `;
    const Box1 = tw.div`
    flex items-center justify-center gap-[91px] mt-[61px]
    `;
    const Box2 = tw.div`
    flex flex-col items-center justify-center gap-[33px]
    `;
    const P = tw.p`
text-[14px] max-w-[544px] text-center overflow-auto max-h-[120px]
`;
    return (
        <>
            <Title>
                <h5>Our Testimonials</h5>
                <h2>What our customer says</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
            </Title>
            <Box1>
                <Img src={arrleft} />
                <Box2>
                    <Img src={avatar} />
                    <P>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.
                    </P>
                    <Img src={star} />
                </Box2>
                <Img src={arrRight} />
            </Box1>

        </>
    );
};

export default Testimonials;