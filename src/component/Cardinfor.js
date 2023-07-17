import React from "react";
import { styled } from "styled-components";
import tw from 'twin.macro';
const Container = styled.div(({ Nang }) => [
    Nang
        ? tw`md:flex md:flex-col lg:flex lg:flex-row `
        : tw`lg:flex lg:flex-col`,
    tw`gap-[80px] p-[0 150px] mt-[120px] `
]);
const Box = styled.div(({ imgFist }) => [
    imgFist
        ? tw`md:flex md:flex-col lg:flex lg:flex-row `
        : tw`lg:flex lg:flex-col`,
    tw`gap-[20px]  `
]);
const Buttn = styled.button(({ HasBtn }) => [
    HasBtn ? tw`block` : tw` hidden`,
    tw`mt-[35px]`

]);

const Text1 = tw.h5`
`;
const Text2 = tw.h2`
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
const Text22 = tw.div`
max-w-[288px]
`;
const Cardinfor = ({ CheckSideT, CheckSide, CheckBtn, h1text, h2text, h3text, h4text, h5text, Cardbutton, Cardimg1, Cardimg2, Cardimg3, h1textBlock2, h1textBlock3, h2textblock, h2textblock2, h2textblock3 }) => {

    return (
        <>
            <Container Nang={CheckSideT}>
                <Box imgFist={CheckSide}   >
                    <img src={Cardimg1} />
                    <div>
                        <Text1  >{h1text}</Text1>

                        <Text22 >{h2textblock} </Text22>                   <Text2  >{h2text}</Text2>
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
                <Box imgFist={CheckSide}   >
                    <img src={Cardimg2} />
                    <div>
                        <Text1  >{h1textBlock2}</Text1>
                        <Text22 >{h2textblock2} </Text22>
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
                <Box imgFist={CheckSide}   >
                    <img src={Cardimg3} />
                    <div>
                        <Text1  >{h1textBlock3}</Text1>
                        <Text22 >{h2textblock3} </Text22>
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

            </Container>

        </>
    );
};
export default Cardinfor;