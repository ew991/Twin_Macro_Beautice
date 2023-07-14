import React from "react";

import CardImg from '../asset/unsplash_0_McYfdyEDA.png';
import CardImg2 from '../asset/unsplash_3ewkNkfJj2k2.png';
import CardImg3 from '../asset/unsplash_7tDGb3HrITg.png';
import Cardinfor from "../component/Cardinfor";
import { styled } from "styled-components";


const Block = styled.div`
display: flex; 

padding-right: 150px;

`;
const BlockLeft = styled.div`
width: 81%;

`;
const BlockRight = styled.div`
width: 350px;
background-color: gray;
`;
const BlockBlog = () => {
    return (
        <>
            <Block>
                <BlockLeft>
                    <Cardinfor styled={{ pading: '0px' }}
                        CheckSideT={false}
                        CheckSide={false}
                        CheckBtn={true}
                        Cardimg1={CardImg2}
                        Cardimg2={CardImg3}
                        Cardimg3={CardImg}
                        h1text='About Us'
                        h2text='We are the best beauty clinic'
                        h3text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.'
                        Cardbutton='Learn More' />

                </BlockLeft>
                <BlockRight></BlockRight>
            </Block>


        </  >
    );
};

export default BlockBlog;