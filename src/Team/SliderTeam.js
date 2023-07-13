import React from 'react';
import styled from 'styled-components';

import BgSlider from '../asset/Grouppp.png';
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





const SliderT = () => {
    return (
        <>
            <Container>
                <LeftBlock>
                    <Text>Customer satisfaction is
                        our main goal</Text>
                    <Text2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Text2>
                </LeftBlock>

            </Container>
        </>
    );
};

export default SliderT;