import React from "react";
import { NavLink, Link } from "react-router-dom";

const FooterRight = () => {
  return (
    <div className="right">
      <div>
        Fitness dla umysłu
        <nav className="nav-small">
          <table>
            <tbody>
              <tr>
                <td>
                  <NavLink exact to="index" title="o nas" target="_blank">
                    o nas
                  </NavLink>
                </td>
                <td>
                  <NavLink exact to="trainers" title="trenerzy" target="_blank">
                    trenerzy
                  </NavLink>
                </td>
              </tr>
              <tr>
                <td>
                  <NavLink exact to="http" title="o projekcie" target="_blank">
                    o projekcie
                  </NavLink>
                </td>
                <td>
                  <NavLink exact to="contact" title="kontakt" target="_blank">
                    kontakt
                  </NavLink>
                </td>
              </tr>
              <tr>
                <td>
                  <NavLink exact to="trainings" title="uslugi" target="_blank">
                    usługi
                  </NavLink>
                </td>
              </tr>
            </tbody>
          </table>
        </nav>
      </div>
    </div>
  );
};
export default FooterRight;