import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar';
import Content from './components/Content';

function App() {
  // Two states are created and initialized to false
  const [isNightMode, setIsNightMode] = useState(false);

  // Function to toggle the mode
  const toggleMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    // Container for the entire page
    <div className="container-fluid">
      {/* Row for the sidebar and content */}
      <div className="row">
        {/* SideBar and Content are passed the states and function */}
        <SideBar isNightMode={isNightMode} toggleMode={toggleMode} />
        <Content isNightMode={isNightMode} />
      </div>
    </div>
  );
}

export default App;
