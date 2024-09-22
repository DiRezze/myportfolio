import React from 'react';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiKotlin } from 'react-icons/si';
import { 
    BiLogoBootstrap, 
    BiLogoCPlusPlus, 
    BiLogoCss3, 
    BiLogoFirebase, 
    BiLogoHtml5, 
    BiLogoJava, 
    BiLogoJavascript, 
    BiLogoPython, 
    BiLogoTypescript 
} from 'react-icons/bi';

const iconMap = {
    html: BiLogoHtml5,
    bootstrap: BiLogoBootstrap,
    css: BiLogoCss3,
    cpp: BiLogoCPlusPlus,
    kotlin: SiKotlin,
    react: FaReact,
    js: BiLogoJavascript,
    java: BiLogoJava,
    firebase: BiLogoFirebase,
    py: BiLogoPython,
    ts: BiLogoTypescript,
    tailwind: RiTailwindCssFill,
};

const Icons = ({ list }) => (
    <>
        {list.map(stack => {
            const IconComponent = iconMap[stack];
            return IconComponent ? <IconComponent key={stack} size={24} className='stack-ico' /> : null;
        })}
    </>
);

const StackList = ({ thisList }) => (
    <div className='card-stack'>
        <Icons list={thisList} />
    </div>
);

export default StackList;
