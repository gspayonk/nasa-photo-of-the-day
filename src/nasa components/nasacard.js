import React from 'react';

const NasaCard = props => {
    
    return (

        <div className='photoReceived' key={props.id}> 
            <h2>{props.info}</h2>
            <img src = {props.url}/>
            <p>{props.date}</p>
            <h3>{props.explanation}</h3>
            <footer>{props.copyright}</footer>
        </div>
    );
};

export default NasaCard;