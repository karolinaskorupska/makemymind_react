import React from 'react';
import { NavLink, Link } from "react-router-dom";
const Navigation = ()=>{
    return(
        <nav>
        {" "}
        <ul>
          <li>
            <NavLink exact to="index" title="o nas" target="_self">
              o nas
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="http"
              title="o projekcie"
              target="_self"
            >
              o projekcie
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="trainings"
              title="uslugi"
              target="_self"
            >
              usługi
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="trainers"
              title="trenerzy"
              target="_self"
            >
              trenerzy
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="contact"
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