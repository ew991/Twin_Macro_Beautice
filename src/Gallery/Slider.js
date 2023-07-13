import React from 'react';
import styled from 'styled-components';
import fame1 from '../asset/Group 4.png';
import BgSlider from '../asset/Group44.png';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 529px;
  /* justify-content: space-between; */
  align-items: center;
  justify-content: center;
  margin-top: 110px;
  gap: 41px;
  padding: 0 150px;
  background-image: url(${BgSlider});

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: stretch;
    gap: 50px;
  }
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15px;
  @media (min-width: 769px) {
    max-width: 500px;
  }
  

  @media (max-width: 768px) {
    margin-left: 0px;

    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const Text = styled.h1`
color: #FFF;
font-family: Poppins;
font-size: 36px;
font-style: normal;
font-weight: 600;
line-height: 125%;
min-width: 610px;
`;
const Text2 = styled.h6`
color: #CACACA;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 1.6px;
min-width: 555px;
`;



const Image = styled.img`
justify-content: center;
  width: 127px;
  margin:0;
  /* height: 127px; */
`;
const SildeBtn = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 130px;
@media (max-width: 768px) {
    display: none;
  }
`;
const Slider = () => {
    return (
        <>
            <Container>
                <LeftBlock>
                    <Text>Watch the video tour</Text>
                    <Text2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Text2>
                    {/* <Button>More Details</Button> */}
                </LeftBlock>

                <Image src={fame1} alt="Image" />

            </Container>
        </>
    );
};

export default Slider;