import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar';
import Content from './components/Content';

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar isNightMode={isNightMode} toggleMode={toggleMode} />
        <Content isNightMode={isNightMode} />
      </div>
    </div>
  );
}

export default App;
