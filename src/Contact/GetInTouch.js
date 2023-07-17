
import React from 'react';
import styled from 'styled-components';
import Animation1 from '../asset/mail-bulk.png'
import Animation2 from '../asset/phone-alt.png'
import Animation3 from '../asset/map-marker-alt.png'
import TwFbInt from '../asset/Social Media.svg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 150px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const UpperBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8px;
  gap: 10px;
`;

const Text = styled.h5`
  margin:0;
  margin-top: 40px;
`;
const Text2 = styled.h2`
  margin: 0; 

`;
const Text3 = styled.p`
  margin: 0;

`;
const iconTr = styled.div`


`;

const LowerBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 85px;
  gap:30px ;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SmallRectangle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  height: 404px;
  margin: 0 8px;
  border-radius: 42px;
  background: #FFF;
  padding: 8px;
  gap: 4px;
  
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const SmallImage = styled.img`

  object-fit: cover;
  border-radius: 4px;
`;

const SmallText = styled.p`
  margin: 8px 0;
  max-width: 270px;
  text-align: center;
`;
const SmallText1 = styled.h6`
  margin: 8px 0;  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.1px;
`;

const GetInTouch = () => {
    return (
        <Container>
            <UpperBlock>
                <TextContainer>
                    <Text>Get in Touch</Text>
                    <Text2>Get direct handling by us</Text2>
                    <Text3>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</Text3>
                </TextContainer>
            </UpperBlock>
            <LowerBlock>
                <SmallRectangle>
                    <SmallImage src={Animation1} alt="Image 1" />
                    <Text>Address</Text>
                    <SmallText1>101 Baker Street, NY</SmallText1>
                    <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</SmallText>

                </SmallRectangle>
                <SmallRectangle style={{ width: '424px', boxShadow: '0px 25px 50px 25px #F6F7FF' }} >
                    <SmallImage src={Animation2} alt="Image 2" />
                    <Text>Phone</Text>
                    <SmallText1>+896 120 5889</SmallText1>
                    <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</SmallText>

                </SmallRectangle>
                <SmallRectangle>
                    <SmallImage src={Animation3} alt="Image 3" />
                    <Text>Mail</Text>
                    <SmallText1>mail@company.com</SmallText1>
                    <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</SmallText>

                </SmallRectangle>
            </LowerBlock>
        </Container >
    )
}
export default GetInTouch;