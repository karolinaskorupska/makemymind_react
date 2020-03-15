import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = ({ handleHamburgerMenu })=>{

    return(
        <nav>
        {" "}
        <ul>
          <li>
            <NavLink onClick={handleHamburgerMenu} exact to="/index" title="o nas" target="_self">
              o nas
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              onClick={handleHamburgerMenu}
              to="http"
              title="/o projekcie"
              target="_self"
            >
              o projekcie
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              onClick={handleHamburgerMenu}
              to="/trainings"
              title="uslugi"
              target="_self"
            >
              usługi
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              onClick={handleHamburgerMenu}
              to="/trainers"
              title="trenerzy"
              target="_self"
            >
              trenerzy
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              onClick={handleHamburgerMenu}
              to="/contact"
              title="kontakt"
              target="_self"
            >
              kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    )
}
export default Navigation;