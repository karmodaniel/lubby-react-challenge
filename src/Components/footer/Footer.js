import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

import {
    FaHome,
    FaUserFriends,
    FaGithubAlt,
  } from "react-icons/fa";

  
function Footer() {
    return (
        <footer className="footer">
        <ul className="tabs">
          <li>
            <Link to="/home">
              <span>
                <FaHome className=" tab-icons" />
              </span>
              <p className=" tab-text">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/repos">
              <span>
                <FaGithubAlt className="tab-icons" />
              </span>
              <p>Repos</p>
            </Link>
          </li>

          <li>
            <Link
              to={{ pathname: "/list", state: 1 }}
              className="links"
            >
              <span>
                <FaUserFriends className="tab-icons" />
              </span>
              <p>Segudiores</p>
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: "/list", state: 2 }}
              className="links"
            >
              <span>
                <FaUserFriends className="tab-icons" />
              </span>
              <p>Seguindo</p>
            </Link>
          </li>
        </ul>
      </footer>
    )
}

export default Footer;