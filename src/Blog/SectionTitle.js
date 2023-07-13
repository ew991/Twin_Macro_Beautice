
import React from 'react';
import styled from 'styled-components';
import fame1 from '../asset/Group 4.png';
import BgSlider from '../asset/Group5.png';
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 285px;
  margin-top: 110px;
  padding: 0 150px;
  background-image: url(${BgSlider});

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: stretch;
    gap: 50px;
  }
`;

const LeftBlock = styled.div`
  width: 100%;
  display: flex;
  text-align: center;


  justify-content: space-between;
  gap: 15px;
  @media (min-width: 769px) {
    
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
`;
const Text2 = styled.h6`
color: #CACACA;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 1.6px;
`;




const SectionTitle = () => {
    return (
        <>
            <Container>
                <LeftBlock>
                    <Text>Blog</Text>
                    <Text2>Home	• Blog</Text2>

                </LeftBlock>



            </Container>
        </>
    );
};

export default SectionTitle;