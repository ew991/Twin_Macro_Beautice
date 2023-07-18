import React from "react";
import { styled } from "styled-components";

import BG2 from '../asset/Bubble BGFooter.png';
import Group from '../asset/Group.png';
import Group2 from '../asset/Group2.png';
import CardConten from "../component/Cardconten";
import Client from "./Client";




const GroupCpom = styled.div`
position: relative;
padding: 1px;

`;
const Img = styled.img`
position: absolute;
z-index: -10;
left: 0;
top: 190px;
`;
const Group2abt = () => {
    return (
        <>
            <GroupCpom>
                <CardConten
                    CheckSide={true}
                    CheckBtn={false}
                    Cardimg={Group}
                    h1text='Our Vision'
                    h2text='We are the best beauty clinic'

                    h3text={<>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.<br /><br /> Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</>}
                    Cardbutton='Learn More' />
                <CardConten
                    CheckSide={false}
                    CheckBtn={false}
                    Cardimg={Group2}
                    h1text='Our Mission'
                    h2text='Special & premium service
                to any clients'
                    h3text={<>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.<br /><br /> Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</>}
                    Cardbutton='Learn More' />
                <Img src={BG2} />
                <Client />

            </GroupCpom>
        </  >
    );
};

export default Group2abt;