import React from 'react';
import './App.css';
import 'fabric-webpack';
import Canvas from "./components/canvas";

const App = () => {

  return (
    <div className="App">
      <Canvas height={680} width={800}/>
    </div>
  )
};

export default App;
