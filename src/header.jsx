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
        <div className="header py-1 grid grid-cols-2 gap-3 my-5 animate-slideFade">
          <div className="logo-name">
            <h1>Riymon</h1>
          </div>
          <div className="right-header">
            <ul>
              <li>
                <Link to="/" className="hover:cursor-pointer">Home</Link>
                <label>
                  <a
                    href="#about" data-scroll="about" onClick={handleSmoothScroll}
                  >
                    About Me
                  </a>
                </label>
                <label>
                    <a href="#services" data-scroll="services" onClick={handleSmoothScroll}>
                    Services </a>
                </label>
                <Link to="/projects" className="proj-page">Projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </>
  );
}

export default Header