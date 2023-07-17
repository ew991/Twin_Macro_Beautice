import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import phoneImg from '../asset/phone-volume.png'
const Container = tw.div`
p-[0 150px] mt-[169px]
`;
const Box = tw.div`

`;
const Box2 = tw.div`

`;
const Box2_1 = tw.div`
flex flex-col  lg:flex-row  gap-[84px]
`;

const Text2 = tw.h2`
[letter-spacing: 0.1px]
min-w-[391px] 
text-[36px]
`;
const Text3 = tw.p`
max-w-[391px]
`;
const Text3p = tw.p`
text-end italic col-[#8B8B8B] text-[12px] 
`;
const Img = tw.img`
 flex
`;
const Link = styled.a`
color: #091156;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 1.6px;
`;


const Search = tw.div`
[display: flex;]
lg:w-[658px]
lg:h-[73px]
`;
const Input = styled.input`
border-radius: 25px 0px 0px 25px;
border: none;
flex-grow: 1;
padding: 30px;
border: 1px solid #D9DDFE;

background: #FFF;
&::placeholder{

color: #C5C5C5;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 1.6px;
}
`;
const BtnPhone = styled.button`
flex-shrink:0;
width: 113px;
border-radius: 0px 25px 25px 0px;
height: 73px;
display: flex;
justify-content: center;
align-items: center;

`;
const RequestCall = () => {
    return (
        <>
            <Container>
                <Box>

                    <Box2_1>
                        <Box2>
                            <Text2>Request call services</Text2>
                            <Text3>Lorem ipsum dolor sit amet, consect adipiscing elit <Link href="/Contact">Contact Us.</Link></Text3>

                        </Box2>
                        <Box2>
                            <Search>
                                <Input placeholder="Insert your phone number here ..."></Input>
                                <BtnPhone><Img src={phoneImg} /></BtnPhone>
                            </Search>
                            <Text3p>Toll free for our coverage areas.</Text3p>
                        </Box2>
                    </Box2_1>
                </Box>



            </Container>

        </  >
    );
};

export default RequestCall;