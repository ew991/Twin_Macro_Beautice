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
const Textp = tw.span`
italic
text-[#8B8B8B] text-[14px] font-thin [letter-spacing:0]
`;
const TextBlue = tw.span`
text-[#091156]
`;
const AssistanceT = () => {
    return (
        <>
            <Title>
                <Text1>Assistance Team</Text1>
                <Text2>Meet the pro assistance</Text2>
                <Text3>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</Text3>

            </Title>
            <Cardinfor
                CheckSideT={false}
                CheckSide={true}
                CheckBtn={false}
                Cardimg1={CardImg}
                Cardimg2={CardImg2}
                Cardimg3={CardImg3}
                h1text={<><TextBlue>Lina Gustav /</TextBlue><Textp>Pharmacist</Textp> </>}
                h1textBlock2={<><TextBlue>Adam White /</TextBlue><Textp>Pharmacist</Textp> </>}
                h1textBlock3={<><TextBlue>Jane Doe /</TextBlue><Textp>Pharmacist</Textp> </>}

                h3text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.'
            />
        </  >
    );
};

export default AssistanceT;