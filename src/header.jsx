import React from 'react';

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


  return (
    <section>
      <head>
        <title>Riymon`s Site</title>
      </head>
      <header>
        <div className=" header py-1 grid grid-cols-2 gap-3 my-5 animate-slideFade">
          <div className="logo-name">
            <h1>Riymon</h1>
          </div>
          <div className="right-header">
            <ul>
              <li>
                <label>+0(954) 520-7076</label>
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
                <button className="book-now">Projects</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Header;
