import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import NasaCard from './nasacard'; 

function NasaPOD(){
    const [nasa, setImg] = useState ([]);

    useEffect(() => {
    
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)

        .then(response => {
            const nasa = response.data;
            console.log('POD', nasa);
            setImg(nasa);
        })

        .catch(error => {
            console.log('Sorry! The galaxy you want to explore is out of reach.', error);
        });
    }, []);

    console.log(nasa);

return (

    <div className='photoContainer'> 
        <NasaCard 
        info={nasa.title}
        url={nasa.url}
        date={nasa.date}
        explanation={nasa.explanation}
        />
    </div>
    )
}
export default NasaPOD;