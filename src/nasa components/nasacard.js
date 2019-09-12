import React from 'react';

const NasaCard = props => {
    
    return (

        <div className='photoReceived' key={props.id}> 
            <h2>title: {props.title}</h2>
            <img src = {props.url}/>
            <p>{props.date}</p>
            <h3>{props.explanation}</h3>
        </div>
    );
};

export default NasaCard;