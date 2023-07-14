import React from 'react';
import styled from 'styled-components';
import BgSlider from '../asset/BackgroundHome2.png';
import tw from 'twin.macro';
import Img1 from '../asset/trusted clinic.png';
import Img2 from '../asset/customer love.png';
import Img3 from '../asset/asian branch.png';
import Img4 from '../asset/licensed worker.png';
const Container = styled.div`
  display: flex;
  height: 698px;
  /* justify-content: space-between; */
  align-items: center;
  justify-content: center;
  margin-top: 110px;
  gap: 135px;
  padding: 0 150px;
  background-image: url(${BgSlider});
  background-repeat: no-repeat;

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
const RightBlock = tw.div`
grid grid-cols-2 gap-x-[72px] gap-y-[43px]
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
color: #D8DCFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 1.6px;
min-width: 486px;
`;



const Image = styled.img`

`;

const Slider_H = () => {
  return (
    <>
      <Container>
        <LeftBlock>
          <Text>Why choosing us?</Text>
          <Text2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Text2>
          {/* <Button>More Details</Button> */}
        </LeftBlock>
        <RightBlock>
          <Image src={Img1} />
          <Image src={Img2} />
          <Image src={Img3} />
          <Image src={Img4} />

        </RightBlock>

      </Container>
    </>
  );
};

export default Slider_H;