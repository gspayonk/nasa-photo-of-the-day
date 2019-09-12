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

//header div
const TopHeader = styled.header`
  color: red;

`;



//actual app
function App() {

  return (

    <WrapperDiv>

      <TopHeader>
        <HeaderOne>Space Exploration</HeaderOne>
      </TopHeader>
    
      
      <NasaPod/>
      
    </WrapperDiv>
  );
}

export default App;
