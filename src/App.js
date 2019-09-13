import React from "react";
import "./App.css";
import NasaPod from './nasa components/nasa';
import styled from 'styled-components';

//body wrapper style component
const WrapperDiv = styled.div`
    font-family: monospace;
    text-align: center;
    padding: 3%;
    background-color:#002f47;
`;

//h1 style component
const HeaderOne = styled.h1`
  color: white;
`;

//video div
// const TopVideo = styled.video`
//   var vid = document.getElementById('moonloop');
//   vid.loop = true; 
// `;

//body div component
const BodyDiv = styled.body`
background-color:#002f47
`;

//footer section
const FooterSection = styled.footer`
background-color:#002f47
color: white;
font-size: 1.5 rem;
`;




//actual app
function App() {

  return (

    <BodyDiv>
      <WrapperDiv>

        <HeaderOne>Space Exploration</HeaderOne>
        {/* <TopVideo><video source src='../img/moonloop.mov' type='video/mp4'/></TopVideo> */}
      
          <NasaPod/>
      
      </WrapperDiv>
      <FooterSection>Gris Edited This</FooterSection>

    </BodyDiv>
  );
}

export default App;
