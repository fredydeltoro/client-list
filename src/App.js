import React from "react";
import './App.css';
import ClientList from './components/ClientList';
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
      <ClientList />
    </div>
  );
}

export default App;
