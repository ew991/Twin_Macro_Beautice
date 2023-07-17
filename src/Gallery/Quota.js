import React from "react";
import tw from "twin.macro";

import { styled } from "styled-components";

const Container = tw.div`
mt-[120px]

p-[0 150px]
`;
const Box = tw.div`
flex flex-col gap-[50px] lg:gap-[125px]  lg:flex-row
`;
const Box2 = tw.div`
flex items-center
`;
const Box2_1 = tw.div`
flex flex-col gap-[12px]

`;
const Text1 = tw.h5`
[letter-spacing:0]
`;
const Text2 = tw.h2`
[letter-spacing: 0.1px] 
lg:min-w-[642px]
text-[36px]
`;
const Text3 = tw.p`
`;

const Button = styled.button`
width: 316px;
`;
const Quota = () => {
    return (
        <>
            <Container>
                <Text1>Get The Quota</Text1>
                <Box>

                    <Box2_1>
                        <Text2>Want to be handled by our professional team immediately?</Text2>
                        <Text3>Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</Text3>
                    </Box2_1>

                    <Box2>
                        <Button>Make an Appointment</Button>
                    </Box2>
                </Box>


            </Container>

        </  >
    );
};

export default Quota;