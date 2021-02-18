import React from "react";
import "./App.css";

import Header from './components/Header'
import Content from './components/Content'

function App() {
  return (
    <div className="app">
      <Header />
      <Content/>
        {/* Body->Left */}
          {/* Body->Left->Top->Stories */}
          {/* Body->Left->Bottom->Timeline */}
        {/* Body->Right->Recommended */}
    </div>
  );
}

export default App;
