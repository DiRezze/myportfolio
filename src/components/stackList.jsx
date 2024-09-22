import React from 'react';
import { BiLogoBootstrap, BiLogoCPlusPlus, BiLogoCss3, BiLogoFirebase, BiLogoHtml5, BiLogoJava, BiLogoJavascript, BiLogoPython, BiLogoTypescript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiKotlin } from 'react-icons/si';

const Icons = ({ list }) => {
    return (
        <>
            {list.map(stack => {
                switch (stack) {
                    case "html":
                        return <BiLogoHtml5 key={stack} size={24} className='stack-ico' />;
                    case "bootstrap":
                        return <BiLogoBootstrap key={stack} size={24} className='stack-ico' />;
                    case "css":
                        return <BiLogoCss3 key={stack} size={24} className='stack-ico' />;
                    case "cpp":
                        return <BiLogoCPlusPlus key={stack} size={24} className='stack-ico' />;
                    case "kotlin":
                        return <SiKotlin key={stack} size={24} className='stack-ico' />;
                    case "react": 
                        return <FaReact key={stack} size={24} className='stack-ico' />;
                    case "js":
                        return <BiLogoJavascript key={stack} size={24} className='stack-ico' />;
                    case "java":
                        return <BiLogoJava key={stack} size={24} className='stack-ico' />;
                    case "firebase":
                        return <BiLogoFirebase key={stack} size={24} className='stack-ico' />;
                    case "py":
                        return <BiLogoPython key={stack} size={24} className='stack-ico' />;
                    case "ts":
                        return <BiLogoTypescript key={stack} size={24} className='stack-ico' />;
                    case "tailwind":
                        return <RiTailwindCssFill key={stack} size={24} className='stack-ico' />;
                    default:
                        return null;
                }
            })}
        </>
    );
};

const StackList = ({thisList}) => {
    return(
        <div className='card-stack'>
            <Icons list={thisList}/>
        </div>
    );
}

export default StackList;
