import React from "react";
import './App.css';
import 'h8k-components';


function App() {
  const title = 'Client List'
  return (
    <div className="App">
      <nav class="app-header">
      <div class="layout-row align-items-center justify-content-center">
        <section class="logo">{title}</section>
      </div>
    </nav>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
      </div>
    </div>
  );
}

export default App;
