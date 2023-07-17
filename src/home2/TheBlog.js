import React from "react";
import Cardinfor from "../component/Cardinfor";

import CardImg from '../asset/unsplash_0_McYfdyEDA.png';
import CardImg2 from '../asset/unsplash_3ewkNkfJj2k2.png';
import CardImg3 from '../asset/unsplash_7tDGb3HrITg.png';
import tw from "twin.macro";

const Title = tw.div`
text-center mt-[110px]
`;
const Text1 = tw.h5``;
const Text2 = tw.h2``;
const Text3 = tw.p``;
const TextBlue = tw.h6`
text-[18px] [letter-spacing:0.1px]
`;
const Theblog = () => {
    return (
        <>
            <Title>
                <Text1>The Blog</Text1>
                <Text2>Our latest news</Text2>
                <Text3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text3>

            </Title>
            <Cardinfor
                CheckSideT={true}
                CheckSide={false}
                CheckBtn={false}
                Cardimg1={CardImg}
                Cardimg2={CardImg2}
                Cardimg3={CardImg3}
                h2textblock={<TextBlue>How much does a consultation cost at our clinic?</TextBlue>}
                h2textblock2={<TextBlue>Watch out! don't choose the wrong beauty product</TextBlue>}
                h2textblock3={<TextBlue>About skin care you need to know</TextBlue>}
                h3text={'A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...'}
                h5text={'Learn more >>'}
                Cardbutton='Learn More' />
        </  >
    );
};

export default Theblog;