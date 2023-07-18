import React from "react";

import CardImg from '../asset/unsplash_0_McYfdyEDA.png';
import CardImg2 from '../asset/unsplash_3ewkNkfJj2k2.png';
import CardImg3 from '../asset/unsplash_7tDGb3HrITg.png';
import CardImgr1 from '../asset/unsplash_xayCTz6N2nM8.png';
import CardImgr2 from '../asset/unsplash_DiJKOYIiNmQ.png';
import CardImgr3 from '../asset/unsplash_yfmjALh1S6s.png';
import Socialimg1 from '../asset/Group 8.svg';
import IconTg from '../asset/VectorTamG.png'
import search from '../asset/search.png'
import folder from '../asset/Vector0.png'
import { styled } from "styled-components";
import tw from "twin.macro";


const Block = tw.div`
p-[0 20px]
flex xl:p-[0 150px] 
gap-[60px]
flex-col-reverse
md:flex-row
lg:flex-row
`;
const BlockLeft = tw.div`
 flex flex-col gap-[133px] lg:w-[730px] lg:mt-[108px] 

`;
const BlockRight = tw.div`
mt-[30px]
lg:w-[350px]

lg:mt-[108px]
flex flex-col gap-[83px]
`;

const Img = tw.img`
`;
const Text1 = tw.h5`
flex gap-[15px] 
`;
const Text2 = tw.h2`
text-[18px] lg:text-[36px] [letter-spacing:0.1px]
`;
const Text3 = tw.p`
text-[12px] lg:text-[16px]
max-w-[592px] overflow-auto md:max-h-[125px] max-h-[80px]
`;
const Button = tw.button`
flex items-center justify-center gap-[8px]
w-[200px] h-[30px]
lg:w-[226px] lg:h-[58px]
`;
const CoverConten = tw.div`
p-[20px] lg:p-[0px]
flex  justify-center items-center
[border-radius: 0px 0px 50px 50px;]
[background: #FFF;]
[box-shadow: 10px 13px 80px 14px #F2F4FF;]
lg:h-[500px]

`;
const Conten = tw.div`
max-w-[620px] flex flex-col gap-[20px] 

`;
const Cover = tw.div`
flex flex-col min-w-[400px] lg:w-full  
`;
const BlockR = tw.div`
pl-[49px]
pt-[58px]
pb-[60px]

[border-radius: 25px;]
[background: #FFF;]
[box-shadow: -2px 4px 31px 9px #F2F4FF;]
`;
const BlockrR = tw.div`
pt-[58px]
pb-[60px]

[border-radius: 25px;]
[background: #FFF;]
[box-shadow: -2px 4px 31px 9px #F2F4FF;]
`;
const Search = tw.div`
flex w-full 
xl:w-[350px]
h-[65px]
`;
const Input = styled.input`
border-radius: 50px 0px 0px 50px;
border: none;
flex-grow: 1;
padding: 30px;

box-shadow: -2px 4px 31px 9px #F2F4FF;

background: #FFF;
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
const BtnPhone = styled.button`
flex-shrink:0;

border-radius: 0px 50px 50px 0px;
width: 76px;
height: 65px;
display: flex;
justify-content: center;
align-items: center;
background: #172176;

`;


const Text1r = tw.h6`
text-[16px]
`;
const Text1rr = tw.h6`
text-[16px] ml-[49px]
`;
const Text2r = tw.h5`
text-[14px]
`;
const Text3r = tw.p`
text-[12px]
`;
const Card1 = tw.div`
flex gap-[26px] mt-[26px]
`;
const Card1r = tw.div`

`;
const Grid = tw.div`
 grid grid-cols-3 gap-y-[19px] gap-x-[5px] mt-[23px]
`;
const Elip = styled.div`
border-radius: 50px;
background: #FFF;
box-shadow: 0px 4px 17px 0px #EEF0FF;
text-align: center;
max-width: 82px;
`;
const Card_img = tw.div`
flex 
`;

const Pagination = tw.div`flex items-center justify-center gap-7 mt-[96px]`;

const PageItem1 = tw.div`flex items-center justify-center
 bg-[#172176] w-[50px] h-[50px] 
overflow-hidden rounded-full text-[#ffffff] shadow-lg`;
const PageItem = tw.div`text-[#C7C7C7]`;

const BlockBlog = () => {
    return (
        <>
            <Block>
                <BlockLeft>
                    <Cover>
                        <Img src={CardImg2} />

                        <CoverConten>
                            <Conten>
                                <Text1> <Img src={folder} /> Consultation</Text1>
                                <Text2>
                                    How much does a consultation cost at our clinic?
                                </Text2>
                                <Text3>
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…
                                </Text3>
                                <Button>
                                    Read More<Img src={IconTg} />
                                </Button>
                            </Conten>

                        </CoverConten>

                    </Cover>
                    <Cover>
                        <Img src={CardImg3} />

                        <CoverConten>
                            <Conten>
                                <Text1> <Img src={folder} /> Beauty</Text1>
                                <Text2>
                                    Watch out! don't choose the wrong beauty product
                                </Text2>
                                <Text3>
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…
                                </Text3>
                                <Button>
                                    Read More<Img src={IconTg} />
                                </Button>
                            </Conten>

                        </CoverConten>

                    </Cover>
                    <Cover>
                        <Img src={CardImg} />

                        <CoverConten>
                            <Conten>
                                <Text1> <Img src={folder} /> Treatments</Text1>
                                <Text2>
                                    About skin care you need to know
                                </Text2>
                                <Text3>
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…
                                </Text3>
                                <Button>
                                    Read More<Img src={IconTg} />
                                </Button>
                            </Conten>

                        </CoverConten>

                    </Cover>
                </BlockLeft>
                <BlockRight>

                    <Search>
                        <Input placeholder="Search here ..."></Input>
                        <BtnPhone><Img src={search} /></BtnPhone>
                    </Search>

                    <BlockR>
                        <Text1r>Recent Posts</Text1r>
                        <Card1>
                            <Img src={CardImgr1} />
                            <Card1r>
                                <Text2r>01 jan 2021</Text2r>
                                <Text3r>Lorem ipsum dolor sit amet, consectetur adipiscing.</Text3r>
                            </Card1r>
                        </Card1>
                        <Card1>
                            <Img src={CardImgr2} />
                            <Card1r>
                                <Text2r>01 jan 2021</Text2r>
                                <Text3r>Lorem ipsum dolor sit amet, consectetur adipiscing.</Text3r>
                            </Card1r>
                        </Card1>
                        <Card1>
                            <Img src={CardImgr3} />
                            <Card1r>
                                <Text2r>01 jan 2021</Text2r>
                                <Text3r>Lorem ipsum dolor sit amet, consectetur adipiscing.</Text3r>
                            </Card1r>
                        </Card1>
                    </BlockR>
                    <BlockR>
                        <Text1r>Categories</Text1r>
                        <Text3r>Consultation</Text3r>
                        <Text3r>Beauty</Text3r>
                        <Text3r>Treatments</Text3r>
                        <Text3r>News</Text3r>
                    </BlockR>
                    <BlockR>
                        <Text1r>Categories</Text1r>
                        <Grid>

                            <Elip><Text3r>beauty</Text3r></Elip>
                            <Elip><Text3r>cute</Text3r></Elip>
                            <Elip><Text3r>skin</Text3r></Elip>
                            <Elip><Text3r>glow</Text3r></Elip>
                            <Elip><Text3r>style</Text3r></Elip>
                            <Elip><Text3r>clinic</Text3r></Elip>
                            <Elip><Text3r>style</Text3r></Elip>
                            <Elip><Text3r>great</Text3r></Elip>
                            <Elip><Text3r>cute</Text3r></Elip>
                        </Grid>


                    </BlockR>
                    <BlockrR>
                        <Text1rr>Social Connect</Text1rr>
                        <Card_img>

                            <Img src={Socialimg1} />

                        </Card_img>
                    </BlockrR>

                </BlockRight>
            </Block>
            <Pagination>
                <PageItem1>1</PageItem1>
                <PageItem>2</PageItem>
                <PageItem>3</PageItem>
            </Pagination>


        </  >
    );
};

export default BlockBlog;