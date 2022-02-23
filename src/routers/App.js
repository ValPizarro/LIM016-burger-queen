import React from 'react';
import { Routes, Route }from 'react-router-dom';

import Login from '../pages/Login';
import Salon from '../pages/Salon';
import NotFound from '../pages/Notfound';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/salon" element={<Salon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
