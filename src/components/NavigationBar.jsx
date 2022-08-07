import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* <a href="/">Home</a> */}
            <NavLink to="/" className="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="about" className="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="active">
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
