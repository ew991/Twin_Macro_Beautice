import React, { useState } from "react";
import tw from "twin.macro";
import arrowDown from "../asset/angle-down.svg";
const data = [
    {
        title: "Is beauty consultation handled thoroughly?",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
    },
    {
        title: "Can I be beautiful in an instant time?",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna \n"
            + "\n"
            + " porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
    },
    {
        title:
            "Are there any side effects to the treatment methods or treatments at this clinic?",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
    },
    {
        title: "Do professionals have accreditation in their respective fields?",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
    },
];

const WrapCollap = tw.div`
flex flex-col items-center justify-center
`;
const Title = tw.h2`
mt-[116px]
text-center`;
const Wrap = tw.div`

mx-[150px]`;
const WrapLine = tw.div`
flex justify-between min-w-[972px] mt-[30px]`;
const ItemTitle = tw.h6`
text-start
`;
const ArrowDown = tw.img`ml-auto`;
const Content = tw.div`
[border-radius: 0px 0px 20px 20px; ] border-t-4 w-[972px] h-[216px] p-[0 70px] flex items-center justify-center 
bg-[#F6F7FF]
`;
const P = tw.p`
border-t-4 border-[#091156]
`;
const Collapse = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    // Function to toggle the active panel
    const togglePanel = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <>
            <Title>Services FAQ’s</Title>
            <WrapCollap>
                {data.map((item, index) => (
                    <Wrap key={index}>
                        <WrapLine onClick={() => togglePanel(index)}>
                            <ItemTitle>{item.title}</ItemTitle>
                            <ArrowDown src={arrowDown}></ArrowDown>
                        </WrapLine>

                        {activeIndex === index
                            && <Content>
                                <p >{item.content}</p>
                            </Content>
                        }
                    </Wrap>
                ))}
            </WrapCollap>
        </>
    );
};

export default Collapse;