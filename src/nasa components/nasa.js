import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import NasaCard from './nasacard'; 
import styled from 'styled-components';

//styling area where information is received
const InfoSection = styled.div `
    border: 2px solid #f8f8f8;
    padding: 3%;
    border-radius: 20px;
    margin-top: 2%;
    margin-left: 8%;
    width: 80%;
`;


//setting up axios/api 
function NasaPOD(){

    const [nasa, setImg] = useState ([]);

    useEffect(() => {
    
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)

        .then(response => {
            const nasa = response.data;
            console.log('POTD', nasa);
            setImg(nasa);
        })

        .catch(error => {
            console.log('Sorry! The galaxy you want to explore is out of reach.', error);
        });
    }, []);

    console.log(nasa);

//information taken from data
return (

    <InfoSection> 
        <NasaCard 
        copyright={nasa.copyright}
        info={nasa.title}
        url={nasa.url}
        date={nasa.date}
        explanation={nasa.explanation}
        />
    </InfoSection>
    )
}

export default NasaPOD;