import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SCP from './SCP.json';
import Scp from './Scp';
import Header from './Header';
import Nav from './Nav'; 

function App() {
  return (
    <div>
      <div className="container mt-4">
        <Header /> 
        <Routes>
          <Route path="/" element={<Nav />} />
          {SCP.map((scp) => (
            <Route
              key={scp.id}
              path={`/scp/${scp.id}`}
              element={
                <Scp
                  subject={scp.subject}
                  class={scp.class}
                  description={scp.description}
                  containment={scp.containment}
                  additional ={scp.additional}
                  images={scp.images}
                />
              }
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
