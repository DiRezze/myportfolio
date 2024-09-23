import React from 'react';
import './../styles/projectCard.css';
import { FaBootstrap, FaReact } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import StackList from './stackList';

const ProjectCard = ({title, description, imgSrc, link, stack}) => {
    return(
        <div className='card-container' style={{backgroundImage: `url(${imgSrc})`}}>
            <div className='card-cover'>
                <div className='card-stack'>
                    <StackList thisList={stack} /> 
                </div>
                <h2 className='card-title'>{title}</h2>
            </div>
        </div>
    )
}

export default ProjectCard;
