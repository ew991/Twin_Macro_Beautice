import React from 'react';
import styled from 'styled-components';
import fame1 from '../asset/icon-1.png';
import fame2 from '../asset/icon-2 .png';
import fame3 from '../asset/icon-3.png';
import icon from '../asset/angle-double-right.png';
const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  align-items: center;
  margin-top: 68px;
  gap: 66px;
  padding: 0 150px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 50px;
  }
`;


const Text = styled.h6`
font-size: 18px;

`;
const Text2 = styled.p`
font-size: 14px;
letter-spacing: 1.4px;
`;


const Text3 = styled.h5`
display: flex;
gap: 5px;
font-size: 14px;
cursor: pointer;
`;


const Image = styled.img`

`;
const Bloc = styled.div`

`;
const Block = styled.div`
display: flex;
flex-direction: column;
gap:10px ;
 padding-left: 37px;
 padding-top: 31px;
width: 261px;
height: 303px;
/* flex-shrink: 0; */
border-radius: 25px;
border: 1px solid #E2E2E2;
background: #FFF;
`;

const TextConten = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
margin-top: 150px;
text-align: center;
`;

const MainService = () => {
    return (
        <>
            <TextConten>
                <h5>Main Services</h5>
                <h2>Our focus services</h2>
                <p>lorem ipsum dolor sit amet</p>
            </TextConten>
            <Container>

                <Block>
                    <Bloc>

                        <Image src={fame1} alt="Image" />
                    </Bloc>
                    <Text>Beauty consultation</Text>
                    <Text2>Lorem ipsum dolor sit amet, consectetur adipiscing.</Text2>
                    <Text3>Learn more <Image src={icon} /> </Text3>

                </Block>
                <Block style={{ border: '1px solid #9BA2E0' }}>
                    <Bloc>

                        <Image src={fame2} alt="Image" />
                    </Bloc>
                    <Text>Skin treatments</Text>
                    <Text2>Lorem ipsum dolor sit amet, consectetur adipiscing.</Text2>
                    <Text3>Learn more <Image src={icon} /> </Text3>

                </Block>
                <Block>
                    <Bloc>

                        <Image src={fame3} alt="Image" />
                    </Bloc>
                    <Text>Beauty product</Text>
                    <Text2>Lorem ipsum dolor sit amet, consectetur adipiscing.</Text2>
                    <Text3>Learn more <Image src={icon} /> </Text3>

                </Block>


            </Container>
        </>
    );
};

export default MainService;
