import React from 'react';
import styled from 'styled-components';

//styling nasacard content area
const HeaderTwo = styled.h2 `
    border: 8px outset #003b59;
    font-size: 3rem;
`;

//styling image section


const NasaCard = props => {
    
    return (

        <div className='photoReceived' key={props.id}> 
            <HeaderTwo>{props.info}</HeaderTwo>
            <img src = {props.url}/>
            <p>{props.date}</p>
            <h3>{props.explanation}</h3>
            <footer>{props.copyright}</footer>
        </div>
    );
};

export default NasaCard;