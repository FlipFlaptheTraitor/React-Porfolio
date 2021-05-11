import React, { useEffect } from 'react';


function Nav() {
  
  return (
    <header>
    <div id="name">
    <h1>Wesley Miller's Portfolio</h1>
</div>
    
  <nav>
    <ul>
      <li>
        <a href="#about-me">About Me</a>
      </li>
      <li>
        <a href="#work">Work</a>
      </li>
      <li>
        <a href="#contact-me">Contact Me</a>
      </li>
      <li>
        <a href="#resume">Resume</a>
      </li> 
    </ul>
  </nav>

</header>
  );
}

export default Nav;
