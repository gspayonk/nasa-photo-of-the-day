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
    color: white;
    font-size: 4rem;
`;

//explanation section
const HeaderThree = styled.h3 `
    color: white;
    font-size: 2rem;
`;

const SecFooter = styled.footer `
    color: grey;
    font-size: 1.5rem;
`;


const NasaCard = props => {
    
    return (

        <div className='photoReceived' key={props.id}> 
            <HeaderTwo>{props.info}</HeaderTwo>
            <img src = {props.url} alt='space picture'/>
            <textBox>{props.date}</textBox>
            <HeaderThree>{props.explanation}</HeaderThree>
            <SecFooter>{props.copyright}</SecFooter>
        </div>
    );
};

export default NasaCard;