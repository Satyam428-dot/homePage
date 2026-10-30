import React from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      < Footer />
    </>
  );
}

export default App;