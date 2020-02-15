import React, { Fragment } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

const Navbar = () => {
  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
  });

  return (
    <Fragment>
      <nav>
        <div className='nav-wrapper center-align '>
          <a href='#!' className='brand-logo '>
            FLOCK
          </a>
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          {/* <ul className='right hide-on-med-and-down'>
            <li>
              <a href='About.html'>About</a>
            </li>
          </ul> */}
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        {/* <li>
          <a href='About.html'>About</a>
        </li> */}
      </ul>
    </Fragment>
  );
};

export default Navbar;
