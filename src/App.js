import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div >
      <Nav></Nav>
      <main>
        <About></About>
        <Work></Work>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;