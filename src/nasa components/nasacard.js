import React from 'react';
import styled from 'styled-components';

//styling nasacard content area
const HeaderTwo = styled.h2 `
    color: white;
    border-bottom: 1px solid white;
    font-size: 3rem;
`;

//styling text section
const textBox = styled.p `
border: 1px solid #003b59;
`;

//explanation section
const HeaderThree = styled.h3 `
    color: white;
    border-bottom: 
    font-size: 2rem;
`;



const NasaCard = props => {
    
    return (

        <div className='photoReceived' key={props.id}> 
            <HeaderTwo>{props.info}</HeaderTwo>
            <img src = {props.url} alt='space picture'/>
            <textBox>{props.date}</textBox>
            <HeaderThree>{props.explanation}</HeaderThree>
            <footer>{props.copyright}</footer>
        </div>
    );
};

export default NasaCard;