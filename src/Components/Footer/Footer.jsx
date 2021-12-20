import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="company" color="inherit">
          <h4>© Bass Center</h4>
        </div>
        <div className="cont">
          <ul>
            <h5>Contacto</h5>
            <li>
              <a href="/">bass@mail.com</a>
            </li>
            <li>
              <a href="/">1112345678</a>
            </li>
          </ul>
        </div>
        <div className="cont">
          <ul>
            <h5>Información</h5>
            <li>
              <a href="/">Nosotros</a>
            </li>
            <li>
              <a href="/">Condiciones</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy">
        <h5>Copyright © 1996 Cristian J M</h5>
      </div>
    </div>
  );
}
