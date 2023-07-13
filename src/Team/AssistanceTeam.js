import React from "react";
import Cardinfor from "../component/Cardinfor";

import CardImg from '../asset/unsplash_byGTytEGjBo.png';
import CardImg2 from '../asset/unsplash_8YG31Xn4dSw.png';
import CardImg3 from '../asset/unsplash_Fsgzm8N0hIY.png';
import tw from "twin.macro";

const Title = tw.div`
text-center mt-[110px]
`;
const Text1 = tw.h5``;
const Text2 = tw.h2``;
const Text3 = tw.p``;

const AssistanceT = () => {
    return (
        <>
            <Title>
                <Text1>The Blog</Text1>
                <Text2>Our latest news</Text2>
                <Text3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text3>

            </Title>
            <Cardinfor
                CheckSideT={false}
                CheckSide={true}
                CheckBtn={false}
                Cardimg1={CardImg}
                Cardimg2={CardImg2}
                Cardimg3={CardImg3}
                h1text='About Us'
                h2text='We are the best beauty clinic'
                h3text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.'
                Cardbutton='Learn More' />
        </  >
    );
};

export default AssistanceT;