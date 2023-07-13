import React from 'react';
import styled from 'styled-components';
import fame1 from '../asset/Group 4.png';
import BgSlider from '../asset/Group3.png';
const Container = styled.div`
  display: flex;
  height: 529px;
  /* justify-content: space-between; */
  align-items: center;
  margin-top: 110px;
  gap: 218px;
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


const RightBlock = styled.button`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  min-width: 275px;
  background-color: inherit;
  &:hover{
            background-color: inherit;        
        }
  @media (max-width: 768px) {
    justify-content: center;
    order: -1;
  }
`;

const Image = styled.img`
  width: 127px;
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
const MSlider = () => {
    return (
        <>
            <Container>
                <LeftBlock>
                    <Text>Best responsibility and service
                        for our customers</Text>
                    <Text2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Text2>
                    {/* <Button>More Details</Button> */}
                </LeftBlock>
                <RightBlock>
                    <Image src={fame1} alt="Image" />Tour Video
                </RightBlock>
            </Container>
        </>
    );
};

export default MSlider;