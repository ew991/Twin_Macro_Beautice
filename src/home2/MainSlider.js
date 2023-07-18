import React from 'react';
import styled from 'styled-components';
import fame1 from '../asset/Group 4.png'
const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-top: 110px;
  gap: 218px;
  padding: 0 150px;

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
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: 125%;
`;
const Text2 = styled.h6`
color: #D8DCFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 1.6px;
`;

const Button = styled.button`
  width: 179px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #FFF;
  background: rgba(255, 255, 255, 0.00);
  background-color: inherit;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Poppins';
  letter-spacing: 1.2px;
  &:hover{
            background-color: inherit;        
        }
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
    /* justify-content: center;
    order: -1; */
    display:none;
  }
`;

const Image = styled.img`
  width: 127px;
  /* height: 127px; */
`;

const MainSlider = () => {
  return (
    <>
      <Container>
        <LeftBlock>
          <Text>Your beauty center place</Text>
          <Text2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae lobortis.</Text2>
          <Button>More Details</Button>
        </LeftBlock>
        <RightBlock>
          <Image src={fame1} alt="Image" />Tour Video
        </RightBlock>
      </Container>
    </>
  );
};

export default MainSlider;
