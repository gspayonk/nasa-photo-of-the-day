import React from "react";
import "./App.css";
import NasaPod from './nasa components/nasa';


function App() {

  return (

    <div className="App">

      <h1>Here's Your Daily Dose of Space!</h1>

      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <NasaPod/>
      
    </div>
  );
}

export default App;
