import React from "react";
import { styled } from "styled-components";
import tw from 'twin.macro';
const Box = styled.div(({ imgFist }) => [
    imgFist
        ? tw`md:flex md:flex-col lg:flex lg:flex-row `
        : tw`md:flex md:flex-col  lg:flex lg:flex-row-reverse`,
    tw`gap-[167px] p-[0 150px] mt-[120px] `
]);
const Buttn = styled.button(({ HasBtn }) => [
    HasBtn ? tw`block` : tw` hidden`,
    tw`mt-[35px]`

]);

const Text1 = tw.h5`
[letter-spacing:0]
`;
const Text2 = tw.h2`
[letter-spacing:0]
`;
const Text3 = tw.p`
mt-[10px]
`;
const Text4 = tw.h6`
mt-[5px]
`;
const Text5 = tw.h5`
mt-[5px]
font-[900]
`;
const Boxmini = tw.div`
 flex gap-[10px]
`;
const CardConten = ({ CheckSide, CheckBtn, h1text, h2text, h3text, h4text, h5text, Cardbutton, Cardimg }) => {

    return (
        <>
            <Box imgFist={CheckSide}   >
                <img src={Cardimg} />
                <div>
                    <Text1  >{h1text}</Text1>
                    <Text2  >{h2text}</Text2>
                    <Text3  >{h3text}</Text3>
                    <Boxmini>
                        <Text4  >{h4text}</Text4>
                        <Text5  >{h5text}</Text5>
                    </Boxmini>



                    <div>
                        <Buttn HasBtn={CheckBtn} >{Cardbutton}</Buttn>
                    </div>

                </div>
            </Box>

        </>
    );
};
export default CardConten;