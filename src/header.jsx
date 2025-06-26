import React from 'react';
import ProjectPage from './ProjectPage.jsx';
import { Link } from 'react-router-dom';


function Header() {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetID = e.currentTarget.getAttribute('data-scroll');
    const targetSection = document.getElementById(targetID);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (<>
        <div className="header pt-5 animate-slideFade">
          <div className="logo-name">
            <h1>Riymon</h1>
          </div>
          <div className="right-header">
            <ul>
              <li>
                <Link to="/" className="hover:cursor-pointer">Home</Link>
                  <a
                    href="#about" data-scroll="about" onClick={handleSmoothScroll}
                  >
                    About Me
                  </a>
                  <a href="#services" data-scroll="services" onClick={handleSmoothScroll}>
                    Services 
                  </a>
                  <Link to="/projects"className="proj-page">Project</Link>
                  <a href="#contact" data-scroll="contact" onClick={handleSmoothScroll}>
                    Contact 
                  </a>
              </li>
            </ul>
          </div>
        </div>
      </>
  );
}

export default Header