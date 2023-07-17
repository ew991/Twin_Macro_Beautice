import React from 'react';
import styled from 'styled-components';
// import Container from '@mui/material/Container';
import Contactimg from '../asset/Contact Animations.png';
import tw from 'twin.macro';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 0 150px;
gap :80px;
@media (max-width: 1024px) {
    flex-direction: column;
  }
`;


const FormContainer = styled.div`
.btn{
  margin-top: 17px;
}
`;

const FormRow = styled.div`
  display: flex;
  margin-bottom: 38px;
  gap: 35px;
`;

const FormInput = styled.input`
padding: 24px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1.6px;
  border-radius: 15px;
  width: 242.211px;
  border: 1px solid #D9DDFE;
  background: #FFF;
  flex: 1;
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

const FormTextarea = styled.textarea`
padding: 24px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1.6px;
  border-radius: 15px;
  border: 1px solid #D9DDFE;
  background: #FFF;
  height: 239.474px;
  max-height: 250px;
  flex: 1;
  resize: none;
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
const Box = tw.div`
flex flex-col  mt-[125px] p-[0 150px]
`;

const Box2_1 = tw.div`
flex flex-col  lg:flex-row gap-[84px]
`;
const Text1 = tw.h5`
`;
const Text2 = tw.h2`
[letter-spacing: 0.1px] 
min-w-[615px]
text-[36px]
`;
const Text3 = tw.p`
`;
const ContactUsF = () => {
    return (
        <>
            <Box>
                <Text1>Contact Us</Text1>
                <Box2_1>
                    <Text2>Contact service for our customers</Text2>
                    <Text3>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Text3>
                </Box2_1>

            </Box>
            <Container>
                <img src={Contactimg} />

                <FormContainer>


                    <FormRow>
                        <FormInput type="text" placeholder="First name" />
                        <FormInput type="text" placeholder="Last name" />
                    </FormRow>
                    <FormRow>
                        <FormInput type="text" placeholder="Email address" />
                    </FormRow>
                    <FormRow>
                        <FormInput type="text" placeholder="Subject message" />
                    </FormRow>
                    <FormRow>
                        <FormTextarea placeholder="Your inquiry here" />
                    </FormRow>
                    <button className='btn'>Send Message</button>

                </FormContainer>
            </Container>
        </>


    );
};

export default ContactUsF;
